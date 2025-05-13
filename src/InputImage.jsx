import PropTypes from 'prop-types'
import { useRef } from 'react'

export default function InputImage({ index, name, onChange, deleter }){
  const ref = useRef(null)
  //const hasIndex = index !== null && index !== undefined

  const imageToDataURL = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => onChange(reader.result, index, name)
      console.log(file, file.name)
    }
  }

  const handleImageDelete = () => { 
    //hasIndex? deleter(index) : deleter()
    deleter(index, name)
    ref.current.value='' 
  }

  return(<>
    <label> {name}
      <input  name={name} type='file' accept='image/*' ref={ref} onChange={imageToDataURL}/>
      <button onClick={ handleImageDelete }>unload</button>
    </label>
  </>)
}


InputImage.propTypes = {
  name:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  deleter:PropTypes.func.isRequired,
  index: PropTypes.number,
}
