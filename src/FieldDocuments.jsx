import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import InputImage from './InputImage.jsx'
import Input from './Input.jsx'
import InputOkClear from './InputOkClear.jsx'
import css from './FieldEducation.module.css'
import trash from './assets/trash.svg'

export default function FieldDocuments({ getter, setter }){
  const initial = {title:'', image:''}

  const {newEntry, 
    modifyText, 
    modifyImage, 
    eraseImage, 
    entryPurge, 
    entryDelete, 
    entryEdit, 
    confirm, 
    entryImageDelete, 
    entryImageEdit,
  } = useHandler(setter, 'documents', initial)

  return (
    <>
      {
        getter.documents.map(({title, image}, indx) => 
          <div key={indx} className={css.entries}>
            <div className={css.inputs}>
            <Input onChange={entryEdit} index={indx} type='text' name='title' value={title}/>
            <InputImage index={indx} name='image' onChange={entryImageEdit} deleter={entryImageDelete} /> 
            {image && <img src={image} />}
            </div>
            <button data-index={indx} onClick={entryDelete} className={css.remove}><img src={trash} /></button>
          </div>)
      }
      <strong>+ Documents</strong>
      <Input onChange={modifyText} type="text" name="title" value={newEntry.title} placeholder="i.e.: ID, Badge #, Driver License" />
      <InputImage name="image" onChange={modifyImage} deleter={eraseImage} />
      <InputOkClear ok={confirm} clear={entryPurge}/>
    </>
  )
}

FieldDocuments.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};


