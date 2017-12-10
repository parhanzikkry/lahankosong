var express = require('express'),
	router = express.Router(),
	RL = require(__dirname + '/../controllers/RegistrasiLahan.controller');

router.get('/dataregistrasi', (req, res, next) => {
	RL.GetAllDataRegistrasi(req, res);
});

router.post('/tambahpemilik', (req, res, next) => {
	RL.TambahPemilik(req, res);
});

router.post('/tambahfotopemilik/:id', (req, res, next) => {
	RL.TambahFotoPemilik(req, res);
})

router.post('/tambahdesakel', (req, res, next) => {
	RL.TambahDesaKelurahan(req, res);
});

router.post('/tambahlahan', (req, res, next) => {
	RL.TambahLahan(req, res);
});

router.post('/tambahfoto/:id', (req, res, next) => {
	RL.TambahFoto(req, res);
});

router.get('/datapemilik', (req, res, next) => {
	RL.GetDataPemilik(req, res);
});

router.get('/dataprovinsi', (req, res, next) => {
	RL.GetDataProvinsi(req, res);
});

router.get('/datakabupatenkota/:provinsi_id', (req, res, next) => {
	RL.GetDataKabupatenKota(req, res);
});

router.get('/datakecamatan/:regency_id', (req, res, next) => {
	RL.GetDataKecamatan(req, res);
});

router.get('/datadesakel/:district_id', (req, res, next) => {
	RL.GetDataDesaKelurahan(req, res);
});

module.exports = router;