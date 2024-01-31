import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const auth = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = { id: "1", email: "jsmith@example.com" };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    login: "/",
  },
});

export { auth as GET, auth as POST };
