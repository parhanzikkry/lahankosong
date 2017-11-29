module.exports = function(sequelize, DataType) {
	return sequelize.define('kemitraan', {
		nama_kemitraan: DataType.STRING,
		deskripsi_kemitraan: DataType.TEXT
	});
}