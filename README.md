# TradeLearn AI

TradeLearn AI is a responsive trading education platform designed for beginners through advanced learners. It now includes lesson-based learning, specialized learning tracks, quizzes, a paper trading simulator, a mentor assistant, watchlist study tools, assessment previews, progress tracking, and backend scaffolding for a fuller product build.

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
- Backend API scaffold for future productization
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
- `backend/README.md` - backend planning overview
- `backend/api/README.md` - API module plan and example endpoints
- `backend/api/src/server.js` - lightweight backend scaffold

## Run Frontend Locally

Install dependencies and run the Next.js frontend:

```bash
cd frontend
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Optional backend scaffold run

```bash
node backend/api/src/server.js
```

Then open `http://localhost:8080/api/health`.
