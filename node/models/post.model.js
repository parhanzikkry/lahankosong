module.exports = function(sequelize, DataType) {
	return sequelize.define('post', {
        judul_post: DataType.STRING,
        kategori_post: DataType.STRING,
        isi_post: DataType.TEXT
	});
}