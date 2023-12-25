import { getBunryuObjectList, getProducts } from "@/db/queries/main-page.query";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log(await request.json());

  // const searchParams = request.nextUrl.searchParams;

  // const query = searchParams.get("test");
  const k = await request.json();

  const product = await getBunryuObjectList();
  return Response.json(product);
}

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("test");
  console.log(await request.json());

  const product = await getBunryuObjectList();
  return Response.json(product);
}
