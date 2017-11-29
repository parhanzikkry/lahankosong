var sequelize = require(__dirname + '/../dbconnection'),
	Lahan = sequelize.import(__dirname + '/lahan.model'),
	Kemitraan = sequelize.import(__dirname + '/kemitraan.model');

module.exports = function(sequelize, DataType) {
	return sequelize.define('kemitraanlahan', {
		fk_id_lahan: {
			type: DataType.INTEGER,
			references: {
				model: Lahan,
				key: 'id'
			}
		},
		fk_id_kemitraan: {
			type: DataType.INTEGER,
			references: {
				model: Kemitraan,
				key: 'id'
			}
		},
		detail_kemitraanlahan: DataType.TEXT
	});
}