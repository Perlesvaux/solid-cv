import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'
import InputOkClear from './InputOkClear.jsx'
import css from './FieldExperience.module.css'
import trash from './assets/trash.svg'

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
      {
        getter.experience.map(({when, where, what, desc}, indx) => 
          <div key={indx} className={css.entries}>
            <div className={css.inputs}>
              <Input index={indx} name="when"  type="text" value={when}  onChange={entryEdit} /> 
              <Input index={indx} name="where" type="text" value={where} onChange={entryEdit} /> 
              <Input index={indx} name="what"  type="text" value={what}  onChange={entryEdit} /> 
              <Input index={indx} name="desc"  type="text" value={desc}  onChange={entryEdit} /> 
            </div>
            <button data-index={indx} onClick={entryDelete} className={css.remove}><img src={trash}/></button>
          </div>)
      }
      <Input onChange={modifyText} type="text" name="when"  value={newEntry.when} />
      <Input onChange={modifyText} type="text" name="where" value={newEntry.where} />
      <Input onChange={modifyText} type="text" name="what"  value={newEntry.what} />
      <Input onChange={modifyText} type="text" name="desc"  value={newEntry.desc} />
      <InputOkClear ok={confirm} clear={entryPurge}/>
    </>
  )
}


FieldExperience.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
