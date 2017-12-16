var express = require('express'),
	router = express.Router(),
	Lahan = require(__dirname + '/../controllers/CariLahan.controller');

router.get('/limalahanterbaru', (req, res, next) => {
	Lahan.GetFiveLahan(req, res);
});

router.get('/lahankecamatan/:fk_id', (req, res, next) => {
	Lahan.DaftarLahanPerkecamatan(req, res);
});

router.get('/lahandesakelurahan/:fk_id', (req, res, next) => {
	Lahan.DaftarLahanPerdesakelurahan(req, res);
});

router.get('/detaillahan/:id', (req, res, next) => {
	Lahan.GetDetailDataLahan(req, res);
});

router.get('/cariberdasar/:kategori/:pilihan', (req, res, next) => {
	Lahan.SearchByCatagory(req, res);
});

router.get('/mylahan', (req, res, next) => {
	Lahan.GetMyLahanData(req, res);
});

router.get('/sortedbyidandstatus', (req, res, next) => {
	Lahan.GetLahanSortedByIdAndStatus(req, res);
});

router.get('/verifiedlahan', (req, res, next) => {
	Lahan.GetVerifiedLahan(req, res);
});

router.get('/unverifiedlahan', (req, res, next) => {
	Lahan.GetUnverifiedLahan(req, res);
});

module.exports = router;