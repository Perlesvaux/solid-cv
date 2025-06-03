import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import InputImage from './InputImage.jsx'
import Input from './Input.jsx'
import InputOkClear from './InputOkClear.jsx'
import css from './FieldEducation.module.css'
import trash from './assets/trash.svg'

export default function FieldEducation({ getter, setter }){
  const initial = {institution:'', title:'', url:'', image:''}

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
  } = useHandler(setter, 'education', initial)

  return (
    <>
      {
        getter.education.map(({institution, title, url, image}, indx) => 
          <div key={indx} className={css.entries}>
            <div className={css.inputs}>
            <Input onChange={entryEdit} index={indx} type='text' name='institution' value={institution}/>
            <Input onChange={entryEdit} index={indx} type='text' name='title' value={title}  />
            <Input onChange={entryEdit} index={indx} type='text' name='url' value={url} />
            <InputImage index={indx} name='image' onChange={entryImageEdit} deleter={entryImageDelete} /> 
            {image && <img src={image} />}
            </div>
            <button data-index={indx} onClick={entryDelete} className={css.remove}><img src={trash} /></button>
          </div>)
      }
      <Input onChange={modifyText} type="text" name="institution" value={newEntry.institution} />
      <Input onChange={modifyText} type="text" name="title" value={newEntry.title} />
      <Input onChange={modifyText} type="text" name="url" value={newEntry.url} />
      <InputImage name="image" onChange={modifyImage} deleter={eraseImage} />
      <InputOkClear ok={confirm} clear={entryPurge}/>
    </>
  )
}

FieldEducation.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};

