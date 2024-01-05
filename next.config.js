/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [process.env.NEXT_PUBLIC_CLICK_DOMAIN],
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

// if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
//   nextConfig.compiler = {
//     removeConsole: {
//       exclude: ["error", "warn", "log"],
//     },
//   };
// }

module.exports = nextConfig;
