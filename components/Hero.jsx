import Image from "next/image"
import heroImage from "@/assets/images/cutModernBlackHouse.png"
import PropertySearchForm from "./PropertySearchForm"
// import heroImage from "@/assets/blackModernHouse.jpg"

const Hero = () => {
  return (
    <>
      <section className="hero py-20 mb-40 flex pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center hero-text-content justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl ">
              Find Real Estate and Get Your Dream Space
            </h1>
            <p className="my-4 text-xl text-white">
              Buy or rent comfortable and beautiful houses in many place
            </p>
          </div>
          <PropertySearchForm />
        </div>
        <div className="w-1/2 relative hero-house-container ">
          <div className="notched"></div>
          <Image
            src={heroImage}
            className=" absolute "
            id="hero-house"
            alt="hero section image"
          />
        </div>
      </section>
    </>
  )
}

export default Hero
