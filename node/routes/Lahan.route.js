var express = require('express'),
	router = express.Router(),
	Lahan = require(__dirname + '/../controllers/CariLahan.controller');

router.get('/lahankecamatan/:fk_id', (req, res, next) => {
	Lahan.DaftarLahanPerkecamatan(req, res);
});

router.get('/detaillahan/:id', (req, res, next) => {
	Lahan.GetDetailDataLahan(req, res);
})

module.exports = router;