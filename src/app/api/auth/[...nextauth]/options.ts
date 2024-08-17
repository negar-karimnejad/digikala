import db from "@/db/db";
import { User as PrismaUser } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    id: number;
    email: string;
    name: string;
    avatar?: string;
    role?: string;
  }
}

type CustomUser = {
  id: number;
  email: string;
  name: string;
  avatar: string;
  role: string;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            avatar: user.avatar,
            role: user.role,
          } as CustomUser;
        }

        return null;
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
    async jwt({ token, user }) {
      if (user) {
        token.picture = user.avatar;
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
  },
};
