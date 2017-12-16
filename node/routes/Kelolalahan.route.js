var express = require('express'),
    router = express.Router(),
    Kelolalahan = require(__dirname + '/../controllers/Kelolalahan.controller');

router.get('/hapuslahansaya/:id', (req, res, next) => {
    Kelolalahan.HapusLahanPilihan(req, res);
});

router.post('/editlahanpilihan/:id', (req, res, next) => {
    Kelolalahan.EditLahanPilihan(req, res);
});

router.get('/datapublisher', (req, res, next) => {
    Kelolalahan.GetDataPublisher(req, res);
});

router.get('/hapusdatapublisher/:id', (req, res, next) => {
    Kelolalahan.HapusDataPublisher(req, res);
});

router.get('/veriflahanini/:id', (req, res, next) => {
    Kelolalahan.VerifikasiLahanPilihan(req, res);
});

module.exports = router