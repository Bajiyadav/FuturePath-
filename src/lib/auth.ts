/**

* NextAuth (v5 / Auth.js) configuration.
* Uses Prisma adapter, JWT sessions, credentials provider with bcrypt,
* and optional Google OAuth.
  */

import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";
import type { UserRole } from "@/generated/prisma/enums";

declare module "next-auth" {
interface Session {
user: {
id: string;
role: UserRole;
} & DefaultSession["user"];
}

interface User {
role: UserRole;
}
}

export const { handlers, auth, signIn, signOut } = NextAuth({
adapter: PrismaAdapter(prisma) as any,

session: {
strategy: "jwt",
},

pages: {
signIn: "/login",
},

trustHost: true,

providers: [
CredentialsProvider({
name: "credentials",


  credentials: {
    email: {
      label: "Email",
      type: "email",
    },

    password: {
      label: "Password",
      type: "password",
    },
  },

  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) {
      return null;
    }

    const email = credentials.email as string;
    const password = credentials.password as string;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || !user.password) {
      return null;
    }

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
      role: user.role,
    };
  },
}),

...(process.env.GOOGLE_CLIENT_ID &&
process.env.GOOGLE_CLIENT_SECRET
  ? [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ]
  : []),


],

callbacks: {
async jwt({ token, user }) {
if (user) {
token.id = user.id;
token.role = (user as any).role;
}


  return token;
},

async session({ session, token }) {
  if (session.user) {
    (session.user as any).id = token.id;
    (session.user as any).role = token.role;
  }

  return session;
},


},

secret: process.env.NEXTAUTH_SECRET,
});

export async function getCurrentUser() {
const session = await auth();

if (!session?.user) {
return null;
}

return prisma.user.findUnique({
where: {
id: (session.user as any).id,
},
});
}

export async function requireUser() {
const user = await getCurrentUser();

if (!user) {
throw new Error("Unauthorized");
}

return user;
}

export async function requireRole(
role: UserRole | UserRole[]
) {
const user = await requireUser();

const roles = Array.isArray(role)
? role
: [role];

if (!roles.includes(user.role)) {
throw new Error("Forbidden");
}

return user;
}
