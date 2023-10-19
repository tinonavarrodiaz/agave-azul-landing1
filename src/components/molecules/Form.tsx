import { useRef, useState } from "react";
import Icontimes from "../atoms/Icontimes";
import Iconcheck from "../atoms/Iconcheck";
import Iconerror from "../atoms/Iconerror";

interface Props {
  input :{
    name: string;
    email: string;
    message: string;
    send: string;
  }
  messages: {
    success: string;
    error: string;
  }
}
const Form = ({input, messages}:Props) => {

  const form = useRef<any>()
  const dialog = useRef<any>()
  const dialogClose = useRef<any>()

  const [message, setMessage] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(false)

  const send = async (e:any) => {
    e.preventDefault();
    const target = e.target
    target.querySelector('img').classList.add('show')

    const formData = new FormData(form.current);
    try{
      const res = await fetch(target.action,{
        method: 'POST',
        body: formData,
      })
      const data = await res.json();
      console.log(data);
      if (res.status !== 200) {
        throw 'miExcepcionUsuario';
      }
      setMessage(messages.success)
    }catch(e){
      setHasError(true)
      setMessage(messages.error)
    }finally{
      target.querySelector('img').classList.remove('show')
      dialog.current.showModal();
      setTimeout(() => {
        dialog.current.close()
      }, 5000);
    }
  }
  const close = () =>{
      dialog.current.close()
  }
  return (
    <>
    <form action="/php/send.php" className="Form" ref={form} onSubmit={send}>
      <div className="Form__grid">
        <div className="input-group">
          <label htmlFor="name">{input?.name}</label>
          <input type="text" name="name" id="name" required/>
        </div>
        <div className="input-group">
          <label htmlFor="email">{input?.email}</label>
          <input type="email" name="email" id="email" required/>
        </div>
      </div>
      <div className="input-group input-group--textarea">
        <label htmlFor="msg">{input?.message}</label>
        <textarea name="msg" id="msg" required></textarea>
      </div>
      <div className="Form__footer">
        <div id="notes" className="Form__notes">
          <img src="/loading1.svg" alt="" />
        </div>
        <button type="submit" className="btn-submint">{input?.send}</button>
      </div>
      <dialog className={`dialog ${hasError ? 'error': ''}`} ref={dialog}>
        <button type="button" className="dialog__close" ref={dialogClose} onClick={close}>
          <Icontimes/>
        </button>
        <div className="dialog__container">
          {
            hasError ? (
              <Iconerror/>
            ):(
              <Iconcheck/>
            )
          }
          <p>{message}</p>
        </div>
      </dialog>
    </form>
      </>
  )
}

export default Form
