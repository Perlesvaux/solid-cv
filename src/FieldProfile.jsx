import PropTypes from 'prop-types';

export default function FieldProfile({ getter, setter }){

  const deleter = () => setter({type:"delete profile"})
  const updater = (e) => setter({type:"update profile", value:e.target.value})

  return (
    <label >
      Profile
      <input type="text" value={getter.profile} onChange={updater} />
      <button onClick={deleter}> delete </button>
    </label>
  )
}

FieldProfile.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
    //{ deleter && <div onClick={deleter}>X</div> }
