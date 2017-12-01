var crypto = require('crypto'),
	sequelize = require('../dbconnection'),
	Token = require(__dirname + '/Token.controller'),
	Publisher = sequelize.import(__dirname + '/../models/publisher.model');

class Auth {
	constructor() {

	}

	Login(data, res) {
		if(!data.body.username || !data.body.password) {
			res.json({status: false, code: 400, message: 'Harap isi username dan passwordnya terlebih dahulu'});
		} else {
			Publisher
				.findOne({
					where: {
						username_publisher: data.body.username,
						password_publisher: data.body.password
					}
				})
				.then((publisher) => {
					res.json({status: true, code: 200, message: 'Authentifikasi berhasil', token: Token.});
				})
				.catch((err) => {
					res.json({status: false, code: 400, message: 'Authentifikasi gagal, username dan password tidak ditemukan', error: err});
				})
		}
	}

	Register(data, res) {
		Publisher
			.findOne({
				where: {
					username_publisher: data.body.username,
					password_publisher: data.body.password
				}
			})
			.then((publisher) => {
				Publisher
					.create({
						username_publisher: data.body.username_publisher,
						password_publisher: data.body.password,
						nama_publisher: data.body.nama_publisher,
						email_publisher: data.body.email_publisher,
						no_hp_publisher: data.body.no_hp_publisher,
						alamat_publisher: data.body.alamat_publisher,
						TTL_publisher: data.body.TTL_publisher,
						alamat_publisher: data.body.alamat_publisher
					})
			})
	}
}