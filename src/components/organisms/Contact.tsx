// import Form from "../molecules/Form"

import Form from "../molecules/Form"

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
    <section className="Contact" id="contact">
  <h2
    className="Contact__title"
  >
    {text?.title}
    <span className="Contact__span">{text?.titleSpan}</span>
  </h2>
  <h3
    className="Contact__subtitle"
  >
    {text?.subTitle}
  </h3>
  <div
    className="Contact__grid"
  >
    <img
      src="/img/san-juanito.jpg"
      alt="San Juanito de Escobedo"
      className="contact_img"
      data-aos="fade-right"
    />
    <div className="" data-aos="fade-left">
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
