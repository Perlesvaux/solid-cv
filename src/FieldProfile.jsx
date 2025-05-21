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
    />
  )
}

FieldProfile.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
