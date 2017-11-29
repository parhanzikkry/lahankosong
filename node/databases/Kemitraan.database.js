var sequelize = require(__dirname + '/../dbconnection'),
	Kemitraan = sequelize.import(__dirname + '/../models/kemitraan.model');

Kemitraan
	.bulkCreate([{
		nama_kemitraan: 'Sewa',
		deskripsi_kemitraan: 'Pemilik lahan tidak diterlibatkan dalam pengelolaan lahan yang dilakukan oleh investor'
	},{
		nama_kemitraan: 'Bagi hasil',
		deskripsi_kemitraan: 'Pemilik dan investor membuat keputusan mengenai kegiatan dan pembagian keuntungan dan juga modal yang diberikan'
	},{
		nama_kemitraan: 'Kerja sama',
		deskripsi_kemitraan: 'Pemilik dan investor membuat kesepakatan kerja yang dilakaukan dalam mengembangkan lahan yang akan diolah'
	},{
		nama_kemitraan: 'Jual',
		deskripsi_kemitraan: 'Pemilik lahan hanya ini menjual lahan dengan harga yang sudah ditentukan oleh pemilik'
	}])