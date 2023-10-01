import { useState } from "react";
import Hamburgers from "./Hamburguer";
import Menu from "./Menu";

type Props = {
  data: [{title:string, url:string}]
}
const Header = ({data}:Props) => {
  const [active, setActive] = useState(false);
  const ToggleMenuFunction = () => {
    !active ? setActive(true) : setActive(false);
  };
  return  (
    <header className="main-header">
      <div className="container main-header__container">
        <img src="/logo.svg" alt="Logo Destiladora Agave Azul" className="main-header__logo" />
        <Hamburgers active={active} action={ToggleMenuFunction}/>
        <Menu active={active} classN="main-menu" menu={data}/>
      </div>
    </header>
  )
};

export default Header;
