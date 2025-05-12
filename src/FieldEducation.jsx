import PropTypes from 'prop-types';
import {useState} from 'react'
import {imageToDataURL} from './Lib.js'
import InputImage from './InputImage.jsx'

export default function FieldEducation({ getter, setter }){
  const initial = {institution:"", title:"", url:"", image:""}
  const [newEntry, setNewEntry] = useState(initial)
  const handleNewEntry = (e) => setNewEntry({...newEntry, [e.target.name]: e.target.value})
  const wipeOut = () => setter({type:"delete all education"})
  const updater = () => { setNewEntry(()=>initial); setter({type:"add education", value:newEntry}) }
  const deleter = (index) => setter({type:"delete education", value:index})
  


  const imageChanger = (readerResult) => setNewEntry({ ...newEntry, image:readerResult }) 
  const handleImageChange = (e) => imageToDataURL(e, imageChanger )
  const handleImageCancel = () => setNewEntry({...newEntry, image:''}) 

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

      <InputImage name="image" changer={handleImageChange} deleter={handleImageCancel} />

      <button onClick={updater}> Ok </button>
      <button onClick={wipeOut}> clear </button>

      {
        getter.education.map(({institution, title, url, image}, indx) => 
          <div key={indx}>
            {institution} {title} {url} 
            {image && <img src={image} />}
          <button onClick={()=>deleter(indx)}>x</button></div>)
      }
    </>
  )
}


FieldEducation.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};


      //<label>Image
      //  <input type="text" name="image" value={newEntry.image} onChange={handleImageChange} />
      //</label>
