import dayjs from "dayjs";
import { numericStringRegex } from "./regex";

export const dbNow = (): Date => dayjs().add(9, "hour").toDate();

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
