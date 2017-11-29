var sequelize = require(__dirname + '/../dbconnection'),
	Desakel = sequelize.import(__dirname + '/../models/desakel.model'),
	Pemilik = sequelize.import(__dirname + '/../models/pemilik.model'),
	Provinsi = sequelize.import(__dirname + '/../models/provinsi.model'),
	KabKota = sequelize.import(__dirname + '/../models/kabkota.model'),
	Kecamatan = sequelize.import(__dirname + '/../models/kecamatan.model'),
	Lahan = sequelize.import(__dirname + '/../models/lahan.model'),
	Foto = sequelize.import(__dirname + '/../models/foto.model'),
	Multer = require('multer'),
	crypto = require('crypto'),
	path = require('path'),
	fs = require('fs');

class RegistrasiLahan {
	constructor() {
		this.magicnumber = {
			jpg: 'ffd8ffe0',
		    jpg1: 'ffd8ffe1',
		    png: '89504e47'
		};
		this.upload;
		this.storage;
		this.foldertujuan;
		this.code;
	}

	SetupMulter(res) {
		if(this.code == 1) {
			this.foldertujuan = '/../uploads/pemilik/';
		} else if(this.code == 2) {
			this.foldertujuan = '/../uploads/lahan/';
		} else {
			res.json({status: false, code: 400, message: 'Maaf tidak bisa sembarangan upload file'});
		}
		this.storage = Multer.diskStorage({
			destination: (req, file, cb) => {
				cb(null, __dirname + this.foldertujuan);
			},
			filename: (req, file, cb) => {
				var date = new Date();
				var unique = date.getTime().toString();
				var hash_date = crypto.createHash('sha1').update(unique).digest('hex');
				var filename = hash_date + '.' +file.originalname.split('.')[file.originalname.split('.').length -1];
				cb(null, filename);
			}
		});
		this.upload = Multer({
			storage: this.storage,
			fileFilter: (req, file, cb) => {
				var ext = path.extname(file.originalname).toLowerCase();
		        if(file.mimetype != 'image/png' && file.mimetype != 'image/jpeg' && ext != '.jpg' && ext != '.png' && ext != '.jpeg') {
	        		req.fileValidateError = "Only images are allowed";
		            return cb(new Error('Only images are allowed'));
		        }
		        cb(null, true);
			},
			limits: {fileSize: 1*1024*1024}
		}).any();
	}

	CheckMagicNumber(magic) {
		if (magic == this.magicnumber.jpg || magic == this.magicnumber.jpg1 || magic == this.magicnumber.png) 
			return true;
	}

	GetDataPemilik(data, res) {
		pemilik
			.findAll()
			.then((datapemilik) => {
				res.json({status: true, code: 200, message: 'Berhasil mendapatkan semua data pemilik', pemilik: datapemilik});
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data pemilik', error: err});
			});
	}

	TambahPemilik(data, res) {
		this.code = 1;
		this.SetupMulter(res);
		this.upload(data, res, (err)=> {
			if(err) {
				res.json({status: false, code: 400, message: 'Maaf hanya gambar yang dapat diupload'});
			} else {
				var upload_img = fs.readFileSync(__dirname + this.foldertujuan + data.files[0].filename).toString('hex',0,4);
				if(!this.CheckMagicNumber(upload_img)) {
					fs.unlinkSync(__dirname + dirfotopemilik + data.files[0].filename);
					res.json({status: false, code: 400, message: 'Maaf harus gambar yang diupload'});
				} else {
					Pemilik
						.create({
							nama_pemilik: data.body.nama_pemilik,
							alamat_pemilik: data.body.alamat_pemilik,
							no_hp_pemilik: data.body.no_hp_pemilik,
							email_pemilik: data.body.email_pemilik,
							foto_pemilik: data.files[0].path
						})
						.then((hasil) => {
							res.json({status: true, code: 200, message: 'Berhasil menambahkan data pemilik baru', info: hasil});
						})
						.catch((err) => {
							res.json({status: false, code: 400, message: 'Gagal menambahkan data pemilik baru', error: err});
						});
				}
			}
		});
	}

