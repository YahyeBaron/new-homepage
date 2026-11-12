# UpBit Academy Website (Next.js)

A clean, modern, and production-ready Next.js application for the **UpBit Academy** homepage.

---

## 📁 Project Structure

```
├── app/
│   ├── layout.jsx              # Root layout with metadata & fonts
│   ├── page.jsx                # Homepage component
│   └── pageHtml.js             # Server-rendered HTML markup
│
├── public/
│   ├── favicon.svg             # Favicon
│   └── assets/
│       ├── css/                # webflow.css, lenis.css
│       ├── js/                 # Webflow, GSAP, Lenis, Swiper, etc.
│       └── images/             # Optimized images, SVGs, and graphics
│
├── next.config.mjs             # Next.js configuration
├── package.json                # Project configuration & npm scripts
├── pnpm-lock.yaml              # Locked dependency versions
├── start.bat                   # Windows one-click launcher
└── README.md                   # Documentation
```

---

## 🚀 Running the Website

### Option 1: One-Click Launch (Windows)
Double-click **`start.bat`** to start the local Next.js dev server and automatically open [http://localhost:3000](http://localhost:3000).

### Option 2: Using NPM / PNPM
```bash
pnpm dev
# or
npm run dev
```
Runs Next.js at [http://localhost:3000](http://localhost:3000).

### Production Build
```bash
pnpm run build
pnpm start
```
