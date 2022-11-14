const express = require('express');
const request = require('request');
const morgan  = require('morgan');

const os =  require('os');
const app = express();
const port = process.env.PORT || 80;

app.use(morgan('dev'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {

    let options = { 
        url: process.env.API_URL,
        method: 'GET',
        headers:[
            {
                name: 'Content-Type',
                value: 'application/json'
            }
        ],
        json: true
    };

    request(options, (error, response, body) => {
        if(error){
            console.error('error:', error); // Print the error if one occurred
            res.status(500);
            return;
        }

        res.render('index', { 
            hostname: os.hostname(), 
            environment: process.env.NODE_ENV, 
            products: JSON.parse(body),
            prods: [{name: 'Hola', price: 25}]
        });
    });
});


app.listen(port, () => {
    console.log('Webapp is running ....');
})