interface Props {
  name: string;
  ext: string;
}

const Image1 = ({ name, ext }:Props) => {
  return (
    <picture className="picture">
      <source srcSet={`/img/${name}@m.webp`} type="image/webp" />
      <img src={`/img/amaury.${ext}`} alt={name} />
    </picture>
  )
}

export default Image1
