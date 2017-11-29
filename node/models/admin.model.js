module.exports = function(sequelize, DataType) {
	return sequelize.define('admin', {
		nama_admin: DataType.STRING,
		username_admin: DataType.STRING,
		password_admin: DataType.STRING,
		email_admin: DataType.STRING
	});
}