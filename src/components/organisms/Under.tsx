import Image from "../molecules/Image"

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
      <div className="grid-container w-container-2 mx-auto md:grid">
        <div className="img" data-aos="fade-right">
          <Image name="jimador" ext="jpg" />
        </div>
        <div className="text lg:pb-8" data-aos="fade-left">
          <h1
            className="text-text-gray text-4xl md:text-[3.64vw] md:leading-[1.1em] text-center md:text-left mt-7 md:mt-0 mb-4 md:mb-[3.64vw] tracking-[3px]"
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
