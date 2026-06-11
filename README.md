<div align="center">

# 🌿 Barnik Chakraborty — Personal Portfolio

A sleek, modern, and fully responsive personal portfolio website showcasing my projects, skills, academic journey, certifications, and more.

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-rebellion--167.github.io-92b4a7?style=for-the-badge&labelColor=0c0f0e)](https://rebellion-167.github.io/Personal-Portfolio/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Rebellion--167-e3d5ca?style=for-the-badge&logo=github&labelColor=0c0f0e)](https://github.com/Rebellion-167/Personal-Portfolio)

</div>

---

## ✨ Highlights

| Feature | Description |
|---|---|
| 🎨 **Glassmorphism Design** | Frosted-glass cards with dynamic spotlight glow that follows your cursor |
| ✍️ **Typewriter Hero** | Animated role-cycling text (*Embedded Engineer → Robotics Enthusiast → Competitive Programmer → ECE Student*) |
| 🌌 **Particle Constellation** | Interactive HTML5 Canvas background with mouse-reactive particles and connection lines |
| 🔍 **Project Filtering** | Category-based filter bar (Embedded & IoT · Robotics · Software & C) with smooth animated transitions |
| 📱 **Fully Responsive** | Pixel-perfect on desktops, tablets, and mobiles — including a custom hamburger overlay menu |
| 🧭 **Magic Navbar Underline** | Sliding underline indicator that tracks the active section on scroll and follows hover |
| 📩 **Working Contact Form** | Real email delivery powered by [Formspree](https://formspree.io/) — no backend needed |
| 🎞️ **Scroll Reveal Animations** | Intersection Observer-driven fade-in-up animations for every section |
| 📄 **Downloadable CV** | One-click resume download directly from the hero section |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Bundler** | [Vite](https://vitejs.dev/) `v8` — lightning-fast HMR & optimized production builds |
| **Markup** | Semantic HTML5 |
| **Styling** | Vanilla CSS with CSS custom properties, glassmorphism, `clamp()` fluid typography |
| **JavaScript** | Vanilla ES Modules (no frameworks) |
| **Fonts** | [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (headings) + [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (body) via Google Fonts |
| **Icons** | [Lucide Icons](https://lucide.dev/) (loaded via CDN) + inline SVGs |
| **Form Backend** | [Formspree](https://formspree.io/) |
| **Hosting** | [GitHub Pages](https://pages.github.com/) |

---

## 📂 Project Structure

```
Personal-Portfolio/
├── index.html                  # Main HTML — all sections defined here
├── package.json                # Vite dev dependency & scripts
├── public/
│   ├── favicon.svg             # Custom SVG favicon
│   ├── icons.svg               # SVG icon sprite
│   └── images/                 # Project showcase images
│       ├── atmossense.png
│       ├── dino-jump.png
│       ├── obstacle-avoiding-car.png
│       └── tic-tac-toe.png
├── src/
│   ├── style.css               # Complete stylesheet (~1000 lines)
│   ├── main.js                 # All interactivity & animations
│   └── assets/                 # Vite-processed assets
├── dist/                       # Production build output
├── Resume_Zyro.pdf             # Downloadable CV
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `v18+`
- npm (bundled with Node.js)

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/Rebellion-167/Personal-Portfolio.git
cd Personal-Portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server (with hot reload)
npm run dev
```

The site will be live at **`http://localhost:5173`** (default Vite port).

### Production Build

```bash
# Build optimized static files into /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 🎨 Design Philosophy

The portfolio follows a **sage-green & warm-linen dark theme** for a calm, premium feel:

| Token | Value | Purpose |
|---|---|---|
| `--bg-color` | `#0c0f0e` | Deep slate-forest background |
| `--primary-color` | `#92b4a7` | Soothing sage green (accents, buttons) |
| `--secondary-color` | `#e3d5ca` | Warm sand/linen (badges, highlights) |
| `--text-primary` | `#f1f5f3` | Crisp sage-white for body text |
| `--text-secondary` | `#90a49c` | Muted sage-gray for supporting text |

All transitions use a smooth `cubic-bezier(0.16, 1, 0.3, 1)` easing for a polished, spring-like feel.

---

## 📑 Sections

| # | Section | What's Inside |
|---|---|---|
| 1 | **Hero** | Typewriter animation, particle canvas, CTA buttons, social links |
| 2 | **About Me** | Executive profile & personal attributes/interests |
| 3 | **Academic Journey** | Interactive vertical timeline (B.Tech → ISC → ICSE) |
| 4 | **Featured Projects** | Filterable project cards with tags, images, and GitHub links |
| 5 | **Technical Expertise** | Hoverable skill pills (Arduino, C/Java, JS, Git, Embedded, etc.) |
| 6 | **Certifications** | Professional certs from freeCodeCamp, Geekster, Scaler, TCS iON |
| 7 | **Professional Involvement** | GDG on Campus HIT & IEEE Student Branch membership |
| 8 | **Contact** | Info card + live Formspree-powered contact form |

---

## 🌐 Deployment

The site is deployed via **GitHub Pages** from the `dist/` folder.

🔗 **Live URL:** [https://rebellion-167.github.io/Personal-Portfolio/](https://rebellion-167.github.io/Personal-Portfolio/)

---

## 🤝 Connect

- **Email:** [barnikchakraborty02@gmail.com](mailto:barnikchakraborty02@gmail.com)
- **LinkedIn:** [linkedin.com/in/barnik-chakraborty](https://linkedin.com/in/barnik-chakraborty)
- **GitHub:** [github.com/Rebellion-167](https://github.com/Rebellion-167)

---

<div align="center">

Made with 💚 by **Barnik Chakraborty**

© 2026 All rights reserved.

</div>
