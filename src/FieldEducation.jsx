import PropTypes from 'prop-types';
import {useState} from 'react'
import {imageToDataURL} from './Lib.js'
import InputImage from './InputImage.jsx'
import EntryImageInput from './EntryImageInput.jsx'

export default function FieldEducation({ getter, setter }){
  const initial = {institution:'', title:'', url:'', image:''}
  const [newEntry, setNewEntry] = useState(initial)

  const handleNewEntry = (e) => setNewEntry({...newEntry, [e.target.name]: e.target.value})

  const wipeOut = () => setter({type:'delete all entries', field: 'education'})
  //const updater = 
  const deleter = (index) => setter({type:'delete entry', field:'education', value:index})
  const edit = (index, name, value) => setter({type:'update entry', field:'education', value:value, at:index, part:name})

  //const imageChanger2 = (readerResult) => setter({type:'update entry', field:'education', value:readerResult, at:index, part:'image'}) 
  //const imageChanger = (readerResult) => setNewEntry({ ...newEntry, image:readerResult }) 
  //const handleImageChange = (e) => imageToDataURL(e, imageChanger )
  //const handleImageCancel = () => setNewEntry({...newEntry, image:''}) 

  return (
    <>
      <label>Institution
        <input type="text" name="institution" value={newEntry.institution} onChange={handleNewEntry} />
      </label>

      <label>Title
        <input type="text" name="title" value={newEntry.title} onChange={handleNewEntry} />
      </label>

      <label>Url
        <input type="text" name="url" value={newEntry.url} onChange={handleNewEntry} />
      </label>

      <EntryImageInput 
        name="image"
        onChange={(readerResult) => setNewEntry({ ...newEntry, image:readerResult })}
        deleter={() => setNewEntry({...newEntry, image:''})}
      />

      <button onClick={() => { setNewEntry(()=>initial); setter({type:'add entry', field:'education', value:newEntry}) }}> Ok </button>
      <button onClick={wipeOut}> clear </button>

      {
        getter.education.map(({institution, title, url, image}, indx) => 
          <div key={indx}>
            <input type='text' name='institution' value={institution} onChange={(e)=>edit(indx, e.target.name, e.target.value)} />
            <input type='text' name='title' value={title}       onChange={(e)=>edit(indx, e.target.name, e.target.value)} />
            <input type='text' name='url' value={url}         onChange={(e)=>edit(indx, e.target.name, e.target.value)} />
            <EntryImageInput 
              name='image'
              onChange={(readerResult) => setter({type:'update entry', field:'education', value:readerResult, at:indx, part:'image'})} 
              deleter={() => setter({ type:'update entry', field:'education', value:'', at:indx, part:'image' })}
            /> 
            {image && <img src={image} />}
            <button onClick={()=>deleter(indx)}>x</button>

          </div>)
      }
    </>
  )
}
//<InputImage name="image" changer={} /> 
//
            //<InputImage name="image" changer={(e)=>imgAsDataURL(e, indx, "image")} deleter={()=> edit(indx, "image", "")} />{image && <img src={image} />}


FieldEducation.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};


      //<label>Image
      //  <input type="text" name="image" value={newEntry.image} onChange={handleImageChange} />
      //</label>
