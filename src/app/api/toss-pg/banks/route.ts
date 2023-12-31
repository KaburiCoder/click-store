import { bankData } from "@/lib/datas/bank-data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(bankData);
}
