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

The project uses **GitHub Actions** to automatically build and deploy to the `gh-pages` branch on every push to `master`.

### GitHub Pages Setup Instructions:

1.  **Push to Master:** Ensure your latest code is on the `master` branch.
2.  **Wait for Action:** Go to the **Actions** tab in your repository and wait for the "Deploy to GitHub Pages" workflow to complete.
3.  **Configure Settings:**
    -   Go to **Settings** -> **Pages**.
    -   Under **Build and deployment** > **Branch**, change the branch from `master` to **`gh-pages`**.
    -   Click **Save**.
4.  **Visit Site:** Your site will be live at `https://xinacris.github.io` within a minute.

> [!TIP]
> Since this is a Single Page Application (SPA), the deployment automatically includes a `404.html` fallback to support direct navigation to sub-pages like `/about`.

---

Built with ❤️ by Mustafa Ali Eren.
