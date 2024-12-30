import PropertyCard from "@/components/PropertyCard"
import PropertySearchForm from "@/components/PropertySearchForm"
import connectDB from "@/config/database"
import Property from "@/models/Property"
import { convertToSerializableObject } from "@/utils/convertToObject"
import Link from "next/link"
import { FaArrowAltCircleLeft } from "react-icons/fa"

const SearchResultsPage = async ({
  searchParams: { location, propertyType }
}) => {
  await connectDB()
  const locationPattern = new RegExp(location, "i")
  const query = {
    $or: [
      { name: locationPattern },
      { description: locationPattern },
      { "location.street": locationPattern },
      { "location.city": locationPattern },
      { "location.state": locationPattern },
      { "location.zipcode": locationPattern }
    ]
  }
  if (propertyType && propertyType !== "All") {
    const propertyTypePattern = new RegExp(propertyType, "i")
    query.type = propertyType
  }
  const propertiesQueryResults = await Property.find(query).lean()
  const properties = propertiesQueryResults.map(convertToSerializableObject)
  console.log(properties)

  return (
    <>
      <section className="bg-primary search-results-header">
        <PropertySearchForm />
      </section>
      <section className="px-4 py-6">
        <div className="contaner-xl lg:container m-auto px-4 py-6">
          <Link
            href="/properties"
            className="flex items-center text-blue-500 hover:underline mb-3"
          >
            <FaArrowAltCircleLeft className="mr-2 mb-1" /> Back To Properties
          </Link>
          <h1 className="text-2xl mb-4">Search Results</h1>
          {properties.length === 0 ? (
            <p>No search results</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map(property => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default SearchResultsPage
