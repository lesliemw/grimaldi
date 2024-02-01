import { connectDb } from "@dbConfig/db";
import User from "@models/UserModel";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const auth = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const {
          email,
          password,
          fname,
          lname,
          streetAddress,
          city,
          county,
          country,
          postalCode,
        } = credentials;
        try {
          await connectDb();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordMatch = bcrypt.compareSync(password, user.password);
          if (!passwordMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.log("Error:", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/user/login",
  },
});

export { auth as GET, auth as POST };
