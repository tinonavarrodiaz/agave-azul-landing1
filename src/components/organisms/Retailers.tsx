import Maps from "../molecules/Maps"

type Props = {
  text: {
    title: string,
    subTitle: string
  }
}

const Retailers = ({text}:Props) => {
  return (
    <section className="Retrailers" id="where-to-buy">
      <h2
        className="Retrailers__title"
        id="where-to-buy"
      >
        {text?.title}
      </h2>
      <p
        className="Retrailers__subtitle"
      >
        {text?.subTitle}
      </p>
      <div className="Retrailers__map">
        <Maps />
      </div>
    </section>
  )
}

export default Retailers
