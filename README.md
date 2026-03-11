<div align="center">

<svg width="800" height="140" viewBox="0 0 800 140" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0d1117"/>
      <stop offset="60%" style="stop-color:#0d1a0f"/>
      <stop offset="100%" style="stop-color:#0a1628"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="140" fill="url(#bg)" rx="10"/>
  <polygon points="0,140 100,70 180,100 270,45 360,80 450,30 540,65 630,35 720,70 800,45 800,140" fill="#0a1a0d" opacity="0.85"/>
  <polygon points="0,140 90,95 190,115 290,65 390,95 490,55 590,80 690,55 790,85 800,70 800,140" fill="#0d1f10" opacity="0.5"/>
  <line x1="0" y1="139" x2="800" y2="139" stroke="#21262d" stroke-width="1"/>
  <text x="400" y="62" text-anchor="middle" font-family="'Courier New',monospace" font-size="11" fill="#3fb950" opacity="0.7" filter="url(#glow)">harshwardhan1507 / portfolio</text>
  <text x="400" y="92" text-anchor="middle" font-family="'Courier New',monospace" font-size="24" font-weight="700" fill="#ffffff" filter="url(#glow)">⟨ Harsh Wardhan · Portfolio ⟩</text>
  <text x="400" y="116" text-anchor="middle" font-family="'Courier New',monospace" font-size="12" fill="#3fb950" filter="url(#glow)">Next.js · TypeScript · Tailwind CSS · Vercel</text>
</svg>

<br/>

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-harshwardhanportfolio.vercel.app-0d1117?style=for-the-badge&logo=vercel&logoColor=3fb950&labelColor=0d1117)](https://harshwardhanportfolio.vercel.app/)

[![Next.js](https://img.shields.io/badge/Next.js-0d1117?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-0d1117?style=flat-square&logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0d1117?style=flat-square&logo=tailwindcss&logoColor=06B6D4)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-0d1117?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-0d1117?style=flat-square&logoColor=3fb950)](LICENSE)

</div>

---

## 📖 Overview

Personal developer portfolio built with **Next.js App Router** and **TypeScript**, designed to showcase projects, skills, and live GitHub activity in a clean terminal-inspired UI. Features real-time GitHub API integration, responsive design, and smooth animations — deployed on Vercel with a CI/CD pipeline.

---

## ✨ Features

- 🖥️ **Terminal-style UI** — custom CLI-inspired components and interactions
- 📊 **Live GitHub Stats** — real-time repos, stars, forks, followers, and contribution graph
- 🗂️ **Project Showcase** — with live demo + GitHub links per project
- 🛠️ **Skills Section** — tech stack displayed with official icons
- 📄 **Resume Download** — direct PDF link integrated
- 📬 **Contact Section** — open for opportunities and collaborations
- 📱 **Fully Responsive** — works on all screen sizes
- ⚡ **Optimized Performance** — Next.js SSR + image optimization

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Simple Icons / Custom SVGs |
| Data | GitHub REST API |
| Deployment | Vercel |

---

## 🚀 Projects Showcased

### 🧮 SRM CGPA Calculator
> Credit-weighted GPA engine for SRM University students — compute semester GPA and cumulative CGPA instantly.

`HTML` `CSS` `JavaScript` `Firebase` · [GitHub](https://github.com/harshwardhan1507/SRM-cgpa-calculator) · [Live Demo](https://srm-cgpa-calculator-by-haruto.vercel.app/)

---

### ⏱️ FocusX — Pomodoro Timer
> Glassmorphism-style Pomodoro timer with dynamic backgrounds and adaptive text contrast for focused work sessions.

`HTML` `CSS` `JavaScript` · [GitHub](https://github.com/harshwardhan1507/12-days-12-projects/tree/master/focusX) · [Live Demo](https://focusxbyharuto.netlify.app/)

---

### 🌡️ Tempify — Temperature Converter
> Real-time conversion between Celsius, Fahrenheit, and Kelvin with instant computation and minimal UI.

`HTML` `CSS` `JavaScript` · [GitHub](https://github.com/harshwardhan1507/12-days-12-projects/tree/master/Tempify) · [Live Demo](https://tempifybyharuto.netlify.app/)

---

## 📁 Project Structure

```
portfolio/
├── app/              # Next.js App Router pages & layouts
├── lib/              # Utility functions & GitHub API helpers
├── public/           # Static assets (images, icons, resume PDF)
│   ├── icons/        # Tech stack SVG icons
│   └── images/       # Project screenshots
├── types/            # TypeScript type definitions
├── next.config.ts    # Next.js configuration
├── tailwind.config.js
└── tsconfig.json
```

---

## 🏃 Getting Started

### Prerequisites
- Node.js `18+`
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/harshwardhan1507/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

This project is deployed on **Vercel** with automatic CI/CD — every push to `master` triggers a new production deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/harshwardhan1507/portfolio)

---

## 📬 Contact

**Harsh Wardhan**
- 🌐 Portfolio: [harshwardhanportfolio.vercel.app](https://harshwardhanportfolio.vercel.app/)
- 💼 LinkedIn: [harsh-wardhan-singh-cse](https://www.linkedin.com/in/harsh-wardhan-singh-cse/)
- 🐙 GitHub: [@harshwardhan1507](https://github.com/harshwardhan1507)

---

<div align="center">

Built with 💚 by **Harsh Wardhan** · © 2026

![](https://komarev.com/ghpvc/?username=harshwardhan1507&color=3fb950&style=flat-square&label=REPO+VIEWS)

</div>
