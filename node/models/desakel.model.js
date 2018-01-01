var sequelize = require(__dirname + '/../dbconnection'),
	Kecamatan = sequelize.import(__dirname + '/kecamatan.model');

module.exports = function(sequelize, DataType) {
	return sequelize.define('village', {
		id: {
			type: DataType.CHAR(10),
			primaryKey: true
		},
		name: DataType.STRING,
		district_id: {
			type: DataType.CHAR(7),
			// references: {
			// 	model: Kecamatan,
			// 	key: 'id'
			// }
		}
	});
}