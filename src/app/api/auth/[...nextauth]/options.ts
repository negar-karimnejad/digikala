import db from "@/db/db";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { Session, User as NextAuthUser, Account, Profile } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        const user = await db.user.findUnique({
          where: { email: credentials?.email },
        });
        if (
          user &&
          credentials?.email === user.email &&
          bcrypt.compareSync(credentials?.password, user.password)
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: NextAuthUser | User }) {
      if (user) {
        token.picture = (user as User).avatar;
      }
      return token;
    },
  },
};
