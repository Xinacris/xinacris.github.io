# Mustafa Ali Eren Portfolio

Personal portfolio website built with modern web technologies, showcasing projects, skills, and experiences. This project was recently migrated from Angular to a high-performance **React Router v7** (Vite-based) Single Page Application.

## 🚀 Tech Stack

- **Framework:** [React Router v7](https://reactrouter.com/) (SPA Mode)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [FontAwesome (React)](https://fontawesome.com/)
- **API:** Dynamic GitHub Profile Data integration
- **Deployment:** GitHub Actions & GitHub Pages

## ✨ Key Features

- **Pop-out Mascot Design:** A unique, overlapping character design on the home page for a premium visual feel.
- **Dynamic Content:** Automatic fetching of GitHub profile statistics and details.
- **Data-Driven Sections:** Skills and Experience sections are driven by clean JSON structures for easy updates.
- **Dark Theme:** Sleek, modern dark aesthetic matching professional developer environments.
- **Responsive Layout:** Fully optimized for mobile, tablet, and desktop viewports.

## 🛠️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Xinacris/xinacris.github.io.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📦 Project Structure

- `app/routes/`: Contains page components (Home, About, Experience).
- `app/components/`: Reusable UI elements like Header and Footer.
- `public/assets/`: Centralized assets including profile images and JSON data files.
- `.github/workflows/`: Automated CI/CD pipeline for GitHub Pages deployment.

## 🚢 Deployment

The same build is served from two places, with no redirect between them:

| Host | How | Updates on push to `master` |
| --- | --- | --- |
| **https://mustafalieren.tr** (canonical) | Coolify on the Oracle server, nginx image from `Dockerfile` + `nginx.conf` | Yes: GitHub webhook → Coolify |
| https://xinacris.github.io | GitHub Pages, `gh-pages` branch built by `.github/workflows/deploy.yml` | Yes: GitHub Actions |

Every page has `<link rel="canonical" href="https://mustafalieren.tr/<path>">` (`app/root.tsx`), so search
engines treat mustafalieren.tr as the primary copy. All routes are prerendered (`react-router.config.ts`),
so each page has its own HTML; unknown paths get `__spa-fallback.html` with a 404 status
(nginx `error_page`, and `404.html` on Pages).

### mustafalieren.tr (Coolify)

- **Panel:** https://panel.mustafalieren.tr (2FA on). Ports 8000/6001/6002 are blocked from outside
  (iptables `DOCKER-USER`); the panel is only reachable through the domain or an SSH tunnel:
  `ssh -N -L 8000:127.0.0.1:8000 -L 6001:127.0.0.1:6001 -L 6002:127.0.0.1:6002 ubuntu@158.180.42.168`
- **App:** project `selfhost` → `production` → `portfolio`, branch `master`, build pack Dockerfile, port 80.
  Domains `https://mustafalieren.tr`, `https://www.mustafalieren.tr` (www → apex, 301). Let's Encrypt via
  the Coolify proxy; HTTP → HTTPS is a 301 and HSTS (1 year) is set for every domain on the server.
- **Redeploy:** automatic on every push to `master` (repo webhook → `https://panel.mustafalieren.tr/webhooks/source/github/events/manual`).
  Manually: panel → portfolio → **Redeploy**, or `POST /api/v1/deploy` with `{"uuid":"4wfjyo5u5ff9osyhsl4ksspv"}`.
- **Readonly labels are OFF for this app.** Coolify's www → apex redirect is a 302 by default; the
  container labels were edited to make it a 301 (`...to-non-www.redirectregex.permanent=true`), and
  "Readonly labels" was turned off so Coolify keeps that edit. Consequence: changing the domains or the
  redirect setting in the panel does **not** update the routing labels anymore. After such a change, edit
  the labels (panel → portfolio → Configuration → General → Container Labels) by hand, or turn readonly labels back on
  (the redirect goes back to 302) and redeploy.
- **Proxy customizations** (`/data/coolify/proxy/`, outside the app): entrypoint HTTP → HTTPS permanent
  redirect and `hsts@file` middleware in `docker-compose.yml`, `dynamic/hsts.yaml`. "Reset proxy
  configuration" in the panel removes them. If you restart the proxy by hand, use the panel's
  **Restart Proxy** (it reconnects the proxy to every resource network); a plain
  `docker compose up --force-recreate` leaves Supabase unreachable until `docker network connect`.

### xinacris.github.io (GitHub Pages)

No custom domain, no `CNAME` file. Settings → Pages → Branch must be **`gh-pages`**. The workflow copies
`__spa-fallback.html` to `404.html` and writes `<route>.html` next to each `<route>/index.html`, so
`/projects` is served directly without a trailing-slash redirect.

---

Built with ❤️ by Mustafa Ali Eren.
