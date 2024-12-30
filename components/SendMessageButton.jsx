import { useFormStatus } from "react-dom"
import { FaPaperPlane } from "react-icons/fa"
const SendMessageButton = () => {
  // if i dont make this button a component but put it directly in the propertycontactform.jsx then it's not wokring as expected
  const { pending } = useFormStatus()

  return (
    <button
      //   className="bg-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
      className="primary-button with-icon w-full flex items-center justify-center"
      type="submit"
      disabled={pending}
    >
      <FaPaperPlane className="mr-2" />{" "}
      {pending ? "Sending..." : "Send Message"}
    </button>
  )
}

export default SendMessageButton
