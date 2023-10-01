

type Props = {
  active: boolean,
  classN?: string,
  menu: [{title:string, url:string}]
}



const Menu = ({active, classN, menu}:Props) => {



  const handleClick = () => {
    const toggle = document.getElementById('toggle-button')
    toggle?.click()
  }

  return (
    <ul className={`${classN?classN:''} ${active ? 'is-active' : ''} ls-3`}>
      {

        menu?.map((item, index) => (

          <li key={index}>
            <a href={item.url} onClick={handleClick}>{item.title}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default Menu
