import "@/assets/styles/global.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AuthProvider from "@/components/AuthProvider"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { GlobalProvider } from "@/context/GlobalContext"
import "photoswipe/dist/photoswipe.css"

export const metadata = {
  title: "Housan",
  keywords: "rental, real estate, property",
  description: "GET THE BEST OFF MARKET DEALS IN YOUR AREA"
}

const MainLayout = ({ children }) => {
  return (
    // explain: in order to use what next-auth give us, we have to wrap the SessionProvider around our app
    <AuthProvider>
      <GlobalProvider>
        <html>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  )
}

export default MainLayout
