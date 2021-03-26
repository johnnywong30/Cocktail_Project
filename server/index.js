import express from 'express';
import cors from 'cors';
import path from 'path';
import axios from 'axios';

import Drink from './models/drink.js';
const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const API_URL_2 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const DRINK_TYPES = ['wine', 'vodka', 'beer', 'margarita', 'gin', 'rum'];


const app = express();
// client and server have to be on different ports!!!
const PORT = process.env.PORT|| 4000;
const __dirname = path.resolve(path.dirname(''));

// for running client and server at the same time
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// send random Drink to caller
app.use('/random', (req, res) => {
    axios.get(API_URL)
        .then(response => res.json({drink: new Drink(response.data.drinks[0])}))
        .catch(error => console.log(error))
});

// send random 5 Drinks to caller
app.use('/surprise', (req, res) => {
    let link = API_URL_2 + DRINK_TYPES[Math.floor(Math.random() * DRINK_TYPES.length)]
    axios.get(link)
        .then(response => res.json({drinks: response.data.drinks.map((drink) => new Drink(drink))}))
        .catch(error => console.log(error))
})

// send React client as default
app.get('*', (req, res) => {
    req.url = '/';
    res.sendFile(path.join(__dirname, './client/public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`On port ${PORT}`);
})
