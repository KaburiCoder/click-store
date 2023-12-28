/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
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
