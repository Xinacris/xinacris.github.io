import type { Route } from "./+types/home";
import ppImage from "../../public/assets/pp.png";

export async function clientLoader() {
  const response = await fetch("https://api.github.com/users/xinacris");
  if (!response.ok) throw new Error("Failed to fetch GitHub data");
  const data = await response.json();
  return { profile: data };
}

export const meta: Route.MetaFunction = () => [
  { title: "Mustafa Ali Eren — Frontend Developer" },
];

const summary = [
  "3 years of production frontend experience shipping React + TypeScript across 3 distinct fintech products at one of Turkey's top digital payment platforms",
  "Contributed to a shared UI component library used across 3 products — building reusable React + TypeScript components that reduced duplication and kept UI consistent at scale",
  "Available immediately; open to remote or Istanbul-based roles",
];

const info = [
  "born in 1999, balikesir, turkey",
  "xinacris.github.io",
  "completed mandatory military service in the Republic of Turkey",
];

export default function Home({ loaderData }: Route.ComponentProps) {
  const { profile } = loaderData;

  return (
    <div className="px-4 py-10 max-w-3xl mx-auto">
      <div className="doc-surface rounded-sm p-8 pt-0">

        {/* Avatar pop-out */}
        <div className="flex justify-center">
          <div className="relative -top-10">
            <img
              src={ppImage}
              alt="Mustafa Ali Eren"
              className="w-28 h-28 rounded-full border-4 border-[#27282c] shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Name + title */}
        <div className="text-center mb-6 -mt-2">
          <h1 className="text-xl font-bold tracking-widest uppercase text-[#e8e5de]">
            {profile.name ?? "Mustafa Ali Eren"}
          </h1>
          <p className="text-xs tracking-[0.2em] uppercase text-[#888] mt-1">
            Frontend Developer &nbsp;·&nbsp; Available
          </p>
        </div>

        {/* Contact row */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-[#888] mb-8 border-y border-[#3c3d41] py-3">
          <a href="mailto:mustafalieren@proton.me" className="hover:text-[#e8e5de] transition-colors">
            mustafalieren@proton.me
          </a>
          <span>+90 537 029 8131</span>
          <a
            href="https://xinacris.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e8e5de] transition-colors"
          >
            xinacris.github.io
          </a>
          <span>nationality: Turkish</span>
        </div>

        {/* Executive Summary */}
        <section className="mb-8">
          <h2 className="section-label">Executive Summary</h2>
          <ul className="space-y-1 text-sm text-[#e8e5de]">
            {summary.map((item, i) => (
              <li key={i} className="bullet-item">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Information */}
        <section>
          <h2 className="section-label">Information</h2>
          <ul className="space-y-1 text-sm text-[#e8e5de]">
            {info.map((item, i) => (
              <li key={i} className="bullet-item">
                <span>{item}</span>
              </li>
            ))}
            <li className="bullet-item">
              <span>
                github:{" "}
                <a
                  href={`https://github.com/${profile.login}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/{profile.login}
                </a>
                {profile.public_repos != null && (
                  <span className="text-[#888]"> &nbsp;({profile.public_repos} public repos)</span>
                )}
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
