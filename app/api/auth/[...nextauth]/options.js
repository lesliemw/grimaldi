import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { connectDb } from "@dbConfig/db";
import User from "@models/UserModel";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        let userRole = "Google User";
        if (profile?.email == "l.marie1598@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDb();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordMatch = bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            return null;
          } else {
            return user;
          }
        } catch (error) {
          console.log("Error:", error);
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
