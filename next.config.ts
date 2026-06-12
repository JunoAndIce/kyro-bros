import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Turbopack's persistent dev cache kept restoring stale compiles on this machine,
    // so edits silently stopped appearing until .next was deleted (June 2026).
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
