

type Props = {
  active: boolean,
  className?: string,
  menu: [{title:string, url:string}]
}



const Menu = ({active, className, menu}:Props) => {



  const handleClick = () => {
    const toggle = document.getElementById('toggle-button')
    toggle?.click()
  }

  return (
    <ul className={`${className?className:''} ${active ? 'is-active' : ''}`}>
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
