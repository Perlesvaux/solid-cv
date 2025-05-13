import PropTypes from 'prop-types'
import { useRef } from 'react'

export default function EntryImageInput({ name, onChange, index, field }){

  const ref = useRef(null)

  const imageToDataURL = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => onChange({type:'update entry', field:field, value:reader.result, at:index, part:name}) 
      console.log(file, file.name)
    }
  }

  const deleter = () => { 
    onChange({ type:'update entry', field:field, value:'', at:index, part:name })
    ref.current.value='' 
  }

  const handleImageChange = (e) => {
    imageToDataURL(e)
  }

  return(<>
    <label> {name}
      <input name={name} type='file' accept='image/*' ref={ref} onChange={handleImageChange}/>
      <button onClick={ deleter }>unload</button>
    </label>
  </>)
}


EntryImageInput.propTypes = {
  name:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  index:PropTypes.number.isRequired,
  field:PropTypes.string.isRequired,
}
