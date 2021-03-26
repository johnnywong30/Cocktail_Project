import express from 'express';
import axios from 'axios';

const router = express.Router();
const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

// get API info
router.get('/', (req, res) => {
    console.log("reached random")
    axios.get(API_URL)
        .then(response => res.json(response))
        .then(data => 
            console.log(data),
            res.json({monke:data}))
        // .then(data -)
})

export default router;