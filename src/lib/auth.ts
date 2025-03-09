import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ account, token }) {
      if (account) {
        token.jwt = account.access_token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.jwt = token.jwt
      return session;
    },
  },
});
