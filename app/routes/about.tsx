import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import type { Route } from "./+types/about";
import skillsData from "../../public/assets/skills.json";

export async function loader() {
    return { skillPoints: [skillsData] };
}

export default function About({ loaderData }: Route.ComponentProps) {
    const { skillPoints } = loaderData;

    const renderSkillPoints = (point: string) => {
        const total = 5;
        const filled = parseInt(point, 10);
        const icons = [];

        for (let i = 0; i < total; i++) {
            if (i < filled) {
                icons.push(<FontAwesomeIcon key={i} icon={faCircleSolid} className="mx-0.5 text-lg" />);
            } else {
                icons.push(<FontAwesomeIcon key={i} icon={faCircleRegular} className="mx-0.5 text-lg" />);
            }
        }
        return <div className="flex">{icons}</div>;
    };

    return (
        <div className="aboutContent p-8 max-w-4xl mx-auto">
            <h5 className="text-xl font-bold mb-4">Hi! I'm Mustafa Ali, Welcome to my resume site.</h5>
            <p className="mb-6 leading-relaxed">
                I studied at Balıkesir University, I participated in the Erasmus programme and went to Czestochowa, Poland for one semester. <br />
                I also like cooking a lot, if you have an interesting recipe, send me it so I could try it. All my friends are in love with my food, their words, not mine.
            </p>

            <h5 className="text-xl font-bold mb-4">Skills</h5>
            <table className="w-full mb-8">
                <tbody>
                    {skillPoints[0].skills.map((skill: any, index: number) => (
                        <tr key={index} className="border-b border-gray-800 last:border-0">
                            <td className="py-2 pr-4">{skill.name}</td>
                            <td className="py-2 skillPoints">
                                {renderSkillPoints(skill.skillPoint)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p>
                If you want to check out what I did make, you can go to my{" "}
                <a
                    href="https://github.com/xinacris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Github
                </a>.
            </p>
        </div>
    );
}
