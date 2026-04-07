# TradeLearn AI

TradeLearn AI is a responsive trading education platform designed for beginners through advanced learners. It combines lesson-based learning, quizzes, a paper trading simulator, progress tracking, and a journal into a single installable web experience.

## Repository Structure

- `frontend/` - current responsive web app and PWA
- `backend/` - reserved for future APIs, authentication, progress sync, and admin services

## Features

- Beginner to advanced trading roadmap
- Interactive lesson modules
- Checkpoint quizzes with instant feedback
- Paper trading simulator with risk calculations
- Progress dashboard and journal
- Responsive UI for desktop, tablet, and mobile
- PWA support via manifest and service worker

## Project Structure

- `frontend/index.html` - app structure and content
- `frontend/styles.css` - visual design, layout, and animations
- `frontend/app.js` - lessons, quiz logic, simulator, and local progress state
- `frontend/manifest.webmanifest` - installable app metadata
- `frontend/sw.js` - offline cache support
- `backend/README.md` - backend planning placeholder

## Run Locally

Use any static server. For example:

```bash
cd frontend
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
