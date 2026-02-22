import type { Route } from "./+types/home";
import ppImage from "../../public/assets/pp.png";

export async function loader() {
  const response = await fetch("https://api.github.com/users/xinacris");
  if (!response.ok) {
    throw new Error("Failed to fetch Github data");
  }
  const data = await response.json();
  return { posts: [data] };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div className="flex flex-col items-center justify-center p-4 pt-16 md:pt-32 pb-16 min-h-[calc(100vh-200px)]">
      {posts.map((post: any) => (
        <div key={post.login} className="w-full flex items-center justify-center">
          <div className="relative bg-white text-black p-8 rounded-[30px] w-full max-w-5xl shadow-2xl flex flex-col md:flex-row items-center border border-gray-100 min-h-[400px]">

            {/* Pop-out Mascot - This needs to be large and overlapping */}
            <div className="w-full md:w-1/3 flex justify-center md:block relative h-48 md:h-auto">
              <img
                src={ppImage}
                alt="Profile Mascot"
                className="absolute top-[-80px] md:top-[-158px] w-64 md:w-80 drop-shadow-2xl z-10 pointer-events-none max-w-none"
              />
            </div>

            {/* Content Container - Padded on desktop to avoid overlap */}
            <div className="flex-1 text-center md:text-left md:pl-16 z-0 mt-20 md:mt-0 font-['Source_Code_Pro',monospace]">
              <div className="text-center w-full">
                <h1 className="text-4xl font-normal mb-2 tracking-tight">
                  {post.name}
                </h1>
                <h2 className="text-2xl font-light mb-1 text-gray-900">
                  Front-end Developer, Gamer
                </h2>
                <h3 className="text-xl font-light text-gray-500 mb-8">
                  {post.location}
                </h3>

                <div className="space-y-1 text-lg font-light mb-8 text-gray-800 leading-relaxed">
                  <p>Welcome to my website.</p>
                  <p>I like to gaming, coding and cooking.</p>
                  <p>
                    My username is <span className="font-normal">{post.login}</span>, you can find me anywhere you like if you want to talk to me.
                  </p>
                </div>

                <hr className="my-8 border-gray-100 w-full" />

                <a
                  href="https://github.com/Xinacris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-lg font-light transition-colors text-black"
                >
                  https://github.com/Xinacris/
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
