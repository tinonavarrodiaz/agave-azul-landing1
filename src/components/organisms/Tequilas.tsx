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
  console.log(text)

  return (
    <div className="Tequila-bg">
      <section className="Tequilas" id="our-tequilas">
    <h2
      className="Tequilas__title"
    >
      {text?.title}
    </h2>
    <div className="Tequilas__grid">
      {
        text?.tequilas.map((item:any, index:number) => (
          <div
            className={`Tequilas__item item-${index}`}
            data-aos="fade-up"
            data-aos-delay={`${index * 150}`}
            key={index}
          >
            <img
              className={`Tequilas__img ${item.name.replace(/\s+/g, '-')}`}
              src={`/img/${item.src}.png`}
              alt={`Tequila ${item.name}`}
            />
            <h3 className="Tequilas__name">
              Tequila <br />
              {item.name}
            </h3>
            <p>{item?.ts}</p>
            <div className="Tequilas__buttons">
              <a href={`/${item.src}.pdf`} target="_blank" download className="btn-text-ts">
                {/* {text?.ts} */}
                <img
                  className="btn-ts"
                  src={`/img/${text?.btn}.png`}
                  alt={item.name}
                />
              </a>
              <a href={item.instagram} className="btn-icon" target="_blank">
                <img className="" src="/img/instagram.svg" alt="" />
              </a>
            </div>
          </div>
        ))
      }
    </div>
    <div className="footer-tequila">
      <img src="/img/cerleft@2x.png" alt="" />
      <div className="space"></div>
      <img src="/img/certright@2x.png" alt="" />
    </div>
  </section>
  </div>
  )
}

export default Tequilas
