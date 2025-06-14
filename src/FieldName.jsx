import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'

export default function FieldName({ getter, setter }){

  const { singleUpdate } = useHandler(setter, 'name')

  return (
    <Input 
      type="text" 
      name="name"
      value={getter.name} 
      onChange={singleUpdate} 
      placeholder="John Doe"
      />
  )
}

FieldName.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
