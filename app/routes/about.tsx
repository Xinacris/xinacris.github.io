import type { Route } from "./+types/about";

export async function clientLoader() {
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: "About — Mustafa Ali Eren" },
  { name: "description", content: "Skills, education, and background of Mustafa Ali Eren." },
];

const technicalSkills = [
  "React", "Angular", "JavaScript", "TypeScript",
  "Tailwind CSS", "Git", "Storybook", "Next.js",
  "React Native", "Python", "Supabase",
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Balikesir University",
    period: "Sept 2017 — July 2023",
  },
  {
    degree: "Erasmus Exchange Program",
    school: "Politechnika Czestochowska, Poland",
    period: "Oct 2021 — Feb 2022",
  },
];

const languages = [
  { lang: "English", level: "Advanced" },
  { lang: "Turkish", level: "Native" },
];

const availability = [
  "Available immediately",
  "Remote-first",
  "Open to Istanbul relocation",
];

export default function About() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto space-y-4">

      {/* Bio */}
      <div className="doc-surface rounded-sm p-8">
        <h2 className="section-label">About</h2>
        <p className="text-sm text-[#e8e5de] leading-relaxed mb-3">
          I studied at Balıkesir University and participated in the Erasmus programme,
          spending one semester at Politechnika Czestochowska in Czestochowa, Poland.
        </p>
        <p className="text-sm text-[#e8e5de] leading-relaxed">
          I also like cooking a lot — if you have an interesting recipe, send it my way.
          All my friends are in love with my food; their words, not mine.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="doc-surface rounded-sm p-8">
        <h2 className="section-label">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {technicalSkills.map((skill) => (
            <span
              key={skill}
              className="text-xs border border-[#3c3d41] px-2 py-0.5 text-[#e8e5de] tracking-wide"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="doc-surface rounded-sm p-8">
        <h2 className="section-label">Education</h2>
        <ul className="space-y-3">
          {education.map((edu, i) => (
            <li key={i} className="bullet-item">
              <span className="text-sm text-[#e8e5de]">
                <span className="font-semibold">{edu.degree}</span>
                {", "}
                {edu.school}
                <span className="text-[#888]"> &nbsp;{edu.period}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Languages + Availability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="doc-surface rounded-sm p-8">
          <h2 className="section-label">Languages</h2>
          <ul className="space-y-1">
            {languages.map((l, i) => (
              <li key={i} className="bullet-item">
                <span className="text-sm text-[#e8e5de]">
                  {l.lang}{" "}
                  <span className="text-[#888]">({l.level})</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="doc-surface rounded-sm p-8">
          <h2 className="section-label">Availability</h2>
          <ul className="space-y-1">
            {availability.map((a, i) => (
              <li key={i} className="bullet-item">
                <span className="text-sm text-[#e8e5de]">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
