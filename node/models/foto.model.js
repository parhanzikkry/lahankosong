var sequelize = require(__dirname + '/../dbconnection'),
	Lahan = sequelize.import(__dirname + '/lahan.model');

module.exports = function(sequelize, DataType) {
	return sequelize.define('foto', {
		path_foto: DataType.STRING,
		caption_foto: DataType.STRING,
		fk_id_lahan: {
			type: DataType.INTEGER,
			references: {
				model: Lahan,
				key: 'id'
			}
		}
	});
}