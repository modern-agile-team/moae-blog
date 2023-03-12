import { NextApiHandler } from "next";
import NextAuth, { AuthOptions } from "next-auth";
import { encode, decode } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET || "",
    }),
  ],
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    encode: encode,
    decode: decode,
  },
  secret: "secret token",
  // callbacks: {
  //   session: (params: any) => params,
  // },
  pages: {
    signIn: "/signin",
  },
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
