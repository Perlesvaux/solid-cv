export default function FieldName({ getter, setter }){

  const deleter = () => setter({type:"delete name"})
  const updater = (e) => setter({type:"update name", value:e.target.value})

  return (
    <label >
      Name
      <input type="text" value={getter.name} onChange={updater} />
      <button onClick={deleter}> delete </button>
    </label>
  )
}

    //{ deleter && <div onClick={deleter}>X</div> }

