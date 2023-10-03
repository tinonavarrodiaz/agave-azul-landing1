interface Props {
  input :{
    name: string;
    email: string;
    message: string;
    send: string;
  }
}
const Form = ({input}:Props) => {
  return (
    <form action="" className="Form">
      <div className="Form__grid">
        <div className="input-group">
          <label htmlFor="name">{input?.name}</label>
          <input type="text" name="name" id="name"/>
        </div>
        <div className="input-group">
          <label htmlFor="email">{input?.email}</label>
          <input type="email" name="email" id="email"/>
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

    </form>
  )
}

export default Form
