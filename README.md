# TradeLearn AI

TradeLearn AI is a responsive trading education platform designed for beginners through advanced learners. It now includes a Next.js frontend, a structured backend API, specialized learning tracks, quizzes, a paper trading simulator, a mentor assistant, watchlist study tools, assessment previews, progress tracking, and a Prisma database foundation.

## Repository Structure

- `frontend/` - Next.js frontend app
- `backend/` - reserved for future APIs, authentication, progress sync, and admin services

## Features

- Beginner to advanced trading roadmap
- Interactive lesson modules
- Specialized learning tracks
- Checkpoint quizzes with instant feedback
- Paper trading simulator with risk calculations
- AI mentor study assistant
- Watchlist study panel and notification toggles
- Progress dashboard, streaks, and journal
- Assessment and certificate previews
- Backend API scaffold with auth and progress entry points
- Prisma + SQLite database foundation
- Responsive UI for desktop, tablet, and mobile
- Next.js app-router scaffold
- PWA support via manifest and service worker

## Project Structure

- `frontend/app/layout.js` - Next.js root layout
- `frontend/app/page.js` - homepage UI rendered through Next.js
- `frontend/app/globals.css` - visual design, layout, and animations
- `frontend/public/app.js` - client-side interactions and local progress state
- `frontend/public/manifest.webmanifest` - installable app metadata
- `frontend/public/sw.js` - offline cache support
- `frontend/package.json` - frontend package scripts and dependencies
- `backend/api/prisma/schema.prisma` - database schema
- `backend/README.md` - backend planning overview
- `backend/api/README.md` - API module plan and example endpoints
- `backend/api/src/server.js` - backend server bootstrap
- `scripts/run-local.sh` - starts frontend and backend together

## Run Frontend Locally

Install dependencies and run the Next.js frontend:

```bash
cd frontend
npm install
npm run dev
```

Then open `http://localhost:3000`.

If port `3000` is busy, Next.js will automatically use `3001` or another available port and print it in the terminal.

## Run Backend Locally

```bash
cd backend/api
npm install
node backend/api/src/server.js
```

Then open:

- `http://localhost:8080/`
- `http://localhost:8080/api/health`
- `http://localhost:8080/api/overview`
- `http://localhost:8080/api/lessons`
- `http://localhost:8080/api/progress`

## Database foundation

The backend includes Prisma with SQLite as the local database baseline.

```bash
cd backend/api
cp .env.example .env
npx prisma generate
```

Optional first migration:

```bash
npx prisma migrate dev --name init
```

## Run Both Together

```bash
chmod +x scripts/run-local.sh
./scripts/run-local.sh
```
