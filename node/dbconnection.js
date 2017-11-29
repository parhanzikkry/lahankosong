var Sequelize = require('sequelize');

module.exports = new Sequelize('lahankosong'/*DB name*/, 'root'/*DB username*/, 'gr1mr34p3r'/*DB password*/, {
	host: 'localhost',
	dialect: 'mysql'/*type of DBMS*/,

	pool: {
		/*Set max requesting to database*/
		max: 5,
		min: 0,
		idle: 3600
	},
	/*Set timezone to DB*/
	timezone: '+07:00'
});