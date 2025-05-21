import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import InputImage from './InputImage.jsx'
import Input from './Input.jsx'
import InputOkClear from './InputOkClear.jsx'

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
      <Input onChange={modifyText} type="text" name="institution" value={newEntry.institution} />
      <Input onChange={modifyText} type="text" name="title" value={newEntry.title} />
      <Input onChange={modifyText} type="text" name="url" value={newEntry.url} />
      <InputImage name="image" onChange={modifyImage} deleter={eraseImage} />

      <InputOkClear ok={confirm} clear={entryPurge}/>

      {
        getter.education.map(({institution, title, url, image}, indx) => 
          <div key={indx}>
            <Input onChange={entryEdit} index={indx} type='text' name='institution' value={institution}/>
            <Input onChange={entryEdit} index={indx} type='text' name='title' value={title}  />
            <Input onChange={entryEdit} index={indx} type='text' name='url' value={url} />
            <InputImage index={indx} name='image' onChange={entryImageEdit} deleter={entryImageDelete} /> 
            {image && <img src={image} />}
            <button data-index={indx} onClick={entryDelete}>x</button>
          </div>)
      }
    </>
  )
}

FieldEducation.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};

