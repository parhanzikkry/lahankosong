var sequelize = require(__dirname + '/../dbconnection'),
    Post = sequelize.import(__dirname + '/post.model');

module.exports = function(sequelize, DataType) {
	return sequelize.define('postfoto', {
		path_postfoto: DataType.STRING,
		filename_postfoto: DataType.STRING,
        fk_id_post: {
            type: DataType.INTEGER,
            references: {
                model: Post,
                key: 'id'
            }
        }
	});
}