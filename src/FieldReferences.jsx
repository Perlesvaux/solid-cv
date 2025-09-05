import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import InputImage from './InputImage.jsx'
import Input from './Input.jsx'
import InputOkClear from './InputOkClear.jsx'
import css from './FieldEducation.module.css'
import trash from './assets/trash.svg'

export default function FieldReferences({ getter, setter }){
  const initial = {reference:'', contact:''}

  const {newEntry, 
    modifyText, 
    //modifyImage, 
    //eraseImage, 
    entryPurge, 
    entryDelete, 
    entryEdit, 
    confirm, 
    //entryImageDelete, 
    //entryImageEdit,
  } = useHandler(setter, 'references', initial)

  return (
    <>
      {
        getter.references && getter.references.map(({reference, contact}, indx) => 
          <div key={indx} className={css.entries}>
            <div className={css.inputs}>
            <Input onChange={entryEdit} index={indx} type='text' name='reference' value={reference}/>
            <Input onChange={entryEdit} index={indx} type='text' name='contact' value={contact}  />
            </div>
            <button data-index={indx} onClick={entryDelete} className={css.remove}><img src={trash} /></button>
          </div>)
      }
      <strong>+ References</strong>
      <Input onChange={modifyText} type="text" name="reference" value={newEntry.reference} placeholder="Otacon" />
      <Input onChange={modifyText} type="text" name="contact" value={newEntry.contact} placeholder="+1 800 141 800" />
      <InputOkClear ok={confirm} clear={entryPurge}/>
    </>
  )
}

FieldReferences.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};


