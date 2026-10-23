import type { Route } from "./+types/projects";
import ProjectCard from "../components/ProjectCard";

export async function clientLoader() {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "Projects — Mustafa Ali Eren" },
  { name: "description", content: "Personal projects built by Mustafa Ali Eren." },
];

const projects = [
  {
    name: "Akşama Ne Var",
    stack: "Next.js · Supabase",
    status: "WIP",
    url: "https://aksama-ne-var.vercel.app/",
    description:
      "A dinner-decision app for couples and households. Swipe to match on meals together, turn the matches into a weekly plan, and share one shopping list, so \"what's for dinner?\" stops being a nightly debate",
    note: "Demo is live. A fully working version is in progress",
  },
  {
    name: "WhatToWatch",
    stack: "Next.js · TMDB API",
    status: "live",
    url: "https://whattowatchxinny.vercel.app/",
    description:
      "Find something to watch tonight. Search movies, series and people, and see where each title streams in your region. For movie night, start a session, share the code, and everyone swipes the same stack; the app shows what you all liked. No accounts, no tracking",
    note: "Redesigned overlay and a reworked concept. Coming soon as an app",
    credit: "This product uses the TMDB API but is not endorsed or certified by TMDB.",
  },
  {
    name: "Project Lumen",
    stack: "React · Three.js · GSAP",
    status: "live",
    url: "https://projectlumenportfolio.netlify.app/",
    description:
      "Built a cinematic, scroll-driven portfolio for a fictional creative studio. A WebGL particle system (Three.js) powers the hero — 5,000+ particles animate on idle and respond to scroll progress in real time, with full mobile support. GSAP ScrollTrigger drives the project reveal sequence, synced frame-by-frame to scroll position. Content is fetched from a headless CMS REST API (Payload-style) with a static fallback that keeps the experience intact when the API is unavailable",
  },
  {
    name: "D&D Character Creator",
    stack: "React · TS",
    status: "live",
    url: "https://xinnysdndcharacter.netlify.app/",
    description:
      "Bilingual (TR/EN) character builder for D&D 5e and 5.5e — models the full character sheet (ability scores, class and race modifiers, spell slots, proficiencies) entirely client-side with no backend. Characters persist in browser storage with export/import for backup. Built to turn a rule-dense, edge-case-heavy domain into a clean, fast character creation flow",
  },
  {
    name: "Job Board Aggregator",
    stack: "Python · Playwright · n8n",
    status: "WIP",
    url: undefined,
    description:
      "Automated job-scraping pipeline pulling listings from 4 sources — RemoteOK, Arbeitnow, Himalayas, and Remotive. Started as an async Python + Playwright scraper with a Supabase backend and Next.js frontend, then rebuilt as a fully automated n8n workflow: filters by role and keyword, deduplicates against previous runs, and pushes live matches straight to Telegram — effectively automating my own job search",
  },
  {
    name: "Project Gungnir",
    stack: "React",
    status: "WIP",
    url: "https://gungnir.netlify.app/",
    description:
      "Mobile idle game with a deep passive skill tree and near-infinite build combinations — independently designing all game systems, UI, and progression loops",
  },
];

export default function Projects() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto space-y-4">

      {/* Things I Build */}
      <div className="doc-surface rounded-sm p-8">
        <h2 className="section-label">Things I Build</h2>
        <div className="space-y-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
