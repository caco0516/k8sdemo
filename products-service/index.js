const express = require('express');
const morgan = require('morgan');
const Pool = require('pg').Pool;

const app = express();
const port = process.env.PORT || 80;
const connectionString = process.env.DB_URL;

const pool = new Pool({ connectionString });

require('./seed.js').applySeed(pool);

app.use(morgan('dev'));

app.get('/', async  (req, res) => {
	var result = await pool.query('SELECT * FROM products'); 
	res.json(result.rows);
});

app.listen(port, () => {
	console.log(`Products Service running...`);	
});
