var sequelize = require(__dirname + '/../dbconnection'),
	Lahan = sequelize.import(__dirname + '/lahan.model'),
	Pengelolaan = sequelize.import(__dirname + '/pengelolaan.model');

module.exports = function(sequelize, DataType) {
	return sequelize.define('pengelolaanlahan', {
		fk_id_lahan: {
			type: DataType.INTEGER,
			references: {
				model: Lahan,
				key: 'id'
			}
		},
		fk_id_pengelolaan: {
			type: DataType.INTEGER,
			references: {
				model: Pengelolaan,
				key: 'id'
			}
		},
		detail_pengelolaanlahan: DataType.TEXT
	});
}