const InfoBox = ({
  children,
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
  buttonType
}) => {
  return (
    <div
      className={`${backgroundColor} ${buttonType}  p-6 rounded-lg shadow-md`}
    >
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <a
        href={buttonInfo.link}
        // className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
        className={`${
          buttonType === "infobox-primary"
            ? "primary-button"
            : "secondary-button"
        }`}
      >
        {buttonInfo.text}
      </a>
    </div>
  )
}

export default InfoBox
