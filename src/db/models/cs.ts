import type { Cs as CsType, Em } from "@/prisma/client";

export interface Cs extends CsType {
  em?: Em;
}
