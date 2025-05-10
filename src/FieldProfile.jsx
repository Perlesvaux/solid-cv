export default function FieldProfile({ getter, setter }){

  const deleter = () => setter({type:"delete profile"})
  const updater = (e) => setter({type:"update profile", value:e.target.value})

  return (
    <label >
      Profile
      <input type="text" value={getter.profile} onChange={updater} />
      <button onClick={deleter}> delete </button>
    </label>
  )
}

    //{ deleter && <div onClick={deleter}>X</div> }
