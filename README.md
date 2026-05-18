# My Sport Complex App

Sport complex booking system for viewing courts, creating bookings, checking booking status, and managing simple admin pages.

The project is split into:

- `my-app/` - Vue 3 frontend built with Vite, Vue Router, and Tailwind CSS.
- `backend/` - Express API with in-memory mock data for fields and bookings.

## Features

- User landing, login, register, and dashboard pages
- Booking form with date/time validation
- Booking list page with cancellation support
- Admin login and dashboard shell
- Express API for fields and bookings
- Local frontend fallback for bookings when the API is unavailable

## Tech Stack

- Vue 3
- Vue Router
- Vite
- Tailwind CSS
- Express
- CORS
- dotenv

## Requirements

- Node.js 20.x
- npm

The frontend currently uses Vite 5 because it works with Node `20.5.1`. If you upgrade to Vite 7 later, use Node `20.19.0` or newer.

## Installation

Install dependencies for both apps:

```bash
cd backend
npm install

cd ../my-app
npm install
```

## Running Locally

Start the backend API:

```bash
cd backend
node index.js
```

The backend runs at:

```text
http://localhost:3000
```

Start the frontend in another terminal:

```bash
cd my-app
npm run dev
```

Vite will print the frontend URL, usually:

```text
http://localhost:5173
```

## Frontend Environment

By default, the frontend calls:

```text
http://localhost:3000
```

To use another API URL, create `my-app/.env`:

```bash
VITE_API_URL=http://localhost:3000
```

## Available Routes

Frontend routes:

- `/` - home page
- `/login` - user login
- `/register` - user registration
- `/dashboard` - user dashboard with recent bookings
- `/book` - booking form
- `/bookings` - booking list and cancellation page
- `/admin/login` - admin login
- `/admin/dashboard` - admin dashboard

## API Endpoints

Backend endpoints:

```text
GET    /
GET    /fields
GET    /bookings
POST   /bookings
DELETE /bookings/:id
```

Example booking payload:

```json
{
  "sportType": "ฟุตซอล",
  "courtId": "สนาม 1",
  "date": "2026-05-18",
  "startTime": "10:00",
  "endTime": "11:00"
}
```

`POST /bookings` requires `sportType`, `courtId`, `date`, `startTime`, and `endTime`. `endTime` must be later than `startTime`.

## Build

Build the frontend:

```bash
cd my-app
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
.
├── backend/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── my-app/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── src/
│       ├── api.js
│       ├── App.vue
│       ├── main.js
│       ├── router.js
│       ├── style.css
│       └── pages/
└── README.md
```

## Notes

- Backend data is stored in memory and resets when the server restarts.
- The frontend stores bookings in `localStorage` only when the backend is unavailable.
- The current login/register flows are placeholders and do not authenticate against a real user database yet.
- Admin login accepts the current mock credentials in `AdminLogin.vue`.
