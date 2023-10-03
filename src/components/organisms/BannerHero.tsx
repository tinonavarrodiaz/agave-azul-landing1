import Image3 from "../molecules/Image3"

const BannerHero = () => {
  return (
  <div className="Hero">
    <div className="Hero__container container" data-aos="zoom-out">
      <Image3 name="campo" ext="jpg" cName="Hero__image img-op-center" />
    </div>
  </div>
  )
}

export default BannerHero
