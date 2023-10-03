import { useEffect, useRef, useState } from "react";
import Hamburgers from "./Hamburguer";
import Menu from "./Menu";

type Props = {
  data: [{title:string, url:string}]
}
const Header = ({data}:Props) => {
  const header = useRef<any>();
  const [active, setActive] = useState(false);
  const ToggleMenuFunction = () => {
    !active ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    const headerHeight = header.current.clientHeight;
    const switchEle = document.getElementById('switch')
    const newHeaderHeight = headerHeight*.75 + 'px';
    window.addEventListener('scroll', ()=>{
      if (scrollY >= headerHeight*.75) {
        header.current.classList.add('fixed');
        document.documentElement.style.setProperty('--header-height', newHeaderHeight);
        switchEle?.classList.add('fixed');
      }else{
        header.current.classList.remove('fixed');
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
        switchEle?.classList.remove('fixed');
      }
    })
    console.log(headerHeight);
  },[])

  return  (
    <header className="main-header" ref={header}>
      <div className="container main-header__container">
        <img src="/logo.svg" alt="Logo Destiladora Agave Azul" className="main-header__logo" />
        <Hamburgers active={active} action={ToggleMenuFunction}/>
        <Menu active={active} classN="main-menu" menu={data}/>
      </div>
    </header>
  )
};

export default Header;
