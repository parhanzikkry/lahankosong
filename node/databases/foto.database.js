var sequelize = require(__dirname + '/../dbconnection'),
	Foto = sequelize.import(__dirname + '/../models/foto.model');

Foto
	.bulkCreate([{
		path_foto: 'assets/img/lahan/tanahkosong.jpg',
		fk_id_lahan: 1,
	},{
		path_foto: 'assets/img/lahan/tanahkosong1.jpg',
		fk_id_lahan: 1,
	},{
		path_foto: 'assets/img/lahan/tanahkosong2.jpg',
		fk_id_lahan: 1,
	},{
		path_foto: 'assets/img/lahan/tanahkosong3.jpg',
		fk_id_lahan: 1,
	},{
		path_foto: 'assets/img/lahan/tanahkosong4.jpg',
		fk_id_lahan: 1,
	},{
		path_foto: 'assets/img/lahan/tanahkosong.jpg',
		fk_id_lahan: 2,
	},{
		path_foto: 'assets/img/lahan/tanahkosong.jpg',
		fk_id_lahan: 3,
	},{
		path_foto: 'assets/img/lahan/tanahkosong.jpg',
		fk_id_lahan: 4,
	},{
		path_foto: 'assets/img/lahan/tanahkosong.jpg',
		fk_id_lahan: 5,
	},{
		path_foto: 'assets/img/lahan/tanahkosong.jpg',
		fk_id_lahan: 6,
	},{
		path_foto: 'assets/img/lahan/tanahkosong.jpg',
		fk_id_lahan: 7,
	},{
		path_foto: 'assets/img/lahan/tanahkosong.jpg',
		fk_id_lahan: 8,
	},{
		path_foto: 'assets/img/lahan/tanahkosong.jpg',
		fk_id_lahan: 9,
	}])