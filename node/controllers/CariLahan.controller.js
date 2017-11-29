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

	GetDataLain(data, res) {
		data = JSON.parse(JSON.stringify(data));
		let tempId = []
		for(let i=0; i<data.length; i++) {
			tempId.push(data[i].id);
		}
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
				let tempidlahan =kemitraanlahan[0].fk_id_lahan;
				this.kemitraanlahan = [];
				let temp =[];
				for(let i=0; i<kemitraanlahan.length; i++) {
					if(tempidlahan != kemitraanlahan[i].fk_id_lahan) {
						this.kemitraanlahan.push({id: tempidlahan, data: temp});
						temp = [];
						tempidlahan = kemitraanlahan[i].fk_id_lahan;
					}
					temp.push({kemitraan: kemitraanlahan[i].kemitraan.nama_kemitraan, detail: kemitraanlahan[i].detail_kemitraanlahan});
				}
				this.kemitraanlahan.push({id: tempidlahan, data: temp});
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
						tempidlahan =pengelolaanlahan[0].fk_id_lahan;
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
						this.lahan = [];
						for(let i=0; i<data.length; i++) {
							let temp = {pemilik: data[i].pemilik.nama_pemilik, alamat_lahan: data[i].alamat_lengkap_lahan, luasan_lahan: data[i].luasan_lahan, desa: data[i].village.name, kemitraan: this.kemitraanlahan[i].data, pengelolaan: this.pengelolaanlahan[i].data};
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
					['createdAt', 'DESC']
				],
				attributes: ['alamat_lengkap_lahan', 'luasan_lahan', 'id'],
				include:[{
					model: Pemilik,
					attributes: ['nama_pemilik']
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
					['createdAt', 'DESC']
				],
				attributes: ['alamat_lengkap_lahan', 'luasan_lahan', 'id'],
				include:[{
					model: Pemilik,
					attributes: ['nama_pemilik']
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

	GetDetailDataLahan(data, res) {
		Lahan.belongsTo(Pemilik, {foreignKey: 'fk_id_pemilik'});
		Lahan.belongsTo(Desakel, {foreignKey: 'fk_id_desakel'});
		Kemitraanlahan.belongsTo(Kemitraan, {foreignKey: 'fk_id_kemitraan'});
		Pengelolaanlahan.belongsTo(Pengelolaan, {foreignKey: 'fk_id_pengelolaan'});
		Lahan
			.findAll({
				where: {
					status_lahan: 'verif',
					id: data.params.id
				},
				order: [
					['createdAt', 'DESC']
				],
				attributes: ['alamat_lengkap_lahan', 'luasan_lahan', 'id'],
				include:[{
					model: Pemilik,
					attributes: ['nama_pemilik']
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
								['createdAt', 'DESC']
							],
							attributes: ['alamat_lengkap_lahan', 'luasan_lahan', 'id'],
							include:[{
								model: Pemilik,
								attributes: ['nama_pemilik']
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
								['createdAt', 'DESC']
							],
							attributes: ['alamat_lengkap_lahan', 'luasan_lahan', 'id'],
							include:[{
								model: Pemilik,
								attributes: ['nama_pemilik']
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
		}
	}
}


module.exports = new CariLahan;