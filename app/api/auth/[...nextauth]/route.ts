import { PrismaClient } from '@prisma/client'

import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {authOptions} from "@/app/libs/auth-options";

const prisma = new PrismaClient()




const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
