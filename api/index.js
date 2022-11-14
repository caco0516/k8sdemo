const express = require('express');
const morgan =  require('morgan');
const request = require('request');

const app = express();
const port = process.env.PORT || 80;
const productServiceUrl = process.env.PRODUCTS_URL;

app.use(morgan('dev'));

app.get('/', async  (req, res) => {
	request(productServiceUrl, function (error, response, body) {
		if(error){
	 		console.error('error:', error); // Print the error if one occurred
	 		res.status(500);
	 		return;
	  	}
	  	res.json(body);
	});
});

app.listen(port, () => {
	console.log('Backend API running...');	
});
