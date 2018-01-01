var sequelize = require(__dirname + '/../dbconnection'),
	Kabkota = sequelize.import(__dirname + '/kabkota.model')

module.exports = function(sequelize, DataType) {
	return sequelize.define('district', {
		id: {
			type: DataType.CHAR(7),
			primaryKey: true
		},
		name: DataType.STRING,
		regency_id: {
			type: DataType.CHAR(4),
			// references: {
			// 	model: Kabkota,
			// 	key: 'id'
			// }
		}
	});
}