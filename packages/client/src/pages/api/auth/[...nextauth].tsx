import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import { encode, decode } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || "",
    }),
  ],
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    encode: encode,
    decode: decode,
  },
  secret: "secret token",
};
