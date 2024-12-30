/** @type {import('next').NextConfig} */
const nextConfig = {
  // we have to config this in order to display image of remote pattern (google user image/cloudinary image)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**"
      }
    ]
  }
}

export default nextConfig
