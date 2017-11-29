var sequelize = require(__dirname + '/../dbconnection'),
	Kecamatan = sequelize.import(__dirname + '/kecamatan.model')

module.exports = function(sequelize, DataType) {
	return sequelize.define('village', {
		name: DataType.STRING,
		district_id: {
			type: DataType.CHAR(7),
			references: {
				model: Kecamatan,
				key: 'id'
			}
		}
	});
}