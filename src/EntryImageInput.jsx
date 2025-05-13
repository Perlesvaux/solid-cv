import PropTypes from 'prop-types'
import { useRef } from 'react'

export default function EntryImageInput({ name, onChange, deleter }){

  const ref = useRef(null)

  const imageToDataURL = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => onChange(reader.result) 
      console.log(file, file.name)
    }
  }

  const handleImageDelete = () => { 
    deleter()
    ref.current.value='' 
  }

  const handleImageChange = (e) => {
    imageToDataURL(e)
  }

  return(<>
    <label> {name}
      <input name={name} type='file' accept='image/*' ref={ref} onChange={handleImageChange}/>
      <button onClick={ handleImageDelete }>unload</button>
    </label>
  </>)
}


EntryImageInput.propTypes = {
  name:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  deleter:PropTypes.func.isRequired,
}
