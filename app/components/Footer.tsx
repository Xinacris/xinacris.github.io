import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#27282c] border-t border-[#3c3d41] px-6 py-4 flex flex-wrap justify-between items-center gap-3">
      <span className="text-xs text-[#888] tracking-wide">
        © {new Date().getFullYear()} Mustafa Ali Eren &nbsp;·&nbsp;{" "}
        <a
          href="mailto:mustafalieren@proton.me"
          className="hover:text-[#e8e5de] transition-colors"
        >
          mustafalieren@proton.me
        </a>
      </span>

      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/mustafa-ali-eren-1b3674167/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888] hover:text-[#e8e5de] transition-colors"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://twitter.com/zehirlibrowni"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888] hover:text-[#e8e5de] transition-colors"
          aria-label="X / Twitter"
        >
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
        <a
          href="https://github.com/Xinacris"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888] hover:text-[#e8e5de] transition-colors"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </footer>
  );
}
