import {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";
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