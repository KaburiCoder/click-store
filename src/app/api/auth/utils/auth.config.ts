import { paths } from "@/paths";
import type { NextAuthConfig } from "next-auth";
import { isPathnameMatching } from "./is-pathname-matching";
import { User } from "@/lib/interfaces/user";

export const authConfig = {
  trustHost: true,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pass = isPathnameMatching(nextUrl.pathname, [
        "/login",
        "/signup",
        "/find-password",
        "/change-password",
        "/opengraph-image",
      ]);
      // const isOnLoginPage = nextUrl.pathname.startsWith("/login");

      if (isLoggedIn) {
        const user: User = JSON.parse(auth.user!.id);
        const isAdminPage = isPathnameMatching(nextUrl.pathname, ["/admin"]);

        if (pass || (!user.admin && isAdminPage)) {
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
