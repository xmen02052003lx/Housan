"use server"
import connectDB from "@/config/database"
import Message from "@/models/Message"
import { getSessionUser } from "@/utils/getSessionUser"

async function addMessage(previousState, formData) {
  await connectDB()
  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required") // this will navigate us to the error.jsx page
  }
  const { userId } = sessionUser
  const recipient = formData.get("recipient")
  if (userId === recipient) {
    return { error: "You cannot send a message to yourself" }
  }
  const newMessage = new Message({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    body: formData.get("body"),
    sender: userId,
    recipient,
    property: formData.get("property")
  })
  await newMessage.save()
  return { submitted: true }
}

export default addMessage
