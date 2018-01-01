module.exports = function(sequelize, DataType) {
	return sequelize.define('province', {
		id: {
			type: DataType.CHAR(2),
			primaryKey: true
		},
		name: DataType.STRING
	});
}