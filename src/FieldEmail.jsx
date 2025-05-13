import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'

export default function FieldEmail({ getter, setter }){

  const { singleUpdate, singleDelete } = useHandler(setter, 'email')

  return (
    <Input 
      type="email" 
      name="email" 
      value={getter.email} 
      onChange={singleUpdate} 
      deleter={singleDelete} />
  )
}

FieldEmail.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};

//FieldEmail.propTypes = {
//
//  name: PropTypes.string.isRequired,
//
//  children: PropTypes.node
//
//};
