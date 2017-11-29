var sequelize = require(__dirname + '/../dbconnection'),
	Lahan = sequelize.import(__dirname + '/lahan.model');

module.exports = function(sequelize, DataType) {
	return sequelize.define('aksesbilitas', {
		keterangan_aksesbilitas: DataType.TEXT,
		longitude_aksesbilitas: DataType.STRING,
		latitude_aksesbilitas: DataType.STRING,
		fk_id_lahan: {
			type: DataType.INTEGER,
			references: {
				model: Lahan,
				key: 'id'
			}
		}
	});
}