	GetDataProvinsi(data, res) {
		Provinsi
			.findAll()
			.then((provinsi) => {
				res.json({status: true, code: 200, message: 'Berhasil mendapatkan data provinsi', provinsi: provinsi});
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data provinsi', error: err});
			});
	}

	GetDataKabupatenKota(data, res) {
		KabKota
			.findAll({
				where: {
					province_id: data.params.provinsi_id
				}
			})
			.then((kabupatenkota) => {
				res.json({status: true, code: 200, message: 'Berhasil mendapatkan data kabupaten atau kota', kabupatenkota: kabupatenkota});
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data kabupaten atau kota', error: err});
			});
	}

	GetDataKecamatan(data, res) {
		Desakel
			.findAll({
				where: {
					regency_id: data.params.regency_id
				}
			})
			.then((kecamatan) => {
				res.json({status: true, code: 200, message: 'Berhasil mendapatkan data kecamatan', kecamatan: kecamatan});
			})
			.catch((err) => {
				res.json({status: true, code: 400, message: 'Gagal mendapatkan data kecamatan', error: err});
			});
	}

	GetDataDesaKelurahan(data, res) {
		Desakel
			.findAll({
				where: {
					district_id: data.params.district_id
				}
			})
			.then((datadesakelurahan) => {
				res.json({status: true, code: 200, message: 'Berhasil mendapatkan semua data dasa atau kelurahan', desakelurahan: datadesakelurahan});
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data desa atau kelurahan', error: err});
			});
	}

	TambahDesaKelurahan(data, res) {
		Desakel
			.create({
				nama_deskel: data.body.nama_deskel,
				fk_id_kecamatan: data.body.fk_id_kecamatan
			})
			.then((hasil) => {
				res.json({status: true, code: 200, message: 'Berhasil menambahkan data desa atau kelurahan baru', info: hasil});
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal menambahkan desa atau kelurahan baru', error: err});
			});
	}

	TambahLahan(data, res) {
		Lahan
			.create({
				fk_id_deskel: data.body.fk_id_deskel,
				alamat_lengkap_lahan: data.body.alamat_lengkap_lahan,
				longitude_lahan: data.body.longitude_lahan,
				latitude_lahan: data.body.latitude_lahan,
				luasan_lahan: data.body.luasan_lahan,
				pengelolaan_sebelumnya_lahan: data.body.pengelolaan_sebelumnya_lahan,
				fk_id_pemilik: data.body.fk_id_pemilik,
				deskripsi_lahan: data.body.deskripsi_lahan,
				status_lahan: 'unverif',
				fk_id_publisher: data.body.fk_id_publisher
			})
			.then((hasil) => {
				res.json({status: true, code: 200, message: 'Berhasil menambahkan lahan baru', info: hasil});
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal menambahkan lahan baru', error: err});
			});
	}

	TambahFoto(data, res) {
		this.code = 2;
		this.SetupMulter(res);
		this.upload(data, res, (err)=> {
			if(err) {
				res.json({status: false, code: 400, message: 'Maaf hanya gambar yang dapat diupload'});
			} else {
				for(let i=0; i<data.files.length; i++) {
					var upload_img = fs.readFileSync(__dirname + dirfotopemilik + data.files[i].filename).toString('hex',0,4);
					if(!this.CheckMagicNumber(upload_img)) {
						fs.unlinkSync(__dirname + dirfotolahan + data.files[i].filename);
						res.json({status: false, code: 400, message: 'Maaf harus gambar yang diupload'});
					} else {
						Foto
							.create({
								path_foto: data.files[i].path,
								fk_id_lahan: data.body.fk_id_lahan
							})
							.then((hasil) => {
								res.json({status: true, code: 200, message: 'Berhasil menambahkan lahan baru', info: hasil});
							})
							.catch((err) => {
								res.json({status: false, code: 400, message: 'Gagal menambahkan foto untuk lahan', error: err});
							});
					}
					
				}
			}
		});
	}
}

module.exports = new RegistrasiLahan;