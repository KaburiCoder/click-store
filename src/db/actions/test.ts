"use server";
import { revalidateTag } from "next/cache";

export async function testAction(_: any, formData: FormData) {
  "use server";

  return "kkk";
}
