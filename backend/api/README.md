# TradeLearn AI API

This folder is the backend scaffold for the product version of TradeLearn AI.

## Planned modules

- `auth` - sign up, sign in, sessions, password reset, social login
- `users` - profiles, preferences, streaks, achievements
- `lessons` - curriculum, modules, chapter progress
- `quizzes` - questions, attempts, scores, certificates
- `simulator` - scenario history, risk settings, replay data
- `journal` - notes, tags, screenshots, emotional review
- `watchlist` - tracked symbols, study notes, alerts
- `notifications` - reminders, streak prompts, weekly recaps
- `admin` - lesson publishing, quiz management, analytics

## Suggested stack

- Runtime: Node.js
- API: Express or Fastify
- Database: PostgreSQL
- ORM: Prisma
- Auth: JWT or session-based auth
- Realtime: WebSockets for simulator or study rooms

## Example routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/lessons`
- `GET /api/lessons/:id`
- `POST /api/progress/modules/:id/complete`
- `POST /api/quizzes/:id/attempt`
- `POST /api/journal`
- `GET /api/watchlist`
- `POST /api/notifications/preferences`
- `GET /api/admin/overview`
