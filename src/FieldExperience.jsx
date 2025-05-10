import PropTypes from 'prop-types';
import {useState} from 'react'
export default function FieldExperience({ getter, setter }){
  const initial = {where:"", when:"", what:"", desc:""}
  const [newEntry, setNewEntry] = useState(initial)
  const handleNewEntry = (e) => setNewEntry({...newEntry, [e.target.name]: e.target.value})
  const wipeOut = () => setter({type:"delete all experience"})
  const updater = () => { setNewEntry(()=>initial); setter({type:"add experience", value:newEntry}) }
  const deleter = (index) => setter({type:"delete experience", value:index})

  return (
    <>
      <label>When
        <input type="text" name="when" value={newEntry.when} onChange={handleNewEntry} />
      </label>

      <label>Where
        <input type="text" name="where" value={newEntry.where} onChange={handleNewEntry} />
      </label>

      <label>What
        <input type="text" name="what" value={newEntry.what} onChange={handleNewEntry} />
      </label>

      <label>description
        <input type="text" name="desc" value={newEntry.desc} onChange={handleNewEntry} />
      </label>

      <button onClick={updater}> Ok </button>
      <button onClick={wipeOut}> clear </button>

      {
        getter.experience.map(({when, where, what, desc}, indx) => 
          <div key={indx}>{when} {where} {what} {desc} <button onClick={()=>deleter(indx)}>x</button></div>)
      }
    </>
  )
}


FieldExperience.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
