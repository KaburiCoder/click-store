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
    console.log("post - ", await req.json());

    return NextResponse.json({ message: "success" });
  } catch (error: any) {
    console.log("post - ", error.message);
    return NextResponse.json({ errorMessage: error.message });
  }
}
