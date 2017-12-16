var crypto = require('crypto'),
	sequelize = require('../dbconnection'),
	mailer = require('nodemailer'),
	Token = require(__dirname + '/Token.controller'),
	Publisher = sequelize.import(__dirname + '/../models/publisher.model')
	Email = require(__dirname + '/Mailer.controller'),
	Admin = sequelize.import(__dirname + '/../models/admin.model');

class Auth {
	constructor() {
		this.password;
	}

	SetPassword(password) {
		this.password = crypto.createHash('sha1').update(password).digest('hex');
	}

	Login(data, res) {
		this.SetPassword(data.body.password);
		if(!data.body.username || !data.body.password) {
			res.json({status: false, code: 400, message: 'Harap isi username dan passwordnya terlebih dahulu'});
		} else {
			Admin
				.findOne({
					username_admin: data.body.username,
					password_admin: this.password
				})
				.then((admin) => {
					admin = JSON.parse(JSON.stringify(admin));
					if(admin == null || admin.length == 0) {
						Publisher
						.findOne({
							where: {
								username_publisher: data.body.username,
								password_publisher: this.password
							}
						})
						.then((publisher) => {
							publisher = JSON.parse(JSON.stringify(publisher));
							if(publisher.length == 0) {
								res.json({status: false, code: 400, message: 'Username dan password tidak ditemukan', info: data.body});
							} else {
								publisher.role = 'publisher';
								res.json({status: true, code: 200, message: 'Authentifikasi berhasil', token: Token.SetupToken(publisher)});
							}
						})
						.catch((err) => {
							admin.role = 'admin';
							res.json({status: false, code: 400, message: 'Authentifikasi gagal', error: err});
						})
					} else {
						res.json({status: true, code: 200, message: 'Welcome back admin', token: Token.SetupToken(publisher)});
					}
				})
				.catch((err) => {
					res.json({status: false, code: 400, message: 'Authentifikasi gagal', error: err});
				})
		}
	}

	Register(data, res) {
		this.SetPassword(data.body.password_publisher);
		Publisher
			.findOne({
				where: {
					username_publisher: data.body.username_publisher
				}
			})
			.then((publisher) => {
				publisher = JSON.parse(JSON.stringify(publisher));
				if(publisher != null) {
					res.json({status: false, code: 400, message: 'Username sudah tersedia', data: data.body});
				} else {
					Publisher
						.create({
							username_publisher: data.body.username_publisher,
							password_publisher: this.password,
							nama_publisher: data.body.nama_publisher,
							email_publisher: data.body.email_publisher,
							no_hp_publisher: data.body.no_hp_publisher,
							alamat_publisher: data.body.alamat_publisher,
							TTL_publisher: data.body.TTL_publisher,
							alamat_publisher: data.body.alamat_publisher
						})
						.then((info) => {
							info = JSON.parse(JSON.stringify(info));
							Email.SetTamplateRegister(Token.SetupToken(info));
							Email.SendEmail(info.email_publisher, res);
							res.json({status: true, code: 200, message: 'Berhasil mendaftarkan diri', info: info});
						})
						.catch((err) => {
							res.json({status: false, code: 400, message: 'error pada saat mendaftarkan akun', error: err});
						})
				}
			})
			.catch((err) => {
				res.json({status: false, code: 400, message: 'Error pada saat pengecekan username', error: err});
			})
	}
}

module.exports = new Auth;