// THIS CODE FIX THIS ERROR:
// Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.
//   {_id: ..., owner: {buffer: ...}, name: ..., type: ..., description: ..., location: ..., beds: ..., baths: ..., square_feet: ..., amenities: ..., rates: ..., seller_info: ..., images: ..., is_featured: ..., createdAt: ..., updatedAt: ..., __v: ...}
export function convertToSerializableObject(leanDocument) {
  for (const key of Object.keys(leanDocument)) {
    if (leanDocument[key].toJSON && leanDocument[key].toString) {
      leanDocument[key] = leanDocument[key].toString()
    }
  }
  return leanDocument
}
