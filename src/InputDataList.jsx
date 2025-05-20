import PropTypes from 'prop-types';

export default function InputDataList({ index, name, type, value, onChange, deleter, options }){

  return <>
    { name }
    <input data-index={index} list={options? `opt-${name}` : null } name={name} type={type} value={value} onChange={onChange} />
    { deleter && <button onClick={deleter}>X</button> }
    {
      options && 
      <datalist id={`opt-${name}`}>
        {options.map(( {icon, name}, indx )=> <option key={indx} value={icon}> {name} </option>)}
      </datalist>
    }
  </>
}

InputDataList.propTypes = {
  value: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  deleter:PropTypes.func,
  index: PropTypes.number,
  options:PropTypes.array,
}

