import PropTypes from 'prop-types';
import {useState} from 'react'
export default function FieldSkills({ getter, setter }){
  const initial = {icon:"", skill:""}
  const [newEntry, setNewEntry] = useState(initial)
  const handleNewEntry = (e) => setNewEntry({...newEntry, [e.target.name]: e.target.value})
  const wipeOut = () => setter({type:"delete all skills"})
  const updater = () => { setNewEntry(()=>initial); setter({type:"add skill", value:newEntry}) }
  const deleter = (index) => setter({type:"delete skill", value:index})
  const edit = (e, index) => setter({type:"update skill", value:e.target.value, at:index, fieldname:e.target.name})

  return (
    <label >
      Skills
      <input type="text" name="icon"  value={newEntry.icon} onChange={handleNewEntry} />
      <input type="text" name="skill" value={newEntry.skill} onChange={handleNewEntry} />
      <button onClick={updater}> Ok </button>
      <button onClick={wipeOut}> clear </button>

      {
        getter.skills.map(({icon, skill}, indx) => 
          <div key={indx}> 
            <input type="text" name="icon" value={icon} onChange={(e)=>edit(e, indx)} /> 
            <input type="text" name="skill" value={skill} onChange={(e)=>edit(e, indx)} /> 
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
