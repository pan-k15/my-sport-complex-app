const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Mock data
let fields = [
  { id: '1', name: 'สนามฟุตบอล', pricePerHour: 500 },
  { id: '2', name: 'สนามบาสเกตบอล', pricePerHour: 300 }
]

let bookings = []

// 🟢 GET all fields
app.get('/fields', (req, res) => {
  res.json(fields)
})

// 🟢 POST new booking
app.post('/bookings', (req, res) => {
  const booking = {
    id: Date.now().toString(),
    ...req.body,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
  bookings.push(booking)
  res.status(201).json({ message: 'Booking created', booking })
})

// 🟢 GET all bookings (mock)
app.get('/bookings', (req, res) => {
  res.json(bookings)
})

// 🟢 Simple health check
app.get('/', (req, res) => {
  res.send('Sport Complex Backend is running 🚀')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`)
})
