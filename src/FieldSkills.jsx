import PropTypes from 'prop-types';
import {useHandler, skillOptions} from './Lib.js'
import Input from './Input.jsx'
import InputDropdown from './InputDropdown.jsx'
import InputOkClear from './InputOkClear.jsx'
import css from './FieldSkills.module.css'
import trash from './assets/trash.svg'
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
      {
        getter.skills.map(({icon, skill}, indx) => 
          <div key={indx} className={css.entries}> 
            <div className={css.inputs}>
              <InputDropdown index={indx} type="text" name="icon"  value={icon} onChange={entryDropdownEdit} options={skillOptions} />
              <Input index={indx} type="text" name="skill" value={skill} onChange={entryEdit} /> 
            </div>
            <button data-index={indx} onClick={entryDelete} className={css.remove}><img src={trash}/></button>
          </div>)
      }
      <InputDropdown type="text" name="icon"  value={newEntry.icon} onChange={modifyDropdown} options={skillOptions} />
      <Input type="text" name="skill" value={newEntry.skill} onChange={modifyText} />
      <InputOkClear ok={confirm} clear={entryPurge}/>
    </>
  )
}


FieldSkills.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
