/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],

  serverBuildPath: "build/server/index.js", // <— IMPORTANT
  serverModuleFormat: "esm",

  server: "./server.js",
};
