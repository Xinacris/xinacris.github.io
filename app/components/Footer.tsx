import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-between align-items-center py-3 my-4 border-t border-gray-700">
            <div className="flex items-center mx-auto text-center px-4">
                <span className="mb-3 md:mb-0 text-white">
                    © {new Date().getFullYear()} Mustafa Ali Eren <br />
                    <a href="mailto:mustafalieren@proton.me" className="hover:underline">
                        mustafalieren@proton.me
                    </a>
                </span>
            </div>
            <div className="flex items-center mx-auto space-x-4 px-4">
                <a
                    href="https://www.linkedin.com/in/mustafa-ali-eren-1b3674167/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                    href="https://twitter.com/zehirlibrowni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                    href="https://github.com/Xinacris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </footer>
    );
}
