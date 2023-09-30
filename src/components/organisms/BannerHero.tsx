import Image from "../molecules/Image"

const BannerHero = () => {
  return (
  <div className="Hero">
    <div className="Hero__container" data-aos="zoom-out">
      <Image name="campo" ext="jpg" cName="Hero__image" />
    </div>
  </div>
  )
}

export default BannerHero
