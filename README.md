# TradeLearn AI

TradeLearn AI is a responsive trading education platform designed for beginners through advanced learners. It now includes lesson-based learning, specialized learning tracks, quizzes, a paper trading simulator, a mentor assistant, watchlist study tools, assessment previews, progress tracking, and backend scaffolding for a fuller product build.

## Repository Structure

- `frontend/` - current responsive web app and PWA
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
- PWA support via manifest and service worker

## Project Structure

- `frontend/index.html` - app structure and content
- `frontend/styles.css` - visual design, layout, and animations
- `frontend/app.js` - lessons, quiz logic, simulator, and local progress state
- `frontend/manifest.webmanifest` - installable app metadata
- `frontend/sw.js` - offline cache support
- `backend/README.md` - backend planning overview
- `backend/api/README.md` - API module plan and example endpoints
- `backend/api/src/server.js` - lightweight backend scaffold

## Run Locally

Use any static server. For example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

The root URL automatically redirects to `frontend/`, so you can run the server from the repository root.

## Optional backend scaffold run

```bash
node backend/api/src/server.js
```

Then open `http://localhost:8080/api/health`.
