import Image3 from "../molecules/Image3"

type Props = {
  data: {
    title: string,
    text: string,
    subtext: string
  }
}

const Under = ({data}:Props) => {
  return (
    <section className="Under">
      <div className=" container1 Under__container w-container-2 mx-auto md:grid">
        <div className="img" data-aos="fade-right">
          <Image3 name="jimador" ext="jpg" />
        </div>
        <div className="Under__text lg:pb-8" data-aos="fade-left">
          <h1
            className="Under__title"
          >
            {data?.title}
          </h1>
          <p
            className={``}
          >
            {data?.text}
          </p>
          <p className={``}>
            {data?.subtext}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Under
