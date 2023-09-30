import parse from 'html-react-parser';

type Props = {
  text:string
}

const Company = ({text}:Props) => {

  return (
    <section className="Company">
      <p className="Company__text">{parse(`${text}`)} </p>
    </section>
  )
}

export default Company
