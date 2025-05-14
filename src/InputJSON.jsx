import PropTypes from 'prop-types'
import { useRef } from 'react'

export default function InputJSON({ name, changer }){
  const ref = useRef(null)

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          if ('name' in json && 'email' in json && 'phone' in json) {
            changer(json);
          } else {
            alert('Invalid JSON format!');
          }
        } catch (error) {
          alert('Error reading JSON file!:', error);
        }
      };
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

