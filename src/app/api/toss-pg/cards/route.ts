import { cardData } from "@/lib/datas/card-data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(cardData);
}
