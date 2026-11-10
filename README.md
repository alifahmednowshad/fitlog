<div align="center">

<img src="./src/assets/logo.png" alt="FitLog logo" width="90" />

# FITLOG

### Train with intent. Log every set.

A dark, no-nonsense gym companion: pick a lift, lock it into today's plan,<br/>and watch the week's work add up.

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-fiitlog.vercel.app-C8FF00?style=for-the-badge&labelColor=0b0c0f)](https://fiitlog.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/📦_Source_Code-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/alifahmednowshad/fitlog)

<br/>

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyUI_5-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Preview](#-preview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Pages & Routes](#-pages--routes)
- [API](#-api)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Author](#-author)

---

## 📖 About the Project

**FitLog** is a fast, responsive workout library built with **Next.js (App Router)**.
Browse a library of lifts, open a detailed page for each workout, build **Today's Plan** (max 5 lifts) or save workouts for later, and watch your total **exercises, minutes and calories** update live on the **My Plan** page.

Everything you add is stored in `localStorage`, so your plan is still there after a reload.

> 🎯 **Goal:** Make planning a workout as quick as picking a card — no sign-ups, no clutter.

---

## 🖼️ Preview

| Home | Workout Details |
| :---: | :---: |
| ![Home page](./docs/screenshots/home.png) | ![Details page](./docs/screenshots/details.png) |

| My Plan | Mobile |
| :---: | :---: |
| ![My Plan page](./docs/screenshots/my-plan.png) | ![Mobile view](./docs/screenshots/mobile.png) |

---

## ✨ Key Features

| | Feature | What it does |
| :---: | --- | --- |
| 📚 | **Workout Library** | Cards with image, muscle tags, equipment, duration, calories and rating in a responsive grid |
| 🔀 | **Sort Dropdown** | Instantly re-sort by **Duration**, **Calories** or **Rating** |
| 🔍 | **Workout Details** | Two-column page with a large image, key specs, description, muscle tags and step-by-step instructions |
| 📅 | **Today's Plan & Saved** | Add lifts to today's plan (capped at 5) or save them for later |
| 🔔 | **Live Navbar Counters** | **Plan** and **Saved** badges update the moment you add or remove a workout |
| 📊 | **Live Metrics** | Total **Exercises**, **Minutes** and **Calories** recalculate automatically |
| ✅ | **Mark as Done & Remove** | Complete or remove any planned workout, with a toast for every action |
| 💾 | **Persistent Data** | Plan and saved lists survive a page reload via `localStorage` |
| ⏳ | **Loading, Empty & 404 States** | Spinner while fetching, friendly empty states, and a custom 404 page |
| 📱 | **Fully Responsive** | Looks great on mobile, tablet and desktop, with a mobile navigation menu |

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org/) (App Router) | Framework, routing and server-side data fetching |
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
| `/` | **Home** — hero banner and the workout library with sorting |
| `/workouts/[id]` | **Details** — full information for a single workout |
| `/my-plan` | **My Plan** — live metrics, *Today's Plan* and *Saved* tabs |
| `*` | **404** — custom page for unknown routes |

---

## 🔌 API

Workout data is fetched from a public API:

| Endpoint | Description |
| --- | --- |
| `GET https://api.abcz.workers.dev/api/fitlog` | All workouts |
| `GET https://api.abcz.workers.dev/api/fitlog/:id` | A single workout |

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

- [Node.js](https://nodejs.org/) 20 or later
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/alifahmednowshad/fitlog.git

# 2. Move into the project folder
cd fitlog

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |
| `npm run lint` | Check the code with ESLint |

---

## 🌍 Deployment

The app is deployed on **[Vercel](https://vercel.com)** and redeploys automatically on every push to `main`.
Reloading any page works without errors, and unknown routes show the custom 404 page.

👉 **Live site:** [fiitlog.vercel.app](https://fiitlog.vercel.app)

---

## 👤 Author

**Alif Ahmed Nowshad**

[![GitHub](https://img.shields.io/badge/GitHub-alifahmednowshad-181717?style=flat-square&logo=github)](https://github.com/alifahmednowshad)

---

<div align="center">

⭐ If you like this project, give it a star!

<sub>© 2026 FitLog — Workout Library. Train hard, log honest.</sub>

</div>
