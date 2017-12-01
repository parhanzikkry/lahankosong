var sequelize = require(__dirname + '/../dbconnection'),
	Pemilik = sequelize.import(__dirname + '/../models/pemilik.model');

Pemilik
	.bulkCreate([{
		nama_pemilik: 'Maman',
		alamat_pemilik: 'CIBEDUG',
		no_hp_pemilik: '',
		email_pemilik: '',
		foto_pemilik: ''
	},{
		nama_pemilik: 'Jajun',
		alamat_pemilik: 'TUGU JAYA',
		no_hp_pemilik: '',
		email_pemilik: '',
		foto_pemilik: ''
	},{
		nama_pemilik: 'Bimo',
		alamat_pemilik: 'TUGU JAYA',
		no_hp_pemilik: '',
		email_pemilik: '',
		foto_pemilik: ''
	},{
		nama_pemilik: 'Iwan',
		alamat_pemilik: 'TUGU JAYA',
		no_hp_pemilik: '',
		email_pemilik: '',
		foto_pemilik: ''
	},{
		nama_pemilik: 'Ade',
		alamat_pemilik: 'TUGU JAYA',
		no_hp_pemilik: '',
		email_pemilik: '',
		foto_pemilik: ''
	},{
		nama_pemilik: 'Jaksa',
		alamat_pemilik: 'TUGU JAYA',
		no_hp_pemilik: '',
		email_pemilik: '',
		foto_pemilik: ''
	},{
		nama_pemilik: 'Taufiq',
		alamat_pemilik: 'Ciawi',
		no_hp_pemilik: '',
		email_pemilik: '',
		foto_pemilik: ''
	},{
		nama_pemilik: 'Hamim',
		alamat_pemilik: 'Ciawi',
		no_hp_pemilik: '',
		email_pemilik: '',
		foto_pemilik: ''
	},{
		nama_pemilik: 'Anton Liwang',
		alamat_pemilik: 'Ciawi',
		no_hp_pemilik: '',
		email_pemilik: '',
		foto_pemilik: ''
	}])