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
	Token = require(__dirname + '/Token.controller');

class CariLahan {
	constructor() {
		this.pengelolaan;
		this.kemitraan;
		this.lahan;
		this.pengelolaanlahan;
		this.kemitraanlahan;
		this.foto;
		this.attributes = ['id', 'alamat_lengkap_lahan', 'luasan_lahan', 'id', 'latitude_lahan', 'longitude_lahan', 'pengelolaan_sebelumnya_lahan', 'status_lahan', 'jarak_air_lahan', 'jarak_jalan_lahan', 'keterangan_jalan_lahan', 'jarak_pasar_lahan', 'potensi_lahan'];
	}

	GetDataLain(data, res) {
		data = JSON.parse(JSON.stringify(data));
		let tempId = []
		for(let i=0; i<data.length; i++) {
			tempId.push(data[i].id);
		}
		if(tempId.length == 0) {
			tempId = [-1];
		}
		let tempidlahan;
		let temp;
		Foto
			.findAll({
				where: {
					fk_id_lahan: {
						$or: tempId
					}
				}
			})	
			.then((foto) => {
				foto = JSON.parse(JSON.stringify(foto));
				if(foto.length == 0) {
					this.foto = [];
				} else {
					tempidlahan = foto[0].fk_id_lahan;
					temp =[];
					this.foto = [];
					for(let i=0; i<foto.length; i++) {
						if(tempidlahan != foto[i].fk_id_lahan) {
							this.foto.push({id: tempidlahan, data: temp});
							temp = [];
							tempidlahan = foto[i].fk_id_lahan;
						}
						temp.push(foto[i].path_foto);
					}
					this.foto.push({id: tempidlahan, data: temp});
				}
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan data foto', error: err});
			})
		Kemitraanlahan
			.findAll({
				where: {
					fk_id_lahan: {
						$or: tempId
					}
				},
				include: [{
					model: Kemitraan,
					attributes: ['nama_kemitraan']
				}],
				order: [
					['fk_id_lahan', 'DESC']
				],
				attributes: ['detail_kemitraanlahan', 'fk_id_kemitraan', 'fk_id_lahan']
			})
			.then((kemitraanlahan) => {
				kemitraanlahan = JSON.parse(JSON.stringify(kemitraanlahan));
				if(kemitraanlahan.length == 0) {
					this.kemitraanlahan = [];
				} else {
					tempidlahan =kemitraanlahan[0].fk_id_lahan;
					this.kemitraanlahan = [];
					temp =[];
					for(let i=0; i<kemitraanlahan.length; i++) {
						if(tempidlahan != kemitraanlahan[i].fk_id_lahan) {
							this.kemitraanlahan.push({id: tempidlahan, data: temp});
							temp = [];
							tempidlahan = kemitraanlahan[i].fk_id_lahan;
						}
						temp.push({kemitraan: kemitraanlahan[i].kemitraan.nama_kemitraan, detail: kemitraanlahan[i].detail_kemitraanlahan});
					}
					this.kemitraanlahan.push({id: tempidlahan, data: temp});
				}
				Pengelolaanlahan
					.findAll({
						where: {
							fk_id_lahan: {
								$or: tempId
							}
						},
						include: [{
							model: Pengelolaan
						}],
						order: [
							['fk_id_lahan', 'DESC']
						]
					})
					.then((pengelolaanlahan) => {
						pengelolaanlahan = JSON.parse(JSON.stringify(pengelolaanlahan));
						if(pengelolaanlahan.length == 0) {
							this.pengelolaanlahan = [];
						} else {
							tempidlahan = pengelolaanlahan[0].fk_id_lahan;
							this.pengelolaanlahan = [];
							temp = [];
							for(let i=0; i<pengelolaanlahan.length; i++) {
								if(tempidlahan != pengelolaanlahan[i].fk_id_lahan) {
									this.pengelolaanlahan.push({id: tempidlahan, data: temp});
									tempidlahan = pengelolaanlahan[i].fk_id_lahan;
									temp = [];
								}
								temp.push({pengelolaan: pengelolaanlahan[i].pengelolaan.nama_pengelolaan, detail: pengelolaanlahan[i].detail_pengelolaanlahan});
							}
							this.pengelolaanlahan.push({id: tempidlahan, data: temp});
						}
						this.lahan = [];
						let countmitra = 0;
						let countkelola = 0;
						let countfoto = 0;
						for(let i=0; i<data.length; i++) {
							let temp = {id: data[i].id, pemilik: data[i].pemilik.nama_pemilik, alamat_pemilik: data[i].pemilik.alamat_pemilik, foto_pemilik: data[i].pemilik.foto_pemilik, email_pemilik:data[i].pemilik.email_pemilik, no_hp_pemilik: data[i].pemilik.no_hp_pemilik, alamat_lahan: data[i].alamat_lengkap_lahan, latitude: data[i].latitude_lahan, longitude: data[i].longitude_lahan, luasan_lahan: data[i].luasan_lahan, desa: data[i].village.name, sebelumnya: data[i].pengelolaan_sebelumnya_lahan, jarak_air_lahan:data[i].jarak_air_lahan, jarak_jalan_lahan: data[i].jarak_jalan_lahan, keterangan_jalan_lahan: data[i].keterangan_jalan_lahan, jarak_pasar_lahan: data[i].jarak_pasar_lahan, potensi_lahan: data[i].potensi_lahan, status: data[i].status_lahan};
							if(this.kemitraanlahan.length == 0) {
								temp.kemitraan = [];
							} else {
								if(this.kemitraanlahan[countmitra].id == data[i].id) {
									temp.kemitraan = this.kemitraanlahan[countmitra].data;
									countmitra++;
								} else {
									temp.kemitraan = [];
								}
							}
							if(this.pengelolaanlahan.length == 0) {
								temp.pengelolaan = [];
							} else {
								if(this.pengelolaanlahan[countkelola].id == data[i].id) {
									temp.pengelolaan = this.pengelolaanlahan[countkelola].data;
									countkelola++;
								} else {
									temp.pengelolaan = [];
								}
							}
							if(this.foto.length == 0) {
								temp.foto=[];
							} else {
								if(this.foto[countfoto].id == data[i].id) {
									temp.foto = {path: this.foto[countfoto].data, caption: this.foto[countfoto].caption_foto};
									countfoto++;
								} else {
									temp.foto = [];
								}
							}
							this.lahan.push(temp);
						}
						res.json({status: true, code: 200, message: 'Berhasil mendapatkan data lahan', lahan: this.lahan});						
					})
			})
	}

