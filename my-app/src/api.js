const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const LOCAL_BOOKINGS_KEY = 'sport-complex-bookings'

function loadLocalBookings() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_BOOKINGS_KEY) || '[]')
  } catch {
    return []
  }
}

function saveLocalBookings(bookings) {
  localStorage.setItem(LOCAL_BOOKINGS_KEY, JSON.stringify(bookings))
}

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(data?.message || 'Request failed')
  }

  return data
}

export async function getBookings() {
  try {
    return await request('/bookings')
  } catch (error) {
    console.warn('Using local bookings because the API is unavailable:', error.message)
    return loadLocalBookings()
  }
}

export async function createBooking(booking) {
  try {
    const data = await request('/bookings', {
      method: 'POST',
      body: JSON.stringify(booking)
    })
    return data.booking
  } catch (error) {
    console.warn('Saving booking locally because the API is unavailable:', error.message)
    const bookings = loadLocalBookings()
    const localBooking = {
      id: Date.now().toString(),
      ...booking,
      status: 'รอตรวจสอบ',
      createdAt: new Date().toISOString()
    }
    bookings.push(localBooking)
    saveLocalBookings(bookings)
    return localBooking
  }
}

export async function cancelBooking(id) {
  try {
    await request(`/bookings/${id}`, { method: 'DELETE' })
  } catch (error) {
    console.warn('Removing local booking because the API is unavailable:', error.message)
  }

  const bookings = loadLocalBookings().filter((booking) => booking.id !== id)
  saveLocalBookings(bookings)
}
