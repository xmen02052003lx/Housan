import { Schema, model, models } from "mongoose"

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"]
    },
    username: {
      type: String,
      required: [true, "Username is required"]
    },
    image: {
      type: String
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property"
      }
    ] // relationship, array of id
  },
  {
    timestamps: true
  }
)

const User = models.User || model("User", UserSchema)

export default User
// Why use: "models.user || ... "? Yeah this won't be something you would have seen in a typical MERN project for example, as in Express you have one single entry point to you app, usually app.js, server.js, index.js or whatever. And you would deploy to a server (vps or PAAS) that would then run the app.
// The deploy target ( in the majority of cases ) in a NextJS app is Vercel, where your code isn't really running on a backend server.
// The backend code in a app on Vercel is running on Vercel serverless cloud functions, so the entry point to your app is dependent on the request url and so could have any number of entry points.
// So we use models.User || to use the already instantiated User, if it exists, or instantiate a new Model if it doesn't.
// This avoids a situation where one cloud function instantiated the Model, but then another cloud function runs and tries to create a new instance of the Model which you cannot do in Mongoose. By using the logical OR operator we are checking to see if the Model has already been instantiated before creating the Model.
// Hope that answers it for you.
