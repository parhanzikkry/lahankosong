var sequelize = require(__dirname + '/../dbconnection'),
	Lahan = sequelize.import(__dirname + '/../models/lahan.model');

Lahan
	.bulkCreate([{
		fk_id_desakel: '3201100003',
		alamat_lengkap_lahan: 'CIBEDUG',
		longitude_lahan: '106.852538',
		latitude_lahan: '-6.649694',
		luasan_lahan: 0.2,
		pengelolaan_sebelumnya_lahan: 'Penanaman cengkeh',
		fk_id_pemilik: 1,
		deskripsi_lahan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		status_lahan: 'verif',
		fk_id_publisher: 1
	},{
		fk_id_desakel: '3201081006',
		alamat_lengkap_lahan: 'Gang Cikupa Cisalada Cigombong Bogor Jawa Barat 16110',
		longitude_lahan: '106.78333662788688',
		latitude_lahan: '-6.73454035804948',
		luasan_lahan: 0.6,
		pengelolaan_sebelumnya_lahan: 'Penanaman PADI, SINGKONG, KEDELAI',
		fk_id_pemilik: 2,
		deskripsi_lahan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		status_lahan: 'verif',
		fk_id_publisher: 1
	},{
		fk_id_desakel: '3201081007',
		alamat_lengkap_lahan: 'Pasirjaya Cigombong Bogor Jawa Barat 16110',
		longitude_lahan: '106.77909823052893',
		latitude_lahan: '-6.730270925984107',
		luasan_lahan: 0.3,
		pengelolaan_sebelumnya_lahan: 'Penanaman SINGKONG, KEDELAI',
		fk_id_pemilik: 3,
		deskripsi_lahan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		status_lahan: 'verif',
		fk_id_publisher: 1
	},{
		fk_id_desakel: '3201081007',
		alamat_lengkap_lahan: 'Pasirjaya Cigombong Bogor Jawa Barat 16110',
		longitude_lahan: '106.77909823052893',
		latitude_lahan: '-6.730270925984300',
		luasan_lahan: 1.1,
		pengelolaan_sebelumnya_lahan: 'Penanaman SINGKONG, KEDELAI',
		fk_id_pemilik: 4,
		deskripsi_lahan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		status_lahan: 'verif',
		fk_id_publisher: 1
	},{
		fk_id_desakel: '3201081001',
		alamat_lengkap_lahan: 'Tugujaya Cigombong Bogor Jawa Barat 16110',
		longitude_lahan: '106.82367157069089',
		latitude_lahan: '-6.73257141842799',
		luasan_lahan: 0.9,
		pengelolaan_sebelumnya_lahan: 'Penanaman SINGKONG, PISANG',
		fk_id_pemilik: 5,
		deskripsi_lahan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		status_lahan: 'verif',
		fk_id_publisher: 1
	},{
		fk_id_desakel: '3201081002',
		alamat_lengkap_lahan: 'Cigombong Bogor West Java',
		longitude_lahan: '106.78488533148457',
		latitude_lahan: '-6.73336024735808',
		luasan_lahan: 1.7,
		pengelolaan_sebelumnya_lahan: 'Penanaman CENGEK',
		fk_id_pemilik: 6,
		deskripsi_lahan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		status_lahan: 'verif',
		fk_id_publisher: 1
	},{
		fk_id_desakel: '3201100011',
		alamat_lengkap_lahan: 'Ciawi',
		longitude_lahan: '106.80380',
		latitude_lahan: '-6.648486',
		luasan_lahan: 1,
		pengelolaan_sebelumnya_lahan: 'Terlantar',
		fk_id_pemilik: 7,
		deskripsi_lahan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		status_lahan: 'verif',
		fk_id_publisher: 1
	},{
		fk_id_desakel: '3201100011',
		alamat_lengkap_lahan: 'Sidang Sari',
		longitude_lahan: '106.86745172454714',
		latitude_lahan: '-6.744052474224121',
		luasan_lahan: 3,
		pengelolaan_sebelumnya_lahan: 'Terlantar',
		fk_id_pemilik: 8,
		deskripsi_lahan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		status_lahan: 'verif',
		fk_id_publisher: 1
	},{
		fk_id_desakel: '3201100013',
		alamat_lengkap_lahan: 'pandan Sari',
		longitude_lahan: '106.864111',
		latitude_lahan: '-6.651247',
		luasan_lahan: 3,
		pengelolaan_sebelumnya_lahan: 'Terlantar',
		fk_id_pemilik: 9,
		deskripsi_lahan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		status_lahan: 'verif',
		fk_id_publisher: 1
	}])