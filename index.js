import bodyParser from "body-parser";
import express from 'express';
import catsRouts from './routes/cats.js';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use('/cats', catsRouts);

app.get('/', (req, res) => {
    res.send()
});

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
})
