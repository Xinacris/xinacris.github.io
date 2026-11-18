import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  // Prerender every static route so each page ships its own HTML (correct
  // <link rel="canonical"> without JS); unknown paths use the SPA fallback.
  prerender: true,
} satisfies Config;
