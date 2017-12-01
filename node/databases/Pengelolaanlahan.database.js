var sequelize = require(__dirname + '/../dbconnection'),
	Pengelolaanlahan = sequelize.import(__dirname + '/../models/pengelolaanlahan.model');

Pengelolaanlahan
	.bulkCreate([{
		fk_id_lahan: 1,
		fk_id_pengelolaan: 6,
		detail_pengelolaanlahan: 'Gak tau'
	},{
		fk_id_lahan: 2,
		fk_id_pengelolaan: 1,
		detail_pengelolaanlahan: 'Gak tau'
	},{
		fk_id_lahan: 3,
		fk_id_pengelolaan: 1,
		detail_pengelolaanlahan: 'Gak tau'
	},{
		fk_id_lahan: 4,
		fk_id_pengelolaan: 1,
		detail_pengelolaanlahan: 'Gak tau'
	},{
		fk_id_lahan: 5,
		fk_id_pengelolaan: 1,
		detail_pengelolaanlahan: 'Gak tau'
	},{
		fk_id_lahan: 6,
		fk_id_pengelolaan: 1,
		detail_pengelolaanlahan: 'Gak tau'
	},{
		fk_id_lahan: 7,
		fk_id_pengelolaan: 1,
		detail_pengelolaanlahan: 'Gak tau'
	},{
		fk_id_lahan: 8,
		fk_id_pengelolaan: 6,
		detail_pengelolaanlahan: 'Gak tau'
	},{
		fk_id_lahan: 9,
		fk_id_pengelolaan: 3,
		detail_pengelolaanlahan: 'Gak tau'
	}])