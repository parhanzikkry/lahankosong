module.exports = function(sequelize, DataType) {
	return sequelize.define('province', {
		name: DataType.STRING
	});
}