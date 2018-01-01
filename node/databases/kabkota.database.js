var sequelize = require(__dirname + '/../dbconnection'),
    Kabkota = sequelize.import(__dirname + '/../models/kabkota.model');

Kabkota
	.bulkCreate([{
        id: '3201',
        name: 'KABUPATEN BOGOR',
        province_id: '32'
	}])