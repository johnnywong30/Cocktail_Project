import express from 'express';
import cors from 'cors';
import path from 'path';
import axios from 'axios';
import random from './routes/random.js'; 
const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export class Drink {
    constructor(drinkData) {
        this.id = drinkData.idDrink
        this.name = drinkData.strDrink
        this.category = drinkData.strCategory
        this.alcoholic = drinkData.strAlcoholic
    }
}

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


// get random Drink
app.use('/random', (req, res) => {
    axios.get(API_URL)
        // .then(response => res.json({drink: new Drink(response.data)}))
        .then(response => res.json(response.data))
        .catch(error => console.log(error))
});

app.use('/poo', (req, res) => {
    console.log("reached random")
    console.log("finished fetch")
    res.send('hello')
});

// send React client as default
app.get('*', (req, res) => {
    console.log("boo")
    req.url = '/';
    res.sendFile(path.join(__dirname, './client/public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`On port ${PORT}`);
})
