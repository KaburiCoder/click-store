import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";
import { getAccountByUserId } from "@/db/services/account.service";
import { loginValidate } from "@/lib/validates/auth.validate";
import { convertAccountToUser } from "./auth.session";

export const authOptions = {
  ...authConfig,
  providers: [
    Credentials({
      // name: "credentials",
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ id: z.string(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { id, password } = parsedCredentials.data;

          // 계정 존재 여부 체크
          const account = await getAccountByUserId(id);

          // 계정 로그인 체크
          await loginValidate(id, password, account?.password);
          if (!account) return null;

          // 중요 정보들 세션에 저장
          const user = await convertAccountToUser(account);

          if (!user) return null;
          return {
            id: JSON.stringify(user),
            name: user.name,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 2, // 2일
  },

  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth(authOptions);
