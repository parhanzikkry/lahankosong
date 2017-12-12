var sequelize = require(__dirname + '/../dbconnection'),
	Desakel = sequelize.import(__dirname + '/../models/desakel.model'),
	Pemilik = sequelize.import(__dirname + '/../models/pemilik.model'),
	Provinsi = sequelize.import(__dirname + '/../models/provinsi.model'),
	KabKota = sequelize.import(__dirname + '/../models/kabkota.model'),
	Kecamatan = sequelize.import(__dirname + '/../models/kecamatan.model'),
	Lahan = sequelize.import(__dirname + '/../models/lahan.model'),
	Foto = sequelize.import(__dirname + '/../models/foto.model'),
	Pengelolaan = sequelize.import(__dirname + '/../models/pengelolaan.model'),
	Pengelolaanlahan = sequelize.import(__dirname + '/../models/pengelolaanlahan.model'),
	Kemitraan = sequelize.import(__dirname + '/../models/kemitraan.model'),
	Kemitraanlahan = sequelize.import(__dirname + '/../models/kemitraanlahan.model'),
	Token = require(__dirname + '/Token.controller'),
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
		this.filename;
	}

	/*Setting uploading file dan tempat penyimpanan dan cara menyimpannya*/
	SetupMulter(res) {
		if(this.code == 1) {
			this.foldertujuan = '/dist/assets/img/pemilik/';
		} else if(this.code == 2) {
			this.foldertujuan = '/dist/assets/img/lahan/';
		} else {
			res.json({status: false, code: 400, message: 'Maaf tidak bisa sembarangan upload file'});
		}
		this.storage = Multer.diskStorage({
			destination: (req, file, cb) => {
				cb(null, __dirname + '/..' + this.foldertujuan);
			},
			filename: (req, file, cb) => {
				var date = new Date();
				var unique = date.getTime().toString();
				var hash_date = crypto.createHash('sha1').update(unique + file.originalname).digest('hex');
				this.filename = hash_date + '.' +file.originalname.split('.')[file.originalname.split('.').length -1];
				cb(null, this.filename);
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
		Pemilik
		.create({
			nama_pemilik: data.body.nama_pemilik,
			alamat_pemilik: data.body.alamat_pemilik,
			no_hp_pemilik: data.body.no_hp_pemilik,
			email_pemilik: data.body.email_pemilik
		})
		.then((hasil) => {
			res.json({status: true, code: 200, message: 'Berhasil menambahkan data pemilik baru', info: hasil});
		})
		.catch((err) => {
			res.json({status: false, code: 400, message: 'Gagal menambahkan data pemilik baru', error: err});
		});
	}

	TambahFotoPemilik(data, res) {
		this.code = 1;
		this.SetupMulter(res);
		this.upload(data, res, (err) => {
			if (err) {
				console.log('masuk', err);
				res.json({status: false, code: 400, message: 'Gagal Upload foto pemilik', error: err})
			} else {
				var upload_img = fs.readFileSync(__dirname + '/..' + this.foldertujuan + data.files[0].filename).toString('hex', 0,4);
				if (!this.CheckMagicNumber(upload_img)) {
					fs.unlinkSync(__dirname + '/..' + this.foldertujuan + data.files[0].filename);
					res.json({status: false, code: 400, message: 'Maaf hanya format foto yang dapat diupload'});
				} else {
					Pemilik
						.update({
							foto_pemilik: 'assets/img/pemilik/' + data.files[0].filename
						}, {
							where: {
								id: data.params.id
							}
						})
						.then((info) => {
							res.json({status: true, code: 200, message: 'Berhasil upload foto pemilik', info: info});
						})
						.catch((err) => {
							res.json({status: false, code: 400, message: 'Gagal upload foto pemilik', error: err});
						})
				}
			}
		})
	}

	GetDataProvinsi(data, res) {
		Provinsi
			.findAll({
				order:[
					['name']	
				]
			})
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
				},
				order:[
					['name']	
				]
			})
			.then((kabupatenkota) => {
				res.json({status: true, code: 200, message: 'Berhasil mendapatkan data kabupaten atau kota', kabupatenkota: kabupatenkota});
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data kabupaten atau kota', error: err});
			});
	}

	GetDataKecamatan(data, res) {
		Kecamatan
			.findAll({
				where: {
					regency_id: data.params.regency_id
				},
				order:[
					['name']	
				]
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
				},
				order:[
					['name']	
				]
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
				fk_id_desakel: data.body.fk_id_desakel,
				alamat_lengkap_lahan: data.body.alamat_lengkap_lahan,
				longitude_lahan: data.body.longitude_lahan,
				latitude_lahan: data.body.latitude_lahan,
				luasan_lahan: data.body.luasan_lahan,
				potensi_lahan: data.body.potensi_lahan,
				jarak_air_lahan: data.body.jarak_air_lahan,
				jarak_jalan_lahan: data.body.jarak_jalan_lahan,
				keterangan_jalan_lahan:  data.body.keterangan_jalan_lahan,
				jarak_pasar_lahan: data.body.jarak_pasar_lahan,
				pengelolaan_sebelumnya_lahan: data.body.pengelolaan_sebelumnya_lahan,
				fk_id_pemilik: data.body.fk_id_pemilik,
				deskripsi_lahan: data.body.deskripsi_lahan,
				status_lahan: 'unverif',
				fk_id_publisher: Token.DecodeToken(JSON.parse(data.headers.token).token).token.id
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
				var arrayfoto = [];
				for(let i=0; i<data.files.length; i++) {
					let temp = {path_foto: 'assets/img/lahan/' +data.files[i].filename, fk_id_lahan: parseInt(data.params.id)};
					arrayfoto.push(temp);
					}
			}
			Foto
				.bulkCreate(arrayfoto)
				.then((hasil) => {
					console.log('masuk');
					res.json({status: true, code: 200, message: 'Berhasil menambahkan lahan baru', info: hasil});
				})
				.catch((err) => {
					res.json({status: false, code: 400, message: 'Gagal menambahkan foto untuk lahan', error: err});
				});
		});
	}

	TambahPengelolaanLahan(data, res) {
		var arraypengelolaanlahan = [];
		// for(let i=0; i<data.length; i++) {
		// 	let temp = {fk_id_lahan: data.params.id, fk_id_pengelolaan: data.body.fk_id_pengelolaan, detail_pengelolaanlahan: data.body.detail_pengelolaanlahan}
		// 	arraypengelolaanlahan.push(temp);
		// }
		let temp = {fk_id_lahan: data.params.id, fk_id_pengelolaan: data.body.fk_id_pengelolaan, detail_pengelolaanlahan: data.body.detail_pengelolaanlahan}
		arraypengelolaanlahan.push(temp);
		Pengelolaanlahan
			.bulkCreate(arraypengelolaanlahan)
			.then((info) => {
				res.json({status: true, code: 200, message: 'Berhasil menambahkan pengelolaan lahan', info: info});
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal menambahkan pengelolaan lahan', error: err});
			})
	}

	TambahKemitraanLahan(data, res) {
		var arraykemitraanlahan = [];
		// for(let i=0; i<data.length; i++) {
		// 	let temp = {fk_id_lahan: data.params.id, fk_id_kemitraan: data.body.fk_id_kemitraan, detail_kemitraanlahan: data.body.detail_kemitraanlahan}
		// 	arraykemitraanlahan.push(temp);
		// }
		let temp = {fk_id_lahan: data.params.id, fk_id_kemitraan: data.body.fk_id_kemitraan, detail_kemitraanlahan: data.body.detail_kemitraanlahan}
		arraykemitraanlahan.push(temp);
		Kemitraanlahan
			.bulkCreate(arraykemitraanlahan)
			.then((info) => {
				res.json({status: true, code: 200, message: 'Berhasil menambahkan kemitraan lahan', info: info});
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal menambahkan kemitraan lahan', error: err});
			})
	}
}

module.exports = new RegistrasiLahan;