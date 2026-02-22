import type { Route } from "./+types/experience";
import experiencesData from "../../public/assets/experiences.json";

export async function loader() {
    return { experiences: [experiencesData] };
}

export default function Experience({ loaderData }: Route.ComponentProps) {
    const { experiences } = loaderData;

    return (
        <div className="expContent p-8 max-w-4xl mx-auto">
            <h5 className="text-xl font-bold mb-4">Experiences</h5>
            <p className="mb-6 leading-relaxed">
                Front-end Developer here, rocking React, Angular, and Next.js. Started with
                a cool summer internship, landed at my current spot, and went from intern to
                Frontend Developer. No fancy personal website yet, just a coding enthusiast
                with a good sense of humor!
            </p>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-700">
                            <th className="py-3 px-4 font-bold">Company</th>
                            <th className="py-3 px-4 font-bold">Position</th>
                            <th className="py-3 px-4 font-bold">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {experiences[0].experiences.map((xp: any, index: number) => (
                            <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                                <td className="py-3 px-4">{xp.name}</td>
                                <td className="py-3 px-4">{xp.position}</td>
                                <td className="py-3 px-4">{xp.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
