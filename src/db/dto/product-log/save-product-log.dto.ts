import { LogType } from "@/db/types/log-type";
import { Product } from "@prisma/client";

export interface SaveProductLogDto {
  product: Product;
  logType: LogType;
}
