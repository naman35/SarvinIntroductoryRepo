import { createRequestHandler } from "@remix-run/node"; // Adjust the import based on your Remix version
import * as build from "@remix-run/dev/server-build";

export default function handler(req, res) {
  return createRequestHandler({
    build,
    getLoadContext() {
      // Provide your load context (optional)
      return {};
    },
  })(req, res);
}
