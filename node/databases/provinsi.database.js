var sequelize = require(__dirname + '/../dbconnection'),
    Provinsi = sequelize.import(__dirname + '/../models/provinsi.model');

Provinsi
	.bulkCreate([{
        id: '32',
        name: 'JAWA BARAT'
	}])