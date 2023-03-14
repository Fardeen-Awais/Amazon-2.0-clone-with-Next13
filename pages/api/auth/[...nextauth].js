import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = { // #0007
  
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackUrl: "https://localhost:3000/api/auth/callback/google",
    })
  ]
}

export default NextAuth(authOptions)