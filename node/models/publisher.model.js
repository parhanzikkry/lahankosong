module.exports = function(sequelize, DataType) {
	return sequelize.define('publisher', {
		username_publisher: DataType.STRING,
		password_publisher: DataType.STRING,
		nama_publisher: DataType.STRING,
		email_publisher: DataType.STRING,
		no_hp_publisher: DataType.STRING,
		alamat_publisher: DataType.TEXT,
		TTL_publisher: DataType.STRING,
		alamat_publisher: DataType.TEXT
	});
}