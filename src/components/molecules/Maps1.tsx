import { useRef } from "react"


const Maps = () => {
  const map = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   (function () {
  //   const a = document.createElement('script');
  //   a.type = 'text/javascript';
  //   a.async = !0;
  //   a.src = 'https://cdn.storepoint.co/api/v1/js/1614231f12fddd.js';
  //   const b:any = document.getElementsByTagName('script')[0];
  //   b.parentNode.insertBefore(a, b);
  // })();
  // },[])
  return (
    <div className="Map">
      <div id="storepoint-container" ref={map}>
        <img src="/img/map.jpg" alt="mapa" />
      </div>
    </div>
  )
}

export default Maps
