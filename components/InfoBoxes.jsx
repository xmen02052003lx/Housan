import InfoBox from "./InfoBox"

const InfoBoxes = () => {
  return (
    <section>
      <p className="subtitle text-center">
        <span className="bar1"></span>What We Serve{" "}
        <span className="bar1"></span>
      </p>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black"
            }}
            buttonType="infobox-secondary"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quo
            repellat ipsam quas pariatur unde harum ipsum adipisci vel
            architecto.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-blue-500"
            }}
            buttonType="infobox-primary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            ratione perspiciatis saepe magnam molestiae fugit fugiat commodi
            nisi! Qui, voluptate?
          </InfoBox>
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes
