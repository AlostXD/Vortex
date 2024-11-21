import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true, // Logs de depuração ativados
})

