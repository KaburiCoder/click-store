"use server";
import { User } from "@/lib/interfaces/user";
import { cookies } from "next/headers";

export async function setUser(user: User) {
  cookies().set("user", JSON.stringify(user), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 2,
  });
}

export async function clearUser() {
  cookies().delete("user");
}

export async function getJisa() {
  return (await getUser())?.jisa ?? "001";
}

export async function getUser(): Promise<User | undefined> {
  const reqCookie = cookies().get("user");

  if (reqCookie) {
    return JSON.parse(reqCookie.value);
  }
}

export async function isAuthenticated() {
  return !!cookies().get("user");
}
