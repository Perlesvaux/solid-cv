import PropTypes from 'prop-types'
import { useRef } from 'react'

export default function InputImage({ index, name, onChange, deleter }){
  const ref = useRef(null)
  //const hasIndex = index !== null && index !== undefined

  const handleImageDelete = (event) => { 
    deleter(event)
    ref.current.value='' 
  }

  return(<>
    <label> {name}
      <input data-index={index}  name={name} type='file' accept='image/*' ref={ref} onChange={onChange}/>
      <button data-index={index} data-part={name} onClick={ handleImageDelete }>unload</button>
    </label>
  </>)
}


InputImage.propTypes = {
  name:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  deleter:PropTypes.func.isRequired,
  index: PropTypes.number,
}
