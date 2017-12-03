var jwt = require('jsonwebtoken');

/*Set token for this apps*/
class Token {
	constructor() {
		this.secretKey = 'l4h4nn0npr0dukt1f'
	}
	SetupToken(data) {
		return jwt.sign({token:data}, this.secretKey, {expiresIn: 60*60*1000});
	}
	CheckingToken(data, res, next) {
		jwt.verify(data, this.secretKey, function(err, decode){
			if(err != null) {
				res.json({status: false, message: "Sorry It doesn't my token, please make new request"});
			}
		}) 
	}
	DecodeToken(data) {
		return jwt.decode(data);
	}
}

module.exports = new Token;