import PropTypes from 'prop-types'
import { useRef } from 'react'

export default function EntryImageInput({ index, name, onChange, deleter }){
  const ref = useRef(null)
  const hasIndex = index !== null && index !== undefined

  const imageToDataURL = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => hasIndex? onChange(reader.result, index) : onChange(reader.result)
      console.log(file, file.name)
    }
  }

  const handleImageDelete = () => { 
    hasIndex? deleter(index) : deleter()
    ref.current.value='' 
  }

  const handleImageChange = (e) => {
    imageToDataURL(e)
  }

  return(<>
    <label> {name}
      <input  name={name} type='file' accept='image/*' ref={ref} onChange={handleImageChange}/>
      <button onClick={ handleImageDelete }>unload</button>
    </label>
  </>)
}


EntryImageInput.propTypes = {
  name:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  deleter:PropTypes.func.isRequired,
  index: PropTypes.number,
}
