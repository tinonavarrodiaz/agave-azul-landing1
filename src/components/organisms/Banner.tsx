import Image1 from "../molecules/Image1"

const Banner = () => {
  return (
    <div className="Banner container">
      <div data-aos="flip-left">
        <Image1 name="botella" ext="jpg" />
      </div>
      <div data-aos="flip-left" data-aos-delay="100">
        <Image1 name="tanques" ext="jpg" />
      </div>
      <div data-aos="flip-left" data-aos-delay="200">
        <Image1 name="agave" ext="jpg" />
      </div>
    </div>
  )
}

export default Banner
