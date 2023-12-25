import { paths } from "@/paths";
import type { NextAuthConfig } from "next-auth";
import { isPassAuthPages } from "./is-pass-auth-pages";

export const authConfig = {
  trustHost: true,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const pass = isPassAuthPages(nextUrl.pathname, [
        "/login",
        "/signup",
        "/find-password",
        "/change-password",
      ]);
      // const isOnLoginPage = nextUrl.pathname.startsWith("/login");

      if (isLoggedIn) {
        if (pass) {
          return Response.redirect(new URL(paths.root(), nextUrl));
        }
      } else {
        if (!pass) {
          return false;
        }
      }

      return true;
    },
    async session({ session, token }) {
      if (session?.user && token) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
