import PropTypes from 'prop-types'
import { useRef } from 'react'
//import {isValidJSON} from './Lib.js'

export default function InputJSON({ name, changer }){
  const ref = useRef(null)

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = changer
      reader.readAsText(file);
    }
  };

  return(<>
    <label> {name}
      <input type="file" accept="application/json" ref={ref} onChange={handleFileUpload}/>
    </label>
    <div onClick={()=>{ ref.current.value='' }}>X</div>
  </>)

}


InputJSON.propTypes = {
  name:PropTypes.string.isRequired,
  changer:PropTypes.func,
}

