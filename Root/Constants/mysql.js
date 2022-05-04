const mysql = require('mysql');
const botConfig = require('../../Config.js')
module.exports = () => {
	if(!botConfig.dbpass) {
		const con = mysql.createConnection({
			host: botConfig.dbhost,
			user: botConfig.dbuser,
			database: botConfig.dbname
		});
		return con;
	} else {
		const con = mysql.createConnection({
			host: botConfig.dbhost,
			user: botConfig.dbuser,
			password: botConfig.dbpass,
			database: botConfig.dbname
		});
		return con;
	}
    
}
