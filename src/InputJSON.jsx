import PropTypes from 'prop-types'
import { useRef } from 'react'
//import {isValidJSON} from './Lib.js'
//import cancel from './assets/cancel.svg'
import css from './InputJSON.module.css'

export default function InputJSON({ changer, name, icon }){
  const ref = useRef(null)

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = changer
      reader.readAsText(file);
    }
  };

  return(
      <label htmlFor={name} className={css.container}> 
        <img src={icon}/>
        <input id={name} type="file" accept="application/json" ref={ref} onChange={handleFileUpload} style={{display:"none"}}/>
      </label>
  )

}

    //<button onClick={()=>{ ref.current.value='' }}><img src={cancel}/></button>

InputJSON.propTypes = {
  changer:PropTypes.func,
  name:PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired,
}

