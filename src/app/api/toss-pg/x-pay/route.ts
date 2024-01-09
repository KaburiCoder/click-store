import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log("get - ", await req.json());

    return NextResponse.json({ message: "success" });
  } catch (error: any) {
    console.log("get - ", error.message);
    return NextResponse.json({ errorMessage: error.message });
  }
}

export async function POST(req: NextRequest) {
  try {
    console.log("post(text) - ", await req.text());
  } catch (error: any) {
    console.log("post(text) - ", error.message);
    return NextResponse.json({ errorMessage: error.message });
  }
  try {
    console.log("post(json) - ", await req.json());
  } catch (error: any) {
    console.log("post(json) - ", error.message);
    return NextResponse.json({ errorMessage: error.message });
  }

  return NextResponse.json({ message: "success" });
}
