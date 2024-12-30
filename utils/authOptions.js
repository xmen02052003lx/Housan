import GoogleProvider from "next-auth/providers/google"
import connectDB from "@/config/database"
import User from "@/models/User"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      } // this set so when we log in it not automatically select the last logged in Google account (because we want to test between 2 account)
    })
  ],
  callbacks: {
    // When we go the Google page, these functions will gonna run:
    // Invoked on successful sign in
    async signIn({ profile }) {
      // 1. connect to the db
      await connectDB()
      // 2.check if user exists
      const userExists = await User.findOne({ email: profile.email })
      // 3. if not, create user
      if (!userExists) {
        // truncate username if too long
        const username = profile.name.slice(0, 20)

        await User.create({
          email: profile.email,
          username,
          image: profile.picture
        })
      }
      // 4. return true to allow sign in
      return true
    },
    // Session callback function that modifies the session object
    async session({ session }) {
      // 1. get user from db
      const user = await User.findOne({ email: session.user.email })
      // 2. assign user id to the session
      session.user.id = user._id.toString()
      // 3. return session
      return session
    }
  }
}
