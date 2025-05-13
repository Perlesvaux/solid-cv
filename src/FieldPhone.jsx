import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'

export default function FieldPhone({ getter, setter }){

  const { singleUpdate, singleDelete } = useHandler(setter, 'phone')

  return (
    <Input 
      type="tel" 
      name="phone" 
      value={getter.phone} 
      onChange={singleUpdate} 
      deleter={singleDelete} />
  )
}


FieldPhone.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
