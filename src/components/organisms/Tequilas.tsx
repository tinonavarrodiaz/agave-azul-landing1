type Props = {
  text: {
    ts:string,
    btn:string,
    title:string,
    tequilas:[
      {
        name:string,
        src: string,
        instagram:string,
      }
    ]
  }
}

// const Tequilas = ({text}:Props) => {
//   console.log(text)
//   return (
//     <section className="Tequilas">
//       <h2>{text?.title}</h2>
//     </section>
//   )
// }

const Tequilas = ({text}:Props) => {
  return (
    <section className="Tequilas" id="our-tequilas">
  <h2
    className=""
  >
    {text?.title}
  </h2>
  <div className="Tequilas__grid">
    {
      text?.tequilas.map((item:any, index:number) => (
        <div
          className={`item item-${index}`}
          data-aos="fade-up"
          data-aos-delay={`${index * 150}`}
          key={index}
        >
          <img
            className=""
            src={`/img/${item.src}.png`}
            alt={`Tequila ${item.name}`}
          />
          <h3 className="">
            Tequila <br />
            {item.name}
          </h3>
          <div className="buttons-container">
            <a href={`/${item.src}.pdf`} target="_blank" download>
              <img
                className="btn-ts"
                src={`/img/${text?.btn}.png`}
                alt={item.name}
              />
            </a>
            <a href={item.instagram} className="bt-instagram" target="_blank">
              <img className="btn-icon" src="/img/instagram.svg" alt="" />
            </a>
          </div>
        </div>
      ))
    }
  </div>
  <div className="footer-tequila">
    <div className="icon-container c-left">
      <img
        src="/img/ara-sello.svg"
        alt="ARA Certification"
        className="icon-cert as"
      />
      <img src="/img/k.svg" alt="kosher Certification" className="icon-cert k" />
      <img src="/img/ara.svg" alt="Certifications" className="icon-cert ara" />
    </div>
    <div className="icon-container c-right">
      <img src="/img/nom.svg" alt="NOM" className="icon-cert nom" />
      <img src="/img/1424.svg" alt="1424" className="icon-cert num" />
      <img src="/img/crt.svg" alt="crt" className="icon-cert crt" />
    </div>
  </div>
</section>
  )
}

export default Tequilas
