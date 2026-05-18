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

const requiredBookingFields = ['sportType', 'courtId', 'date', 'startTime', 'endTime']

// 🟢 GET all fields
app.get('/fields', (req, res) => {
  res.json(fields)
})

// 🟢 POST new booking
app.post('/bookings', (req, res) => {
  const missingField = requiredBookingFields.find((field) => !req.body[field])

  if (missingField) {
    return res.status(400).json({ message: `Missing required field: ${missingField}` })
  }

  if (req.body.startTime >= req.body.endTime) {
    return res.status(400).json({ message: 'endTime must be later than startTime' })
  }

  const booking = {
    id: Date.now().toString(),
    ...req.body,
    status: req.body.status || 'รอตรวจสอบ',
    createdAt: new Date().toISOString()
  }
  bookings.push(booking)
  res.status(201).json({ message: 'Booking created', booking })
})

// 🟢 GET all bookings (mock)
app.get('/bookings', (req, res) => {
  res.json(bookings)
})

// 🟢 DELETE booking
app.delete('/bookings/:id', (req, res) => {
  const initialLength = bookings.length
  bookings = bookings.filter((booking) => booking.id !== req.params.id)

  if (bookings.length === initialLength) {
    return res.status(404).json({ message: 'Booking not found' })
  }

  res.status(204).send()
})

// 🟢 Simple health check
app.get('/', (req, res) => {
  res.send('Sport Complex Backend is running 🚀')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`)
})
