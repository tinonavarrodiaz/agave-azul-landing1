import { useEffect, useRef } from "react"


const Maps = () => {
  const map = useRef<HTMLDivElement>(null)

  useEffect(() => {
    (function () {
    const a = document.createElement('script');
    a.type = 'text/javascript';
    a.async = !0;
    a.src = 'https://cdn.storepoint.co/api/v1/js/165fdd70387922.js';
    const b:any = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
  })();
  },[])
  return (
    <div className="Map">
      <div id="storepoint-container" data-map-id="165fdd70387922" ref={map}></div>
    </div>
  )
}

export default Maps
