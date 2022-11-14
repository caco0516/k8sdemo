const fs = require('fs');

module.exports.applySeed = (connection) => {
	const sqlQuery = fs.readFileSync('./seed.sql', 'utf8');
	connection.query(sqlQuery, (err, res) => {
		if (err) {
			console.log(err.stack);
		} else {
			console.log(res);
		}	
	});
};
