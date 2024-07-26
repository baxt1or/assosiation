import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import db from "@/db/db";
import { getUserByEmail } from "@/db/queries";
import bcrypt from "bcryptjs";
import { LoginSchema } from "../validation";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  trustHost: true,
  pages: {
    signIn: "/auth/sign-in",
    signOut: "/auth/sign-in",
    error: "/auth/error",
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validFileds = LoginSchema.safeParse(credentials);

        if (validFileds.success) {
          const { email, password } = validFileds.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }
          const isMatched = await bcrypt.compare(password, user.password);

          if (isMatched) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
