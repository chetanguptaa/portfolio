import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        password: { label: "Password", type: "password" },
        username: {
          label: "Username",
          type: "text",
        },
      },
      async authorize(credentials) {
        // check to see if username and password is there
        if (!credentials?.username || !credentials.password) {
          throw new Error("Please enter an email and password");
        }
        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        });
        console.log(user);
        // if no user was found
        if (!user || !user?.password) {
          throw new Error("No user found");
        }
        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        // if password does not match
        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }
        return user as any;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
