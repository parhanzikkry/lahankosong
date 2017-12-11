var express = require('express'),
    router = express.Router(),
    Kelolalahan = require(__dirname + '/../controllers/Kelolalahan.controller');

router.get('/hapuslahansaya/:id', (req, res, next) => {
    Kelolalahan.HapusLahanPilihan(req, res);
});

module.exports = router