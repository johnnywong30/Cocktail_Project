import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import postRoutes from './routes/posts.js'; 

const app = express();
const PORT = process.env.PORT|| 5000;

app.use('/posts', postRoutes);


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello!');
})

app.listen(PORT, () => {
    console.log(`On port ${PORT}`);
})
