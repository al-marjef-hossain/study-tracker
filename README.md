# StudyOrbit — Student Study Tracker

A complete, production-ready student study tracker built with React 19, Vite, Tailwind CSS and Firebase. Every subject, note, assignment, exam, attendance record, GPA, and study session lives in one focused, glassmorphic workspace.

## ✨ Features

- **Landing page** — animated hero, feature grid, how-it-works, FAQ, CTA
- **Authentication** — email/password + Google sign-in, registration, forgot password (Firebase Auth)
- **Dashboard** — stat cards, upcoming exam countdowns, today's agenda, notes progress, CGPA snapshot
- **Subject manager** — color-tagged subjects with credits and instructor
- **Notes tracker** — Complete / In Progress / Pending status per chapter
- **Assignment tracker** — due dates, priorities, status pipeline, overdue highlighting
- **Exam routine** — live day/hour/minute/second countdowns per exam
- **Calendar** — month grid aggregating exams, assignments and planner tasks, with day agenda
- **Daily study planner** — time-blocked tasks per day with completion tracking
- **To-do list** — quick tasks with priority and optional due date
- **Attendance tracker** — per-subject attendance log with percentage and at-risk flagging
- **GPA calculator** — dynamic course rows, instant 4.0-scale GPA
- **CGPA calculator** — rolls saved semesters into a running cumulative GPA
- **Pomodoro timer** — focus/short-break/long-break cycle, ring progress, session logging
- **Progress analytics** — Chart.js breakdowns: notes status, assignment status, attendance, GPA trend, weekly focus minutes
- **Profile & settings** — edit name/photo, change email/password, theme toggle, notification preferences, pomodoro defaults, account deletion
- **Dark / light mode** with persisted preference
- **Fully responsive**, glassmorphism UI, Framer Motion animations throughout
- **Toast notifications**, loading screens, error boundary, custom 404 page
- **Protected routes** — authenticated areas gated behind Firebase Auth state

## 🧱 Tech stack

| Layer | Choice |
|---|---|
| UI | React 19 + Vite |
| Styling | Tailwind CSS (custom glassmorphism design tokens) |
| Auth & data | Firebase Authentication + Firestore |
| Routing | React Router DOM v7 |
| Forms | React Hook Form |
| Animation | Framer Motion |
| Icons | React Icons |
| Charts | Chart.js + react-chartjs-2 |
| Dates | date-fns |
| Notifications | react-hot-toast |

## 📁 Project structure

```
src/
  assets/            static assets
  components/
    common/          buttons, inputs, modal, cards, route guards, etc.
    layout/          sidebar, topbar, theme toggle, user menu
    landing/          marketing page sections
    dashboard/         dashboard widgets
    subjects/ notes/ assignments/ exams/ calendar/ planner/
    todo/ attendance/ gpa/ pomodoro/ analytics/ profile/ settings/
  context/            AuthContext, ThemeContext
  hooks/              useAuth, useTheme, useFirestoreCollection, useCountdown,
                       usePomodoro, useLocalStorage, useDebounce
  firebase/           config.js, auth.js, firestore.js (generic CRUD helpers)
  services/           one service module per feature collection
  utils/              constants, dateUtils, gpaUtils, validators, notify, cn, chartSetup
  layouts/            AuthLayout, DashboardLayout
  pages/              one page component per route
  App.jsx / main.jsx / index.css
```

## 🚀 Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Firebase project

1. Go to the [Firebase console](https://console.firebase.google.com/) and create a project.
2. Enable **Authentication** → Sign-in method → turn on **Email/Password** and **Google**.
3. Create a **Firestore Database** (start in production mode).
4. Under Project Settings → General → "Your apps", add a Web app and copy the config values.

### 3. Configure environment variables

Copy `.env.example` to `.env` and fill in your Firebase config:

```bash
cp .env.example .env
```

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

### 4. Firestore security rules

All data is stored per-user under `users/{uid}/{collection}/{docId}`. Use rules like:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{collection}/{docId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 5. Run the app

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

### 6. Build for production

```bash
npm run build
npm run preview
```

## 🗄️ Data model

Each authenticated user owns these Firestore subcollections under `users/{uid}/…`:

- `subjects` — `{ name, code, instructor, credits, color }`
- `notes` — `{ title, subjectId, status, summary }`
- `assignments` — `{ title, subjectId, dueDate, priority, status, description }`
- `exams` — `{ title, subjectId, examDate, examTime, examDateTime, venue, notes }`
- `todos` — `{ title, dueDate, priority, completed }`
- `plannerTasks` — `{ title, subjectId, date, startTime, endTime, completed }`
- `attendance` — `{ subjectId, date, status }`
- `semesters` — `{ name, gpa, totalCredits, courseCount }`
- `pomodoroSessions` — `{ durationMinutes }`

All documents are automatically stamped with `createdAt` / `updatedAt` server timestamps by the Firestore helper layer in `src/firebase/firestore.js`.

## 🎨 Design system

The UI uses a deep-focus night palette (`ink` near-black base) with a violet/cyan duotone accent (`focus` / `clarity`) and an amber "highlighter" accent (`glow`) for deadlines and streaks — all defined as Tailwind tokens in `tailwind.config.js`. Glass surfaces use `.glass`, `.glass-panel`, and `.glass-card` utility classes from `src/index.css`. Typography pairs Space Grotesk (display) with Inter (body) and JetBrains Mono (numbers, countdowns).

## 📄 License

This project is provided as-is for educational and personal use.
