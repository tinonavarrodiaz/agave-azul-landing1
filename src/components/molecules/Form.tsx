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
      <div className="input-group">
        <label htmlFor="name">{input?.name}</label>
        <input type="text" name="name" id="name"/>
      </div>
      <div className="input-group">
        <label htmlFor="email">{input?.email}</label>
        <input type="email" name="email" id="email"/>
      </div>
      <div className="input-group">
        <label htmlFor="msg">{input?.message}:</label>
        <textarea name="msg" id="msg" required></textarea>
      </div>
      <div className="Form__footer">
        <button type="submit">{input?.send}</button>
      </div>

    </form>
  )
}

export default Form
