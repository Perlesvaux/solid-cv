import PropTypes from 'prop-types'
import { useRef } from 'react'
import css from './InputImage.module.css'
import cancel from './assets/cancel.svg'

export default function InputImage({ index, name, onChange, deleter }){
  const ref = useRef(null)

  const handleImageDelete = (event) => { 
    deleter(event)
    ref.current.value='' 
  }

  return(<>
    <label className={css.container}> 
      {name}
      <input data-index={index}  name={name} type='file' accept='image/*' ref={ref} onChange={onChange}/>
      <button data-index={index} data-part={name} onClick={ handleImageDelete }><img src={cancel} /></button>
    </label>
  </>)
}


InputImage.propTypes = {
  name:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  deleter:PropTypes.func.isRequired,
  index: PropTypes.number,
}
