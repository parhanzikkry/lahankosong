var sequelize = require(__dirname + '/../dbconnection'),
	Kemitraanlahan = sequelize.import(__dirname + '/../models/kemitraanlahan.model');

Kemitraanlahan
	.bulkCreate([{
		fk_id_lahan: 1,
		fk_id_kemitraan: 3,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 2,
		fk_id_kemitraan: 3,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'	
	},{
		fk_id_lahan: 3,
		fk_id_kemitraan: 3,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 3,
		fk_id_kemitraan: 4,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 4,
		fk_id_kemitraan: 3,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 4,
		fk_id_kemitraan: 4,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 5,
		fk_id_kemitraan: 3,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 5,
		fk_id_kemitraan: 4,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 6,
		fk_id_kemitraan: 3,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 6,
		fk_id_kemitraan: 4,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 7,
		fk_id_kemitraan: 3,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 8,
		fk_id_kemitraan: 1,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 9,
		fk_id_kemitraan: 1,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	},{
		fk_id_lahan: 9,
		fk_id_kemitraan: 4,
		detail_kemitraanlahan: 'Kerja sama yang menguntungkan'
	}])