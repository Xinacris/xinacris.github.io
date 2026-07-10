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
    name: "Where to Watch",
    stack: "React",
    status: "live",
    url: "https://xinnyswheheretoowatch.netlify.app/",
    description:
      "React SPA querying a public streaming availability API — lets users find which platforms carry a title across regions; no backend dependency",
  },
  {
    name: "Project Gungnir",
    stack: "React",
    status: "WIP",
    url: "https://gungnir.netlify.app/",
    description:
      "Mobile idle game with a deep passive skill tree and near-infinite build combinations — independently designing all game systems, UI, and progression loops",
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
    name: "D&D Character Creator",
    stack: "React · TS",
    status: "live",
    url: "https://xinnysdndcharacter.netlify.app/",
    description:
      "Bilingual (TR/EN) character builder for D&D 5e and 5.5e — models the full character sheet (ability scores, class and race modifiers, spell slots, proficiencies) entirely client-side with no backend. Characters persist in browser storage with export/import for backup. Built to turn a rule-dense, edge-case-heavy domain into a clean, fast character creation flow",
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
