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
	Kemitraanlahan = sequelize.import(__dirname + '/../models/kemitraanlahan.model');

class CariLahan {
	constructor() {
		this.pengelolaan;
		this.kemitraan;
		this.lahan;
		this.pengelolaanlahan;
		this.kemitraanlahan;
	}

	GetFiveLahan(data, res) {
		Lahan
			.findAll({
				where: {
					status_lahan: 'verif',
				},
				limit: 5,
				order: [
					['createdAt', 'DESC']
				],
				include: [{
					model: Kemitraanlahan,
					where: {
						fk_id_lahan: Sequelize.col('lahan.id')
					},
					include: [{
						model: Kemitraan,
						where: {
							id: Sequelize.col('kemitraanlahan.fk_id_kemitraan')
						}
					}]
				},{
					model: Pengelolaanlahan,
					where: {
						fk_id_lahan: Sequelize.col('lahan.id')
					},
					include: [{
						model: Pengelolaan,
						id: Sequelize.col('Pengelolaanlahan.fk_id_pengelolaan')
					}]
				}]
			})
			.then((fivelahan) => {
				this.lahan = JSON.parse(JSON.stringify(fivelahan));
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan 5 lahan terbaru', error: err});
			});
	}

	DaftarLahanPerkecamatan(data, res) {
		let pengelolaan = [];
		let kemitraan = [];
		Pengelolaan
			.findAll({
				order: [
					['id', 'ASC']
				],
				attributes: ['nama_pengelolaan']
			})
			.then((daftarpengelolaan) => {
				daftarpengelolaan = JSON.parse(JSON.stringify(daftarpengelolaan));
				for(let i=0; i<daftarpengelolaan.length; i++) {
					pengelolaan.push(daftarpengelolaan[i].nama_pengelolaan);
				}
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data pengelolaan', error: err});
			});
		Kemitraan
			.findAll({
				order: [
					['id', 'DESC']
				],
				attributes: ['nama_kemitraan']
			})
			.then((daftarkemitraan) => {
				daftarkemitraan = JSON.parse(JSON.stringify(daftarkemitraan));
				for(let i=0; i<daftarkemitraan.length; i++) {
					kemitraan.push(daftarkemitraan[i].nama_kemitraan);
				}
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data kemitraan', error: err});
			});
		Desakel
			.findAll({
				where: {
					district_id: data.params.fk_id
				},
				attributes: ['id', 'name']
			})
			.then((daftardesa) => {
				daftardesa = JSON.parse(JSON.stringify(daftardesa));
				let fk_id_desakel = []
				for(let i=0; i<daftardesa.length; i++) {
					fk_id_desakel.push(daftardesa[i].id);
				}
				Lahan
					.findAll({
						where: {
							status_lahan: 'verif',
							fk_id_desakel: {
								$or: fk_id_desakel
							}
						},
						attributes: ['fk_id_desakel', 'longitude_lahan', 'latitude_lahan', 'pengelolaan_lahan', 'fk_id_kemitraan']
					})
					.then((daftarlahan) => {
						daftarlahan = JSON.parse(JSON.stringify(daftarlahan));
						let data = [];
						for(let i=0;i< daftarlahan.length; i++) {
							let tempdata = {};
							for(let j=0; j<daftardesa.length; j++) {
								if (daftarlahan[i].fk_id_desakel == daftardesa[j].id) {
									tempdata = {desa: daftardesa[j].name, longitude: daftarlahan[i].longitude_lahan, latitude: daftarlahan[i].latitude_lahan, pengelolaan: pengelolaan[daftarlahan[i].fk_id_Pengelolaan - 1], kemitraan: kemitraan[daftarlahan[i].fk_id_kemitraan - 1]}
									break;
								}
							}
							data.push(tempdata);
						}
						res.json({status: true, code: 200, message: 'Berhasil mendapatkan data lahan', data: data});
					})
					.catch((err) => {
						res.json({status: false, code: 400, message: 'Gagal mendapatkan data lahan', error: err});
					});
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data desa/kelurahan', error: err});
			});
	}

