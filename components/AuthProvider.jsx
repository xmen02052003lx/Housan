"use client"
// we make this a seperate component to use it inside the layout.jsx, because in order to use this, it has to be a client component, but the layout.jsx is the server component and we don't want to make layout.jsx the client component, so we'll create a seperate component like this, to make this component a client component and then use it inside layout.jsx
import { SessionProvider } from "next-auth/react"

const AuthProvider = ({ children }) => {
  // because we're gonna wrap stuff, so we'll pass in the children prop
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