	GetFiveLahan(data, res) {
		Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
		Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
		Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
		Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
		Lahan
			.findAll({
				where: {
					status_lahan: 'verif',
				},
				limit: 5,
				order: [
					['id', 'DESC']
				],
				attributes: this.attributes,
				include:[{
					model: Pemilik,
					attributes: ['nama_pemilik', 'alamat_pemilik', 'foto_pemilik', 'email_pemilik', 'no_hp_pemilik']
				},{
					model: Desakel,
					attributes: ['name']
				}]
			})
			.then((fivelahan) => {
				this.GetDataLain(fivelahan, res);
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan 5 lahan terbaru', error: err});
			});
	}

	DaftarLahanPerkecamatan(data, res) {
		Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
		Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
		Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
		Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
		Lahan
			.findAll({
				where: {
					status_lahan: 'verif',
				},
				order: [
					['id', 'DESC']
				],
				attributes: this.attributes,
				include:[{
					model: Pemilik,
					attributes: ['nama_pemilik', 'alamat_pemilik', 'foto_pemilik', 'email_pemilik', 'no_hp_pemilik']
				},{
					model: Desakel,
					attributes: ['name'],
					where: {
						district_id: data.params.fk_id
					}
				}]
			})
			.then((lahan) => {
				this.GetDataLain(lahan, res);
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan lahan di kecamatan yang dicari', error: err});
			});
	}

	DaftarLahanPerdesakelurahan(data, res) {
		Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
		Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
		Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
		Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
		Lahan
			.findAll({
				where: {
					status_lahan: 'verif',
				},
				order: [
					['id', 'DESC']
				],
				attributes: this.attributes,
				include:[{
					model: Pemilik,
					attributes: ['nama_pemilik', 'alamat_pemilik', 'foto_pemilik', 'email_pemilik', 'no_hp_pemilik']
				},{
					model: Desakel,
					attributes: ['name'],
					where: {
						id: data.params.fk_id
					}
				}]
			})
			.then((lahan) => {
				console.log(lahan);
				this.GetDataLain(lahan, res);
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan lahan di kecamatan yang dicari', error: err});
			});
	}

	GetDetailDataLahan(data, res) {
		Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
		Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
		Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
		Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
		Lahan
			.findAll({
				where: {
					// status_lahan: 'verif',
					id: data.params.id
				},
				order: [
					['id', 'DESC']
				],
				attributes: this.attributes,
				include:[{
					model: Pemilik,
					attributes: ['nama_pemilik', 'alamat_pemilik', 'foto_pemilik', 'email_pemilik', 'no_hp_pemilik']
				},{
					model: Desakel,
					attributes: ['name']
				}]
			})
			.then((lahan) => {
				this.GetDataLain(lahan, res);
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan lahan di kecamatan yang dicari', error: err});
			});
	}

	GetMyLahanData(data, res) {
		Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
		Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
		Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
		Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
		Lahan
			.findAll({
				where: {
					fk_id_publisher: Token.DecodeToken(JSON.parse(data.headers.token).token).token.id
				},
				attributes: this.attributes,
				order: [
					['id', 'DESC']
				],
				include:[{
					model: Pemilik,
					attributes: ['nama_pemilik', 'alamat_pemilik', 'foto_pemilik', 'email_pemilik', 'no_hp_pemilik']
				},{
					model: Desakel,
					attributes: ['name']
				}]
			})
			.then((lahan) => {
				this.GetDataLain(lahan, res);
			})
	}

	SearchByCatagory(data, res) {
		/*mencari bedarsarkan kategori*/
		/*1 == Pengelolaan*/
		if(data.params.kategori == 1) {
			let idlahan = [];
			Pengelolaanlahan
				.findAll({
					where: {
						fk_id_pengelolaan: data.params.pilihan
					},
					attributes: ['fk_id_lahan']
				})
				.then((pengelolaanlahan) => {
					pengelolaanlahan = JSON.parse(JSON.stringify(pengelolaanlahan));
					if (pengelolaanlahan.length == 0) {
						idlahan = [-1];
					}
					for(let i=0; i<pengelolaanlahan.length; i++) {
						idlahan.push(pengelolaanlahan[i].fk_id_lahan);
					}
					Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
					Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
					Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
					Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
					Lahan
						.findAll({
							where: {
								status_lahan: 'verif',
								id: {
									$or: idlahan
								}
							},
							order: [
								['id', 'DESC']
							],
							attributes: this.attributes,
							include:[{
								model: Pemilik,
								attributes: ['nama_pemilik', 'alamat_pemilik', 'foto_pemilik', 'email_pemilik' , 'no_hp_pemilik']
							},{
								model: Desakel,
								attributes: ['name']
							}]
						})
						.then((lahan) => {
							this.GetDataLain(lahan, res);
						})
						.catch((err) => {
							res.json({status: false, code: 400, message: 'Gagal mendapatkan lahan di kecamatan yang dicari', error: err});
						});
				})
				.catch((err) => {
					res.json({status: false, code: 400, message: 'Gagal mendapatkan data pengelolaanlahan', error: err});
				})
		/*2 == kemitraan*/
		} else if(data.params.kategori == 2) {
			let idlahan = [];
			Kemitraanlahan
				.findAll({
					where: {
						fk_id_kemitraan: data.params.pilihan
					},
					attributes: ['fk_id_lahan']
				})
				.then((kemitraanlahan) => {
					kemitraanlahan = JSON.parse(JSON.stringify(kemitraanlahan));
					if(kemitraanlahan.length == 0) {
						idlahan = [-1];
					}
					for(let i=0; i<kemitraanlahan.length; i++) {
						idlahan.push(kemitraanlahan[i].fk_id_lahan);
					}
					Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
					Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
					Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
					Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
					Lahan
						.findAll({
							where: {
								status_lahan: 'verif',
								id: {
									$or: idlahan
								}
							},
							order: [
								['id', 'DESC']
							],
							attributes: this.attributes,
							include:[{
								model: Pemilik,
								attributes: ['nama_pemilik', 'alamat_pemilik', 'foto_pemilik', 'email_pemilik', 'no_hp_pemilik']
							},{
								model: Desakel,
								attributes: ['name']
							}]
						})
						.then((lahan) => {
							this.GetDataLain(lahan, res);
						})
						.catch((err) => {
							res.json({status: false, code: 400, message: 'Gagal mendapatkan lahan di kecamatan yang dicari', error: err});
						});
				})
				.catch((err) => {
					res.json({status: false, code: 400, message: 'Gagal mendapatkan data kemitraanlahan', error: err});
				})
		/*3 == Luasan*/
		} else if(data.params.kategori == 3) {
			let code;
			/*1 == kurang dari 1 Ha*/
			if(data.params.pilihan == 1) {
				code = {$lte: 1};
			/*2 == 1Ha sampai dengan 5 Ha*/
			} else if(data.params.pilihan == 2) {
				code = {$and: [{$gt: 1}, {$lte: 5}]}
			/*3 == lebih dari 5 Ha*/
			} else if(data.params.pilihan == 3) {
				code = {$gt: 5}
			/*default*/
			} else {
				res.json({status: false, code: 400, message: 'Hanyak ada 3 pilihan', pilihan: data.params.pilihan});
			}
			Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
			Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
			Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
			Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
			Lahan
				.findAll({
					where: {
						status_lahan: 'verif',
						luasan_lahan: code
					},
					order: [
						['id', 'DESC']
					],
					attributes: this.attributes,
					include:[{
						model: Pemilik,
						attributes: ['nama_pemilik', 'alamat_pemilik', 'foto_pemilik', 'email_pemilik', 'no_hp_pemilik']
					},{
						model: Desakel,
						attributes: ['name']
					}]
				})
				.then((lahan) => {
					this.GetDataLain(lahan, res);
				})
				.catch((err) => {
					res.json({status: false, code: 400, message: 'Gagal mendapatkan lahan di kecamatan yang dicari', error: err});
				});
		} else {
			res.json({status: false, code: 400, message: 'Hanya ada 3 jenis kategori yang bisa dicari', kategori: data.params.kategori})
		}
	}

