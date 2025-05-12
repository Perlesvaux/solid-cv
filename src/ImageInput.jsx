import PropTypes from 'prop-types'
import { useRef } from 'react'

export default function ImageInput({ name, changer, index }){

  const ref = useRef(null)

  const imageToDataURL = (event, index) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => changer({type:"update education", value:reader.result, at:index, fieldname:name}) 
      console.log(file, file.name)
    }
  }

  const deleter = () => { changer({ type:"update education", value:"", at:index, fieldname:name }); ref.current.value='' }

  const handleImageChange = (e) => {
    imageToDataURL(e, index)
  }

  return(<>
    <label> {name}
      <input name={name} type="file" accept="image/*" ref={ref} onChange={handleImageChange}/>
      <button onClick={ deleter }>unload</button>
    </label>
  </>)
}


ImageInput.propTypes = {
  name:PropTypes.string.isRequired,
  changer:PropTypes.func.isRequired,
  index:PropTypes.number.isRequired,
}
