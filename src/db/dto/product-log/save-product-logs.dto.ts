import { LogType } from "@/db/types/log-type";
import { Product } from "@prisma/client";

export interface SaveProductLogsDto {
  products: Product[];
  logType: LogType;
}
