var express = require('express'),
	router = express.Router(),
	Lahan = require(__dirname + '/../controllers/CariLahan.controller');

router.get('/limalahanterbaru', (req, res, next) => {
	Lahan.GetFiveLahan(req, res);
});

router.get('/lahankecamatan/:fk_id', (req, res, next) => {
	Lahan.DaftarLahanPerkecamatan(req, res);
});

router.get('/detaillahan/:id', (req, res, next) => {
	Lahan.GetDetailDataLahan(req, res);
});

router.get('/cariberdasar/:kategori/:pilihan', (req, res, next) => {
	console.log(req.params);
	Lahan.SearchByCatagory(req, res);
});

module.exports = router;