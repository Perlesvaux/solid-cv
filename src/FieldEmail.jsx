export default function FieldEmail({ getter, setter }){

  const deleter = () => setter({type:"delete email"})
  const updater = (e) => setter({type:"update email", value:e.target.value})

  return (
    <label >
      Email
      <input type="email" value={getter.email} onChange={updater} />
      <button onClick={deleter}> delete </button>
    </label>
  )
}

