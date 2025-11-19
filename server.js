import { createRequestHandler } from "@remix-run/node"; // Adjust the import based on your Remix version
import * as build from "./build/index.js"; // Instead of build/server/index.js

export default function handler(req, res) {
  return createRequestHandler({
    build,
    getLoadContext() {
      // Provide your load context (optional)
      return {};
    },
  })(req, res);
}
