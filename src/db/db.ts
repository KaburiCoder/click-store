import { PrismaClient } from "@/prisma/client";
const dateTimeOffsetKey = Symbol("key");
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}
const db = globalThis.prisma ?? prismaClientSingleton();

// function fixPrismaReadDate(d: Date): Date {
//   return new Date(
//     `${d.getUTCFullYear()}-${(d.getUTCMonth() + 1)
//       .toString()
//       .padStart(2, "0")}-${d.getUTCDate().toString().padStart(2, "0")}T${d
//         .getUTCHours()
//         .toString()
//         .padStart(2, "0")}:${d.getUTCMinutes().toString().padStart(2, "0")}:${d
//           .getUTCSeconds()
//           .toString()
//           .padStart(2, "0")}.${d
//             .getUTCMilliseconds()
//             .toString()
//             .padStart(2, "0")}+08:00`,
//   );
// }

// function fixPrismaWriteDate(d: Date): Date {
//   return new Date(
//     `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d
//       .getDate()
//       .toString()
//       .padStart(2, "0")}T${d.getHours().toString().padStart(2, "0")}:${d
//         .getMinutes()
//         .toString()
//         .padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}.${d
//           .getMilliseconds()
//           .toString()
//           .padStart(2, "0")}Z`,
//   ); // use our local date and time, but add 'Z' time zone so it will be assumed to be UTC
// }

// db.$use(async (params, next) => {
//   const setOffsetTime = (obj: any, fn: any) => {
//     if (obj === undefined || obj === null || obj[obj] || !isNaN(obj)) return;
//     for (const key in obj) {
//       if (obj[key] instanceof Date) {
//         obj[key] = fn(obj[key]);
//       } else if (typeof obj[key] === "object") {
//         setOffsetTime(obj[key], fn);
//       }
//     }
//     obj[dateTimeOffsetKey] = true;
//   };

//   setOffsetTime(params.args, fixPrismaWriteDate);
//   const res = await next(params);
//   setOffsetTime(res, fixPrismaReadDate);
//   return res;
// });

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export default db;
