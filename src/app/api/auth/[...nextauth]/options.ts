import db from "@/db/db";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
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
};
