import type { Route } from "./+types/experience";

export async function clientLoader() {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "Experience — Mustafa Ali Eren" },
  { name: "description", content: "Work history and personal projects of Mustafa Ali Eren." },
];

const workExperience = [
  {
    company: "Papara",
    role: "Software Engineer (Frontend)",
    period: "2023/08 — 2025/07",
    bullets: [
      "Contributed to the Papara UI component library (WebUI) in Storybook — building and refining reusable React + TypeScript components consumed across the Web product",
      "Reduced design-to-code handoff friction by enforcing consistent component APIs in TypeScript, making shared primitives predictable and reusable for the wider team",
      "Drove adoption of strict TypeScript practices (zero any types) across the component library, eliminating a class of runtime bugs before they reached production",
    ],
  },
  {
    company: "Papara",
    role: "Software Developer Intern (Frontend)",
    period: "2022/11 — 2023/07",
    bullets: [
      "Transitioned from intern to full engineer within 8 months by delivering production-ready components integrated into live Papara products",
      "Contributed React components to the WebUI library during internship — work promoted to the production codebase and still in use post-conversion to full-time role",
    ],
  },
  {
    company: "Migros Ticaret AŞ",
    role: "Frontend Developer Intern",
    period: "2022/07 — 2022/08",
    bullets: [
      "Delivered a working Angular feature module within a 2-month internship at one of Turkey's largest retail chains, demonstrating fast framework acquisition under production constraints",
    ],
  },
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
    name: "Idle RPG",
    stack: "React Native",
    status: "WIP",
    url: undefined,
    description:
      "Mobile idle game with a deep passive skill tree and near-infinite build combinations — independently designing all game systems, UI, and progression loops",
  },
];

const references = [
  { name: "Onur Yilmaz", title: "Lead Web Engineer, Paribu" },
  { name: "Caner Aa", title: "Senior SWE Frontend, Insider One" },
];

export default function Experience() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto space-y-4">

      {/* Working Experience */}
      <div className="doc-surface rounded-sm p-8">
        <h2 className="section-label">Working Experience</h2>
        <div className="space-y-8">
          {workExperience.map((job, i) => (
            <div key={i}>
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                <div>
                  <span className="text-sm font-bold text-[#e8e5de]">{job.company}</span>
                  <span className="text-sm text-[#888]"> &nbsp;{job.role}</span>
                </div>
                <span className="text-xs text-[#888] whitespace-nowrap">{job.period}</span>
              </div>
              <ul className="space-y-1">
                {job.bullets.map((b, j) => (
                  <li key={j} className="bullet-item">
                    <span className="text-sm text-[#e8e5de]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Projects */}
      <div className="doc-surface rounded-sm p-8">
        <h2 className="section-label">Personal Projects</h2>
        <div className="space-y-6">
          {projects.map((p, i) => (
            <div key={i}>
              <div className="flex items-baseline gap-2 mb-1">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#e8e5de] hover:underline"
                  >
                    {p.name}
                  </a>
                ) : (
                  <span className="text-sm font-bold text-[#e8e5de]">{p.name}</span>
                )}
                <span className="text-xs text-[#888]">{p.stack}</span>
                <span className="text-xs border border-[#3c3d41] px-1.5 text-[#888]">{p.status}</span>
              </div>
              <div className="bullet-item">
                <span className="text-sm text-[#e8e5de]">{p.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* References */}
      <div className="doc-surface rounded-sm p-8">
        <h2 className="section-label">References</h2>
        <ul className="space-y-1">
          {references.map((r, i) => (
            <li key={i} className="bullet-item">
              <span className="text-sm text-[#e8e5de]">
                <span className="font-semibold">{r.name}</span>
                {" — "}
                <span className="text-[#888]">{r.title}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
