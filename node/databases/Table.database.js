var sequelize = require(__dirname + '/../dbconnection'),
	Desakel = sequelize.import(__dirname + '/../models/desakel.model'),
	Pemilik = sequelize.import(__dirname + '/../models/pemilik.model'),
	Provinsi = sequelize.import(__dirname + '/../models/provinsi.model'),
	KabKota = sequelize.import(__dirname + '/../models/kabkota.model'),
	Kecamatan = sequelize.import(__dirname + '/../models/kecamatan.model'),
	Admin = sequelize.import(__dirname + '/../models/admin.model'),
	Aksesbilitas = sequelize.import(__dirname + '/../models/aksesbilitas.model'),
	Lahan = sequelize.import(__dirname + '/../models/lahan.model'),
	Kemitraan = sequelize.import(__dirname + '/../models/kemitraan.model'),
	Kemitraanlahan = sequelize.import(__dirname + '/../models/kemitraanlahan.model'),
	Pengelolaan = sequelize.import(__dirname + '/../models/pengelolaan.model'),
	Pengelolaanlahan = sequelize.import(__dirname + '/../models/pengelolaanlahan.model'),
	Publisher = sequelize.import(__dirname + '/../models/publisher.model'),
	Foto = sequelize.import(__dirname + '/../models/foto.model');

Admin
	.sync()
Kemitraan
	.sync()
Pemilik
	.sync()
Publisher
	.sync()
Pengelolaan
	.sync()
Provinsi
	.sync()
	.then(() => {
		KabKota
			.sync()
			.then(() => {
				Kecamatan
					.sync()
					.then(() => {
						Desakel
							.sync()
							.then(() => {
								Lahan
									.sync()
									.then(() => {
										Kemitraanlahan
											.sync()
										Pengelolaanlahan
											.sync()
										Aksesbilitas
											.sync()
										Foto
											.sync()
									})
							})
					})
			})
	})