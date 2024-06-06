import { PrismaClient } from '@prisma/client'

import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {PrismaAdapter} from "@auth/prisma-adapter";

const prisma = new PrismaClient()


export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_SECRET_ID as string,
        })
    ],
    //@ts-ignore
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
