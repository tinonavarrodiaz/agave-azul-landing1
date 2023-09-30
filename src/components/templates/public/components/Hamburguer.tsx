import { useRef } from "react";

type Props = {
  active: boolean
  action: () => void
}

const Hamburgers = ({active,action}:Props) => {
  const button = useRef(null)

  return (
    <button
      onClick={action}
      className={`hamburger hamburger--squeeze lg:hidden ${active ? 'is-active' : ''}`}
      type="button"
      id="toggle-button"
      ref={button}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner">
        </span>
      </span>
    </button>
  );
};

export default Hamburgers;
