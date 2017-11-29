var sequelize = require(__dirname + '/../dbconnection'),
	Desakel = sequelize.import(__dirname + '/desakel.model'),
	Pemilik = sequelize.import(__dirname + '/pemilik.model'),
	Publisher = sequelize.import(__dirname + '/publisher.model');

module.exports = function(sequelize, DataType) {
	return sequelize.define('lahan', {
		fk_id_desakel: {
			type: DataType.CHAR(10)/*,
			references: {
				model: Desakel,
				key: 'id'
			}*/
		},
		alamat_lengkap_lahan: DataType.TEXT,
		longitude_lahan: DataType.STRING,
		latitude_lahan: DataType.STRING,
		luasan_lahan: DataType.DECIMAL,
		pengelolaan_sebelumnya_lahan: DataType.TEXT,
		fk_id_pemilik: {
			type: DataType.INTEGER,
			references: {
				model: Pemilik,
				key: 'id'
			}
		},
		deskripsi_lahan: DataType.TEXT,
		status_lahan: DataType.STRING,
		fk_id_publisher: {
			type: DataType.INTEGER,
			references: {
				model: Publisher,
				key: 'id'
			}
		}
	});
}