/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],

  serverModuleFormat: "esm",

  serverPlatform: "neutral",

  // Important for Vercel
  serverBuildPath: "build/index.js",

  // Only for Vercel adapter
  server: "./vercel-server.js",
};
