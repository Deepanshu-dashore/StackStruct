export default function sitemap() {
  const baseUrl = "https://stackstruct.com";

  // Core routes
  const routes = [
    "",
    "/create",
    "/features",
    "/how-it-works",
    "/stack",
    "/support",
    "/templates",
    "/doc",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Doc sub-routes (can be expanded)
  const docRoutes = [
    "/doc/installation",
    "/doc/architecture",
    "/doc/frameworks",
    "/doc/community",
    "/doc/structure",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...docRoutes];
}
