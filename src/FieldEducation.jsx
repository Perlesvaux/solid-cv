import {useState} from 'react'
//import {handleImageChange} from './Lib.js'
import InputImage from './InputImage.jsx'
export default function Fieldeducation({ getter, setter }){
  const initial = {institution:"", title:"", url:"", image:""}
  const [newEntry, setNewEntry] = useState(initial)
  const handleNewEntry = (e) => setNewEntry({...newEntry, [e.target.name]: e.target.value})
  const wipeOut = () => setter({type:"delete all education"})
  const updater = () => { setNewEntry(()=>initial); setter({type:"add education", value:newEntry}) }
  const deleter = (index) => setter({type:"delete education", value:index})
  

  function handleImageChange(event){
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = ()=> setNewEntry({ ...newEntry, image:reader.result }) 
      console.log(file, file.name)
    }
  }

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
            {institution} 
            {title} 
            {url} 
            {image && <img src={image} />}
          <button onClick={()=>deleter(indx)}>x</button></div>)
      }
    </>
  )
}
      //<label>Image
      //  <input type="text" name="image" value={newEntry.image} onChange={handleImageChange} />
      //</label>
