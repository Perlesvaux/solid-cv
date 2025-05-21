import PropTypes from 'prop-types'
import css from './Input.module.css'
export default function Input({ index, name, type, value, onChange, deleter }){

  return (<>
    <label className={css.container}>
      { name }
      <input data-index={index} name={name} type={type} value={value} onChange={onChange} />
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
}