	GetLahanSortedByIdAndStatus(data, res) {
		Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
		Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
		Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
		Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
		Lahan
			.findAll({
				order: [
					['status_lahan'],
					['id', 'DESC']
				],
				attributes: this.attributes,
				include:[{
					model: Pemilik,
					attributes: ['nama_pemilik', 'alamat_pemilik', 'foto_pemilik', 'email_pemilik', 'no_hp_pemilik']
				},{
					model: Desakel,
					attributes: ['name']
				}]
			})
			.then((fivelahan) => {
				this.GetDataLain(fivelahan, res);
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan Semua lahan', error: err});
			});
	}

	GetVerifiedLahan(data, res) {
		Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
		Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
		Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
		Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
		Lahan
			.findAll({
				where: {
					status_lahan: 'verif'
				},
				attributes: this.attributes,
				order: [
					['id', 'DESC']
				],
				include:[{
					model: Pemilik,
					attributes: ['nama_pemilik', 'alamat_pemilik', 'foto_pemilik', 'email_pemilik', 'no_hp_pemilik']
				},{
					model: Desakel,
					attributes: ['name']
				}]
			})
			.then((lahan) => {
				this.GetDataLain(lahan, res);
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan Semua lahan', error: err});
			});
	}

	GetUnverifiedLahan(data, res) {
		Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
		Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
		Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
		Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
		Lahan
			.findAll({
				where: {
					status_lahan: 'unverif'
				},
				attributes: this.attributes,
				order: [
					['id', 'DESC']
				],
				include:[{
					model: Pemilik,
					attributes: ['nama_pemilik', 'alamat_pemilik', 'foto_pemilik', 'email_pemilik', 'no_hp_pemilik']
				},{
					model: Desakel,
					attributes: ['name']
				}]
			})
			.then((lahan) => {
				this.GetDataLain(lahan, res);
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Gagal mendapatkan Semua lahan', error: err});
			});
	}
}

module.exports = new CariLahan;