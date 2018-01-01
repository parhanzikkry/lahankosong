var sequelize = require(__dirname + '/../dbconnection'),
	Provinsi = sequelize.import(__dirname + '/provinsi.model')

module.exports = function(sequelize, DataType) {
	return sequelize.define('regency', {
		id: {
			type: DataType.CHAR(4),
			primaryKey: true
		},
		name: DataType.STRING,
		province_id: {
			type: DataType.CHAR(2),
			// references: {
			// 	model: Provinsi,
			// 	key: 'id'
			// }
		}
	});
}