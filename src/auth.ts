import NextAuth from "next-auth"
import { ZodError } from "zod"
import { singInSchema } from "@/app/lib/zod"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/app/lib/db"
import Resend from "next-auth/providers/resend"
import bycript from "bcrypt"
import { getUserFromDb } from "@/app/lib/db"


 
const providers: Provider[] = [
  Credentials({
    credentials: { password: { label: "Password", type: "password" } },
    authorize(c) {
      if (c.password !== "password") return null
      return {
        id: "test",
        name: "Test User",
        email: "test@example.com",
      }
    },
  }),
  GitHub,
]
 
export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/homepage",
    signOut: "/login",
  },
})