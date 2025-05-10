import PropTypes from 'prop-types';
import {useState} from 'react'
export default function FieldSkills({ getter, setter }){
  const [newEntry, setNewEntry] = useState("")
  const handleNewEntry = (e) => setNewEntry(()=> e.target.value)
  const wipeOut = () => setter({type:"delete all skills"})
  const updater = () => { setNewEntry(()=>""); setter({type:"add skill", value:newEntry}) }
  const deleter = (index) => setter({type:"delete skill", value:index})
  const edit = (e, index) => setter({type:"update skill", value:e.target.value, at:index})

  return (
    <label >
      Skills
      <input type="text" value={newEntry} onChange={handleNewEntry} />
      <button onClick={updater}> Ok </button>
      <button onClick={wipeOut}> clear </button>

      {
        getter.skills.map((e, indx) => 
          <div key={indx}> 
            <input type="text" value={e} onChange={(e)=>edit(e, indx)} /> 
            <button onClick={()=>deleter(indx)}>x</button>
          </div>)
      }
    </label>
  )
}


FieldSkills.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
