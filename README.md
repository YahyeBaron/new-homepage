# FDE Academy Website

A clean, modern, and production-ready static website for the **Forward Deployed Engineer (FDE) Academy** homepage.

---

## 📁 Project Structure

```
├── index.html              # Main landing page
├── package.json            # Project configuration & npm scripts
├── pnpm-lock.yaml          # Locked dependency versions
├── server.js               # Zero-dependency Node.js HTTP preview server
├── start.bat               # Windows one-click launcher
├── README.md               # Documentation
│
├── assets/
│   ├── css/                # Stylesheets
│   │   ├── webflow.css     # Main site styles
│   │   ├── lenis.css       # Smooth scrolling styles
│   │   └── swiper-bundle.min.css # Carousel / slider styles
│   │
│   ├── js/                 # Client scripts
│   │   ├── jquery.min.js   # jQuery library
│   │   ├── webflow.js      # Webflow runtime interactions
│   │   ├── gsap.min.js     # GSAP animation library
│   │   ├── ScrollTrigger.min.js # Scroll animations
│   │   ├── lenis.min.js    # Smooth scroll engine
│   │   ├── lazyload.min.js # Lazy-loading media handler
│   │   ├── swiper-bundle.min.js # Swiper sliders
│   │   └── hls.js          # HLS video streaming support
│   │
│   └── images/             # Optimized images, SVGs, and graphics (169 files)
```

---

## 🚀 Running the Website

### Option 1: One-Click Launch (Windows)
Double-click **`start.bat`** to start the local Vite server and automatically open the homepage in your browser.

### Option 2: Using NPM / PNPM
```bash
npm start
# or
pnpm start
```
Runs Vite and opens [http://localhost:5173](http://localhost:5173).

### Option 3: Zero-Dependency Node Server
```bash
npm run serve:node
# or
node server.js
```
Runs at [http://localhost:3000](http://localhost:3000).

### Option 4: Direct File Opening
Double-click **`index.html`** in File Explorer to view the website directly in any browser.
