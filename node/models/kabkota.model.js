var sequelize = require(__dirname + '/../dbconnection'),
	Provinsi = sequelize.import(__dirname + '/provinsi.model')

module.exports = function(sequelize, DataType) {
	return sequelize.define('regency', {
		name: DataType.STRING,
		province_id: {
			type: DataType.CHAR(2),
			references: {
				model: Provinsi,
				key: 'id'
			}
		}
	});
}