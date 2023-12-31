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
      ]);

      const anyPass = isPathnameMatching(nextUrl.pathname, [
        "/opengraph-image",
        "/receipt",
        "/delivery",
      ]);

      if (anyPass) {
        return true;
      }

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
    jwt({ token, trigger, session }) {
      if (trigger === "update" && session?.email) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        token.email = session.email;
      }
      return token;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
