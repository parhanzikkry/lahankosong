module.exports = function(sequelize, DataType) {
	return sequelize.define('pengelolaan', {
		nama_pengelolaan: DataType.STRING,
		deskripsi_pengelolaan: DataType.TEXT
	});
}