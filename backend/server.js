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

// Get All Slots
app.get('/slots', (req, res) => {
  Slot.find().then((slots) => res.json(slots)).catch((err) => res.json(err))
})

// Get Specific Slot
app.get('/slots/:id', (req, res) => {
  Slot.findById(req.params.id).then((slot) => res.json(slot)).catch((err) => res.json(err))
})


// Update Appointments for Slot
app.put('/appointments/:id', (req, res) => {
  const body = req.body
  const id = req.params.id

  Slot.findByIdAndUpdate(id, { $push: { appointments: body } }, { new: true }).then((slot) => res.json(slot)).catch((err) => res.json(err))
})


const PORT = 4000
app.listen(PORT, console.log(`htpp://localhost:${PORT}`))