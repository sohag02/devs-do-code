import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import type { Provider } from "next-auth/providers"
import { db } from "./db"
import { eq } from "drizzle-orm"
import { users } from "./db/schema"

const providers: Provider[] = [Google]
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: providers,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user }) {
      const exists = await db.query.users.findFirst({
        where: eq(users.email, user.email as string),
      })
      if (exists) {
        return true
      } 
      await db.insert(users).values({
        name: user.name,
        email: user.email,
        image: user.image,
      })
      return true
    }
  },
})

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