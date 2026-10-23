interface ProjectCardProps {
  name: string;
  stack: string;
  status: string;
  url?: string;
  description: string;
  note?: string;
  credit?: string;
}

export default function ProjectCard({ name, stack, status, url, description, note, credit }: ProjectCardProps) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-2 mb-1">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-[#e8e5de] hover:underline"
          >
            {name}
          </a>
        ) : (
          <span className="text-sm font-bold text-[#e8e5de]">{name}</span>
        )}
        <span className="text-xs text-[#888]">{stack}</span>
        <span
          className={`text-xs border border-[#3c3d41] px-1.5 ${
            status === "live" ? "text-[#8fbf8f]" : "text-[#888]"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="bullet-item">
        <span className="text-sm text-[#e8e5de]">{description}</span>
      </div>

      {note && <p className="text-xs text-[#888]">{note}</p>}
      {credit && <p className="text-[0.65rem] text-[#888] mt-1">{credit}</p>}
    </div>
  );
}
