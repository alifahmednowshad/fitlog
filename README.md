<div align="center">

# 💪 FitLog — Workout Library

**Train with intent. Log every set.**

A dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.

[🌐 Live Demo](YOUR_LIVE_LINK_HERE) · [📦 GitHub Repo](YOUR_GITHUB_REPO_LINK_HERE)

![FitLog Screenshot](./public/screenshot.png)

</div>

---

## 📖 About The Project

**FitLog** is a responsive workout library web app built with **Next.js (App Router)**. Users can browse a library of lifts, open a detailed page for each workout, add workouts to **Today's Plan** (max 5 lifts) or save them for later, and track total exercises, minutes, and calories on the **My Plan** page. Plan and saved data are persisted in `localStorage`, so nothing is lost on reload.

This project was built for the **B14-A6 (Assignment 6)** web development course, following the provided Figma design.

---

## ✨ Key Features

1. **📚 Workout Library** — All workouts fetched from the API and shown as cards (image, muscle tags, equipment, duration, calories, rating) in a responsive 3-column grid.
2. **🔀 Sort Dropdown** — Re-sort the library by **Duration**, **Calories**, or **Rating** instantly.
3. **🔍 Detailed Workout Page** — Two-column layout with a large image, key specs table, description, muscle tags, and step-by-step instructions.
4. **📅 Today's Plan & Saved Lists** — Add a workout to today's plan (capped at 5 lifts) or save it for later, with live **Plan** and **Saved** counters in the navbar.
5. **📊 Live Metrics** — The My Plan page shows total **Exercises**, **Minutes**, and **Calories**, updating as workouts are added or removed.
6. **✅ Mark as Done & Remove** — Complete or remove any workout from the plan, with a toast notification for every action.
7. **💾 Persistent Data** — Plan and saved workouts survive a page reload using `localStorage`.
8. **⏳ Loading & 404 States** — Spinner while data loads, a "Loading workouts…" state on My Plan, an empty state with a CTA, and a custom 404 page.
9. **📱 Fully Responsive** — Works on mobile, tablet, and desktop, including a mobile navigation menu.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org/) (App Router) | Framework, routing, server-side data fetching |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling and responsive design |
| [daisyUI 5](https://daisyui.com/) | Component library (buttons, spinner) |
| [Lucide React](https://lucide.dev/) | Icons |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |
| React Context API | Global plan and saved state |

---

## 🗺️ Pages & Routes

| Route | Description |
| --- | --- |
| `/` | Home — hero banner and the workout library with sort |
| `/workouts/[id]` | Details page for a single workout |
| `/my-plan` | My Plan — metrics, Today's Plan and Saved tabs |
| `*` | Custom 404 page |

---

## 🔌 API

Workout data is fetched from:

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout (Navbar, Footer, Provider, Toaster)
│   ├── page.tsx              # Home page
│   ├── loading.tsx           # Loading spinner
│   ├── not-found.tsx         # 404 page
│   ├── workouts/[id]/        # Workout details page
│   └── my-plan/              # My Plan page
├── components/
│   ├── homepage/             # Banner, Library, LibraryGrid, LibraryCard
│   ├── details/              # ActionButtons
│   └── shared/               # Navbar, Footer
├── context/                  # FitLogContext (plan & saved state)
├── types/                    # Workout type
└── assets/                   # Logo and banner images
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
# 1. Clone the repository
git clone YOUR_GITHUB_REPO_LINK_HERE

# 2. Go to the project folder
cd fitlog

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🌍 Deployment

The project is deployed on **Vercel**. Reloading any page works without errors, and unknown routes show a custom 404 page.

---

<div align="center">

© 2026 FitLog — Workout Library. Train hard, log honest.

</div>
