import PropTypes from 'prop-types';
import {useHandler, skillOptions} from './Lib.js'
import Input from './Input.jsx'
import InputDropdown from './InputDropdown.jsx'
export default function FieldSkills({ getter, setter }){
  const initial = {icon:"", skill:""}
  const {newEntry, 
    modifyText, 
    entryPurge, 
    entryDelete, 
    entryEdit,
    modifyDropdown,
    entryDropdownEdit,
    confirm} = useHandler(setter, 'skills', initial)

  return (
    <>
      <InputDropdown type="text" name="icon"  value={newEntry.icon} onChange={modifyDropdown} options={skillOptions} />
      <Input type="text" name="skill" value={newEntry.skill} onChange={modifyText} />
      <button onClick={confirm}> Ok </button>
      <button onClick={entryPurge}> clear </button>

      {
        getter.skills.map(({icon, skill}, indx) => 
          <div key={indx}> 
            <InputDropdown index={indx} type="text" name="icon"  value={icon} onChange={entryDropdownEdit} options={skillOptions} />
            <Input index={indx} type="text" name="skill" value={skill} onChange={entryEdit} /> 
            <button data-index={indx} onClick={entryDelete}>x</button>
          </div>)
      }
    </>
  )
}


FieldSkills.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
