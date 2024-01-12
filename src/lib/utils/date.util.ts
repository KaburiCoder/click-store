import dayjs from "dayjs";
import { numericStringRegex } from "./regex";

export const dbNow = (): Date => dayjs().add(9, "hour").toDate();
export const add9Hours = (date: string | Date | null | undefined) => {
  if (!date) {
    return;
  }
  return dayjs(date).add(9, "h").toDate();
};

export const subtract9Hours = (date: string | Date | null | undefined) => {
  if (!date) {
    return;
  }
  return dayjs(date).subtract(9, "h").toDate();
};

export const subtract9HoursByObject = <T>(obj: T): T => {
  if (typeof obj === "object") {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (value instanceof Date) {
          // 9시간을 빼는 로직
          obj[key] = dayjs(value).subtract(9, "h").toDate() as any;
        } else if (typeof value === "object") {
          // 재귀적으로 객체 내의 다른 객체 검사
          obj[key] = subtract9HoursByObject(value);
        }
      }
    }
  }

  return obj;
};

export function formatYmdToShort(ymd: string) {
  if (ymd.length !== 8 || !numericStringRegex.test(ymd)) {
    return "";
  }
  try {
    return dayjs(ymd, "YYYYMMDD").format("YYYY-MM-DD");
  } catch {
    return "";
  }
}

export function formatDateToStr(
  date: Date | string,
  util?: { min?: boolean; sec?: boolean },
) {
  const formatString = util?.min ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD HH:mm:ss";
  return dayjs(date).format(formatString);
}
