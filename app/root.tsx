import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const meta: Route.MetaFunction = () => [
  { title: "Mustafa Ali Eren — Frontend Developer" },
  {
    name: "description",
    content:
      "Personal site of Mustafa Ali Eren, a Frontend Developer with 3+ years of production experience in React and TypeScript.",
  },
  { name: "author", content: "Mustafa Ali Eren" },
  { name: "keywords", content: "frontend developer, react, typescript, tailwind, storybook, next.js" },
  { property: "og:title", content: "Mustafa Ali Eren — Frontend Developer" },
  {
    property: "og:description",
    content:
      "Frontend Developer with 3+ years shipping React + TypeScript across fintech products at Papara. Available for remote or Istanbul-based roles.",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://xinacris.github.io" },
  { name: "twitter:card", content: "summary" },
  { name: "twitter:creator", content: "@zehirlibrowni" },
  { name: "twitter:title", content: "Mustafa Ali Eren — Frontend Developer" },
  {
    name: "twitter:description",
    content: "Frontend Developer with 3+ years of production experience in React + TypeScript.",
  },
];

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap",
  },
];

import Header from "./components/Header";
import Footer from "./components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{message}</h1>
      <p className="text-gray-600 mb-4">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto bg-gray-100 text-sm">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
