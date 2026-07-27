interface ProjectCardProps {
  name: string;
  stack: string;
  status: string;
  url?: string;
  description: string;
}

export default function ProjectCard({ name, stack, status, url, description }: ProjectCardProps) {
  return (
    <div>
      <div className="flex items-baseline gap-2 mb-1">
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
    </div>
  );
}
