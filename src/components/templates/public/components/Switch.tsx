import { useEffect, useRef } from 'react'
import './styles.scss'

type Props = {
  lang?:string,
  langFn:(()=>void)
}


function Switch({lang, langFn}: Props) {
  const input = useRef<any>(null)

  useEffect(()=>{
    lang==='es' ? input.current.checked = true : input.current.checked = false
  },[lang])

  const change = ()=>{
    langFn()
  }
  return (
    <div className="switch" id="switch">
      <div className='ui-switch-container'>
        <label className="ui-switch">
          English
            <input type="checkbox" onChange={change} ref={input}/>
          <div className="slider">
            <div className="circle"></div>
          </div>
          Español
        </label>
      </div>
    </div>
  )
}

export default Switch
