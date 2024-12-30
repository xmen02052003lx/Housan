"use client"
import Image from "next/image"
import { Gallery, Item } from "react-photoswipe-gallery"

const PropertyImages = ({ images }) => {
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          {images.length === 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width="1000"
              height="600"
            >
              {({ ref, open }) => (
                <Image
                  ref={ref}
                  onClick={open}
                  src={images[0]}
                  alt="property image"
                  className="object-cover h-[400px] mx-auto rounded-xl cursor-pointer"
                  width={1800}
                  height={400}
                  priority={true}
                />
              )}
            </Item>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className={
                    idx === images.length - 1 && images.length % 2 === 1
                      ? "col-span-2"
                      : "col-span-1"
                  }
                >
                  <Item
                    original={image}
                    thumbnail={image}
                    width="1000"
                    height="600"
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        src={image}
                        alt="property image"
                        className="object-cover h-[400px] w-full rounded-xl cursor-pointer"
                        width={1800}
                        height={400}
                        priority={true}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  )
}

export default PropertyImages
