# Portfolio

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/harshwardhan1507/portfolio)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-98.5%25-blue.svg)](https://github.com/harshwardhan1507/portfolio)
[![Stars](https://img.shields.io/github/stars/harshwardhan1507/portfolio?style=social)](https://github.com/harshwardhan1507/portfolio/stargazers)

> A high-performance developer portfolio featuring live GitHub analytics, interactive WebGL backgrounds, and buttery-smooth animations — built to impress recruiters and showcase real engineering skills.

**Live Demo:** [harshwardhanportfolio.vercel.app](https://harshwardhanportfolio.vercel.app/)

---

## Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- TypeScript 5.2
- Tailwind CSS 3.4
- shadcn/ui components
- Framer Motion
- GSAP 3.14
- Three.js / OGL (WebGL)

**Visualization & UX:**
- Chart.js 4.4 (GitHub contribution graphs)
- Lucide React (icons)
- Custom CSS animations

**Deployment:**
- Vercel (CI/CD)
- GitHub API (real-time stats)

---

## Key Features

1. **Live GitHub Integration** — Real-time repository fetching, contribution graphs, and language statistics via GitHub API
2. **Interactive WebGL Background** — Hyperspeed particle system built with OGL for immersive hero experience
3. **Click Spark Effects** — Custom particle burst animations on click for tactile UI feedback
4. **Animated Terminal Component** — Typewriter-style command-line interface showcasing technical skills
5. **Bento-Style Project Grid** — Responsive masonry layout with hover animations and glassmorphism effects
6. **Scroll-Triggered Animations** — GSAP-powered reveal effects with stagger timing
7. **Fully Responsive Design** — Mobile-first Tailwind CSS with dark theme optimization
8. **Performance Optimized** — Next.js Image optimization, lazy loading, and minimal JavaScript bundles

---

## Project Structure

```
portfolio/
├── app/
│   ├── components/         # 18 modular React components
│   │   ├── Hero.tsx        # WebGL particle background + intro
│   │   ├── About.tsx       # Personal bio + education
│   │   ├── Achievements.tsx # Hackathon wins & certifications
│   │   ├── GitHubStats.tsx # Live metrics + Chart.js graphs
│   │   ├── RepoList.tsx    # Real-time repo fetching
│   │   ├── ContributionGraph.tsx # GitHub-style contribution grid
│   │   ├── Skills.tsx      # Tech stack with icons
│   │   ├── Projects.tsx    # Featured work showcase
│   │   ├── Contact.tsx     # Form + social links
│   │   ├── Footer.tsx      # Minimal footer
│   │   ├── Navbar.tsx      # Sticky navigation
│   │   ├── Terminal.tsx    # Interactive CLI component
│   │   ├── MagicBento.jsx  # Complex grid layout
│   │   ├── ClickSpark.tsx  # Click effect wrapper
│   │   ├── Particles.jsx   # Background particles
│   │   └── ScrollRestoration.tsx
│   ├── achievements/       # Achievement data API
│   ├── api/                # Next.js API routes
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Tailwind + custom CSS
├── lib/
│   ├── achievements.ts     # Achievement data schema
│   ├── api.ts              # API utilities
│   └── utils.ts            # Helper functions
├── components/
│   ├── ScrollToTop.tsx
│   └── Hyperspeed/         # WebGL background component
├── public/                 # Static assets
│   ├── icons/              # Tech stack SVGs
│   ├── images/             # Project screenshots
│   ├── music/              # Audio assets
│   └── fonts/              # Custom typography
├── types/                  # TypeScript definitions
├── tailwind.config.js      # Custom theme (neon colors, animations)
├── next.config.ts          # Next.js + static export config
└── tsconfig.json           # TypeScript config
```

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/harshwardhan1507/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Edit .env.local with your GitHub token (optional, for higher API limits)
# GITHUB_TOKEN=your_personal_access_token

# Start development server
npm run dev

# Open http://localhost:3000
```

### Environment Variables

Create `.env.local`:

```env
# Optional: GitHub Personal Access Token for increased API rate limits
# Without this, you'll get 60 requests/hour (usually sufficient)
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx

# Optional: Analytics (Vercel, Google Analytics, etc.)
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## Roadmap

- [x] Core portfolio structure with Next.js 16
- [x] WebGL hyperspeed background with OGL
- [x] Live GitHub stats integration (Chart.js)
- [x] Interactive terminal component
- [x] Framer Motion page transitions
- [x] GSAP scroll-triggered animations
- [x] Responsive bento-style project grid
- [x] Click spark particle effects
- [x] Dark theme with neon accent palette
- [ ] Blog integration with MDX
- [ ] View counter / visitor analytics
- [ ] PWA support with offline caching
- [ ] Multi-language support (i18n)
- [ ] 3D project showcase with Three.js
- [ ] Email API integration for contact form

---

## Screenshots

```markdown
![Hero Section](/public/screenshots/hero.png)
*WebGL particle background with animated intro*

![GitHub Stats](/public/screenshots/github-stats.png)
*Live contribution graph and repository metrics*

![Projects Grid](/public/screenshots/projects.png)
*Bento-style responsive project showcase*

![Terminal](/public/screenshots/terminal.png)
*Interactive CLI component with typewriter effects*

![Mobile View](/public/screenshots/mobile.png)
*Fully responsive dark theme design*
```

---

## Author

**Harsh Wardhan**

- GitHub: [@harshwardhan1507](https://github.com/harshwardhan1507)
- LinkedIn: [harsh-wardhan-singh-cse](https://linkedin.com/in/harsh-wardhan-singh-cse)
- Portfolio: [harshwardhanportfolio.vercel.app](https://harshwardhanportfolio.vercel.app/)
- Email: harshwardhansingh1507@gmail.com

> B.Tech CS student at SRM University, Haryana. I ship production-grade web apps, win hackathons, and obsess over performance optimization. Currently building [Vertex](https://github.com/harshwardhan1507/vertex) — a campus event platform serving 2000+ students.

---

## License

MIT License — see [LICENSE](LICENSE) for details.

<div align="center">
  <sub>Built with 💚 by Harsh Wardhan · © 2026</sub>
</div>
