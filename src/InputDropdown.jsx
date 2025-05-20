import PropTypes from 'prop-types';
import {useState} from 'react'

import right from './assets/right.svg'

export default function InputDropdown({ index, name, type, value, onChange, deleter, options }){

  const [state, setState] = useState(()=> value ? value : right)
  const [isVisible, setIsVisible] = useState(false)

  const selectIcon = (e) => {
    onChange(e)
    setState(e.currentTarget.dataset.value)
    setIsVisible(false)
  }

  const toggle = () => setIsVisible(!isVisible)

  return <>
    { name }
    <button onClick={toggle} > <img src={state} /> </button>
    { deleter && <button onClick={deleter}>X</button> }
    {
      options && isVisible &&
      <>
        {options.map(( {icon, tag}, indx ) => 
            <button key={indx} data-index={index} data-value={icon} name={name} onClick={selectIcon} title={tag} > 
              <img src={icon} alt={tag} /> 
            </button>)}
      </>
    }
  </>
}

InputDropdown.propTypes = {
  value: PropTypes.string,
  name:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  deleter:PropTypes.func,
  index: PropTypes.number,
  options:PropTypes.array,
}