	GetDetailDataLahan(data, res) {
		let pengelolaan = [];
		let kemitraan = [];
		Pengelolaan
			.findAll({
				order: [
					['id', 'ASC']
				],
				attributes: ['nama_Pengelolaan']
			})
			.then((daftarPengelolaan) => {
				daftarPengelolaan = JSON.parse(JSON.stringify(daftarPengelolaan));
				for(let i=0; i<daftarPengelolaan.length; i++) {
					Pengelolaan.push(daftarPengelolaan[i].nama_Pengelolaan);
				}
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data Pengelolaan', error: err});
			});
		Kemitraan
			.findAll({
				order: [
					['id', 'DESC']
				],
				attributes: ['nama_kemitraan']
			})
			.then((daftarkemitraan) => {
				daftarkemitraan = JSON.parse(JSON.stringify(daftarkemitraan));
				for(let i=0; i<daftarkemitraan.length; i++) {
					kemitraan.push(daftarkemitraan[i].nama_kemitraan);
				}
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data kemitraan', error: err});
			});
		Lahan
			.findOne({
				where: {
					id: data.params.id,
					status_lahan: 'verif'
				}
			})
			.then((datalahan) => {
				datalahan = JSON.parse(JSON.stringify(datalahan));
				let pemilik;
				Pemilik
					.findOne({
						where: {
							id: datalahan.fk_id_pemilik
						},
						attributes: ['nama_pemilik', 'alamat_pemilik', 'no_hp_pemilik', 'email_pemilik', 'foto_pemilik']
					})
					.then((datapemilik) => {
						pemilik = JSON.parse(JSON.stringify(datapemilik));
					})
					.catch((err) => {
						res.json({status: false, code: 400, message: 'Gagal mendapatkan data pemilik', error: err});
					});
				Desakel
					.findOne({
						where: {
							id: datalahan.fk_id_desakel
						},
						attributes: ['name']
					})
					.then((namadesa) => {
						namadesa = JSON.parse(JSON.stringify(namadesa));
						Foto
							.findAll({
								where: {
									fk_id_lahan: data.params.id
								},
								attributes: ['path_foto']
							})
							.then((datafoto) => {
								datafoto = JSON.parse(JSON.stringify(datafoto));
								let data = {desa: namadesa.name, longitude: datalahan.longitude_lahan, latitude: datalahan.latitude_lahan, Pengelolaan: Pengelolaan[datalahan.fk_id_Pengelolaan - 1], kemitraan: kemitraan[datalahan.fk_id_kemitraan - 1], deskripsi: datalahan.deskripsi_lahan};
								res.json({status: true, code: 200, message: 'Berhasil mendapatkan data detail lahan', data: {lahan: data, foto: datafoto, pemilik: pemilik}});
							})
							.catch((err) => {
								res.json({staus: false, code: 400, message: 'Gagal mendapatkan data foto', error: err});
							});
					})
					.catch((err) => {
						res.json({status: false, code: 400, message: 'Gagal mendapatkan data desa atau kelurahan', error: err});
					});
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data lahan', error: err});	
			});
	}
	SearchByCatagory(data, res) {
		/*mencari bedarsarkan kategori*/
		/*1 == Pengelolaan*/
		if(data.body.kategori == 1) {
			Lahan
				.findAll({
					where: {
						/*pilihan merupakan kiriman dari depan berupa id dari Pengelolaan*/
						fk_id_Pengelolaan: data.body.pilihan,
						status_lahan: 'verif'
					}
				})
				.then((hasil) => {
					/*niatnya pengolahan datanya jadi satu*/
				})
				.catch((err) => {
					res.json({status: false, code: 400, message: 'Gagal mencari lahan berdasarkan Pengelolaannya', error: err});
				});
		/*2 == kemitraan*/
		} else if(data.body.kategori == 2) {
			Lahan
				.findAll({
					where: {
						fk_id_kemitraan: data.body.pilihan,
						status_lahan: 'verif'
					}
				})
				.then((hasil) => {
					/*niatnya pengolahan datanya jadi satu*/	
				})
				.catch((err) => {
					res.json({status: false, code: 400, message: 'Gagal mencari lahan berdasarkan kategori kemitraan', error: err});
				})
		}
	}
}


module.exports = new CariLahan;