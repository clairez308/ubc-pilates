import type { MetadataRoute } from "next";

const baseUrl = "https://ubcpilatesclub.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/prices", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/calendar", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/events", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/team", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/partnerships", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
