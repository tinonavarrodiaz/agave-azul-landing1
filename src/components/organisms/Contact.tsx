// import Form from "../molecules/Form"

import Form from "../molecules/Form"
import Image3 from "../molecules/Image3"

type Props = {
  text: {
    title:string,
    titleSpan:string,
    subTitle:string,
    inputs: {
      name:string,
      email:string,
      message:string,
      send:string,
    },
    offices:string,
    distillery:string,
  }
}

const Contact = ({text}:Props) => {
  return (
    <section className="Contact container" id="contact">
  <h2
    className="Contact__title"
  >
    {text?.title}
    <span className="Contact__span">{text?.titleSpan}</span>
  </h2>
  <p
    className="Contact__subtitle"
  >
    {text?.subTitle}
  </p>
  <div
    className="Contact__grid"
  >
    <div className="Contact__img">
      <Image3 name="san-juanito1" ext="jpg" cName="Contact__img--pic"/>
    {/* <img
      src="/img/san-juanito1@.jpg"
      alt="San Juanito de Escobedo"
      data-aos="fade-right"
    /> */}

    </div>
    <div className="Contact__text" data-aos="fade-left">
      <Form
        input={text?.inputs}
      />
      <div className="Contact__adresses">
        <div className="Contact__offices">
          <h3 className="">
            {text?.offices}
          </h3>
          <p className="">
            Hilarion Romero Gil Nº 1033, Alcalde Barranquitas,<br />
             Guadalajara, Jalisco,<br />
             México Tel: 33 1199 0002 y 33 1199 3661
          </p>
        </div>
        <div className="Contact__distillery">
          <h3 className="">
            {text?.distillery}
          </h3>
          <p className="">
            Cuauhtémoc 1000 Col. Vista Hermosa, San Juanito <br />
             de Escobedo, Jal.46560 México
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact
