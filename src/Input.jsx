import PropTypes from 'prop-types'
export default function Input({ index, name, type, value, onChange, deleter }){

  return (<>
    <label>
      { name }
      <input data-index={index} name={name} type={type} value={value} onChange={onChange} />
      { deleter && <div onClick={deleter}>X</div> }
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
