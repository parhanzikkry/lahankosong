var express = require('express'),
router = express.Router(),
Auth = require(__dirname + '/../controllers/Auth.controller');

router.post('/login', (req, res, next) => {
	Auth.Login(req, res);
});

router.post('/register', (req, res, next) => {
    console.log('masuk', req.body);
    Auth.Register(req, res);
})

module.exports = router;