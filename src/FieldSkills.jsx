import {useState} from 'react'
export default function FieldSkills({ getter, setter }){
  const [newEntry, setNewEntry] = useState("")
  const handleNewEntry = (e) => setNewEntry(()=> e.target.value)
  const wipeOut = () => setter({type:"delete all skills"})
  const updater = () => { setNewEntry(()=>""); setter({type:"add skill", value:newEntry}) }
  const deleter = (index) => setter({type:"delete skill", value:index})

  return (
    <label >
      Skills
      <input type="text" value={newEntry} onChange={handleNewEntry} />
      <button onClick={updater}> Ok </button>
      <button onClick={wipeOut}> clear </button>

      {
        getter.skills.map((e, indx) => 
          <div key={indx}>{e} <button onClick={()=>deleter(indx)}>x</button></div>)
      }
    </label>
  )
}

