module.exports = function(sequelize, DataType) {
	return sequelize.define('pemilik', {
		nama_pemilik: DataType.STRING,
		alamat_pemilik: DataType.STRING,
		no_hp_pemilik: DataType.STRING,
		email_pemilik: DataType.STRING,
		foto_pemilik: DataType.STRING
	});
}