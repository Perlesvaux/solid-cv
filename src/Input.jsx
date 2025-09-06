import PropTypes from 'prop-types'
import css from './Input.module.css'
export default function Input({ index, name, type, value, onChange, deleter, placeholder }){

  return (<>
    <label className={css.container}>
      { name }
      <textarea data-index={index} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} />
      { deleter && <button onClick={deleter}>X</button> }
    </label>
  </>)
}


Input.propTypes = {
  value: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  deleter:PropTypes.func,
  index: PropTypes.number,
  placeholder: PropTypes.string,
}
