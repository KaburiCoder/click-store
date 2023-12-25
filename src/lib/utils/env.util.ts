"use client";
// function getEnvironment(): "test" | "production" | "development" {
//   const currentDomain = window.location.hostname;

//   if (
//     currentDomain.startsWith("test") ||
//     currentDomain.startsWith("www.test")
//   ) {
//     return "test";
//   } else {
//     return "production";
//   }
// }

// export const environment = getEnvironment();
// export const isTestEnv = environment === "test";
// export const TOSSPAYMENTS_CLIENT_KEY =
//   environment === "production"
//     ? process.env.TOSSPAYMENTS_CLIENT_KEY
//     : process.env.TOSSPAYMENTS_TEST_CLIENT_KEY;

export const TOSSPAYMENTS_CLIENT_KEY =
  process.env.NEXT_PUBLIC_TOSSPAYMENTS_CLIENT_KEY;
