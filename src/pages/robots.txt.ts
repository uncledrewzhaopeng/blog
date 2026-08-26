import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(
    "sitemap-index.xml",
    new URL(import.meta.env.BASE_URL, site)
  );
  return new Response(getRobotsTxt(sitemapURL));
};
