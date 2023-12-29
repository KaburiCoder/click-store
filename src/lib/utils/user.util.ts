"use server";
import { auth } from "@/app/api/auth/utils/auth";
import { User } from "@/lib/interfaces/user";
import { convertSessionToUser } from "./convert.util";

export async function getJisa() {
  return (await getUser())?.jisa ?? "001";
}

export async function getUser(): Promise<User | undefined> {
  const session = await auth();
  return convertSessionToUser(session);
}

export async function isAuthenticated() {
  const session = await auth();
  return !!session?.user;
}
