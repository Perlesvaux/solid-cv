import PropTypes from 'prop-types';
export default function FieldPhone({ getter, setter }){

  const deleter = () => setter({type:"delete phone"})
  const updater = (e) => setter({type:"update phone", value:e.target.value})

  return (
    <label >
      phone
      <input type="tel" value={getter.phone} onChange={updater} />
      <button onClick={deleter}> delete </button>
    </label>
  )
}


FieldPhone.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
