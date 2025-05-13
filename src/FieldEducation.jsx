import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import EntryImageInput from './EntryImageInput.jsx'

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
    entryImageEdit} = useHandler(setter, 'education', initial)

  return (
    <>
      <label>Institution
        <input type="text" name="institution" value={newEntry.institution} onChange={modifyText} />
      </label>

      <label>Title
        <input type="text" name="title" value={newEntry.title} onChange={modifyText} />
      </label>

      <label>Url
        <input type="text" name="url" value={newEntry.url} onChange={modifyText} />
      </label>

      <EntryImageInput name="image" onChange={modifyImage} deleter={eraseImage} />

      <button onClick={confirm}> Ok </button>
      <button onClick={entryPurge}> clear </button>

      {
        getter.education.map(({institution, title, url, image}, indx) => 
          <div key={indx}>
            <input onChange={entryEdit} data-index={indx} type='text' name='institution' value={institution}/>
            <input onChange={entryEdit} data-index={indx} type='text' name='title' value={title}  />
            <input onChange={entryEdit} data-index={indx} type='text' name='url' value={url} />
            <EntryImageInput 
              index={indx}
              name='image'
              onChange={ entryImageEdit } 
              deleter={ entryImageDelete }
            /> 
            {image && <img src={image} />}
            <button data-index={indx} onClick={entryDelete}>x</button>

          </div>)
      }
    </>
  )
}

              //deleter={() => setter({ type:'update entry', field:'education', value:'', at:indx, part:'image' })}

FieldEducation.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};

