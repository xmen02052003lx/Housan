import { authOptions } from "@/utils/authOptions"
import NextAuth from "next-auth/next"

// explain: if we go to api/auth/{anything} (which the sign in button will do), then next-auth will take over and pass in the authOptions that we configured
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
