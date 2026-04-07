# TradeLearn AI

TradeLearn AI is a responsive trading education platform designed for beginners through advanced learners. It combines lesson-based learning, quizzes, a paper trading simulator, progress tracking, and a journal into a single installable web experience.

## Features

- Beginner to advanced trading roadmap
- Interactive lesson modules
- Checkpoint quizzes with instant feedback
- Paper trading simulator with risk calculations
- Progress dashboard and journal
- Responsive UI for desktop, tablet, and mobile
- PWA support via manifest and service worker

## Project Structure

- `index.html` - app structure and content
- `styles.css` - visual design, layout, and animations
- `app.js` - lessons, quiz logic, simulator, and local progress state
- `manifest.webmanifest` - installable app metadata
- `sw.js` - offline cache support

## Run Locally

Use any static server. For example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
