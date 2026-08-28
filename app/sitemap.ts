import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://paolo-espion-portfolio.example", lastModified: new Date() },
    { url: "https://paolo-espion-portfolio.example/projects/mynaga-crud-webapp", lastModified: new Date() },
    { url: "https://paolo-espion-portfolio.example/projects/ai-phishing-email-detector", lastModified: new Date() },
    { url: "https://paolo-espion-portfolio.example/projects/data-analytics-dashboard", lastModified: new Date() },
  ];
}
