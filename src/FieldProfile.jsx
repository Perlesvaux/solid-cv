import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'

export default function FieldProfile({ getter, setter }){

  const { singleUpdate } = useHandler(setter, 'profile')

  return (
    <Input 
      type='text' 
      name='profile'
      value={getter.profile} 
      onChange={singleUpdate} 
      placeholder="Renowned special forces operative and mercenary commander. Founded U.S. Army Special Forces Unit FOXHOUND, along with the mercenary company Militaires Sans Frontières. Founding member of the Patriots."
    />
  )
}

FieldProfile.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
