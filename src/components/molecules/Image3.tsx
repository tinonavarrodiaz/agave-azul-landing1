interface Props {
  name: string;
  ext: string;
  cName?: string;
}

const Image3 = ({ name, ext, cName }:Props) => {
  return (

    <picture className={`${cName?cName:''}`}>
      <source
        srcSet={`/img/${name}@2x.webp`}
        type="image/webp"
        media="(min-width: 1600px)"
      />
      <source srcSet={`/img/${name}@2x.${ext}`} media="(min-width: 1600px)" />
      <source
        srcSet={`/img/${name}.webp`}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source srcSet={`/img/${name}.${ext}`} media="(min-width: 768px)" />
      <source srcSet={`/img/san-juanito.jpg`} media="(max-width: 768px)" />
      <img src={`/img/${name}.${ext}`} alt={name} />
    </picture>
  )
}

export default Image3
