import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import { connectDb } from './config/database.js';

const app = express();

app.use(cors())
app.use(bodyParser.json())
connectDb();


// checking
app.get('/', (req, res) => { res.json("server running") })


// Create Slot
app.post('/slots', (req, res) => {
  const body = req.body
  Slot.create(body).then((slot) => res.json(slot)).catch((err) => res.json(err))
})


const PORT = 4000
app.listen(PORT, console.log(`htpp://localhost:${PORT}`))