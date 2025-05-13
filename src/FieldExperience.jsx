import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'
export default function FieldExperience({ getter, setter }){
  const initial = {where:"", when:"", what:"", desc:""}
  const {newEntry, 
    modifyText, 
    entryPurge, 
    entryDelete, 
    entryEdit, 
    confirm} = useHandler(setter, 'experience', initial)

  return (
    <>
      <Input onChange={modifyText} type="text" name="when"  value={newEntry.when} />
      <Input onChange={modifyText} type="text" name="where" value={newEntry.where} />
      <Input onChange={modifyText} type="text" name="what"  value={newEntry.what} />
      <Input onChange={modifyText} type="text" name="desc"  value={newEntry.desc} />

      <button onClick={confirm}> Ok </button>
      <button onClick={entryPurge}> clear </button>

      {
        getter.experience.map(({when, where, what, desc}, indx) => 
          <div key={indx}>
            <Input index={indx} name="when"  type="text" value={when}  onChange={entryEdit} /> 
            <Input index={indx} name="where" type="text" value={where} onChange={entryEdit} /> 
            <Input index={indx} name="what"  type="text" value={what}  onChange={entryEdit} /> 
            <Input index={indx} name="desc"  type="text" value={desc}  onChange={entryEdit} /> 
            <button data-index={indx} onClick={entryDelete}>x</button>
          </div>)
      }
    </>
  )
}


FieldExperience.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
