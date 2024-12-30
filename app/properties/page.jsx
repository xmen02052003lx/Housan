import connectDB from "@/config/database"
import Property from "@/models/Property"
import PropertyCard from "@/components/PropertyCard"
import PropertySearchForm from "@/components/PropertySearchForm"
import Pagination from "@/components/Pagination"

const PropertiesPage = async ({ searchParams: { page = 1, pageSize = 9 } }) => {
  await connectDB()
  const skip = (page - 1) * pageSize
  const total = await Property.countDocuments({})
  const properties = await Property.find({}).skip(skip).limit(pageSize) // lean(): optimize by changing mongoose object to javascript object, can use on read-only data

  const showPagination = total > pageSize

  return (
    <>
      <section className="bg-primary search-results-header">
        <PropertySearchForm />
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.length === 0 ? (
            <p>Not found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map(property => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
          {showPagination && (
            <Pagination
              page={parseInt(page)}
              pageSize={parseInt(pageSize)}
              totalItems={total}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default PropertiesPage
