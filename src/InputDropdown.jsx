import PropTypes from 'prop-types';
//import {useState} from 'react'
//import {useState, useEffect, useRef} from 'react'
import {useDropdownHandler} from './Lib.js'

import css from './InputDropdown.module.css'


export default function InputDropdown({ index, name, type, value, onChange, deleter, options }){

  const { selection, toggle, selectIcon, isVisible, dropDownRef } = useDropdownHandler(value, onChange)

  return <div>
  <label className={css.container}>
    { name }
    <button ref={dropDownRef} onClick={toggle} className={css.toggle}> <img src={selection} className={css.toggleImage}/> </button>
  </label>
    {
      options && isVisible &&
      <div className={css.options}>
        {options.map(( {icon, tag}, indx ) => 
          <button key={indx} data-index={index} data-value={icon} name={name} onClick={selectIcon} title={tag}> 
            <img src={icon} alt={tag} /> 
          </button>)}

        { deleter && <button onClick={deleter}>X</button> }
      </div>
    }
  </div>
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

