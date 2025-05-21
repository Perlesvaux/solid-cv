import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'

export default function FieldEmail({ getter, setter }){

  const { singleUpdate } = useHandler(setter, 'email')

  return (
    <Input 
      type="email" 
      name="email" 
      value={getter.email} 
      onChange={singleUpdate} 
     />
  )
}

FieldEmail.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
