import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'

export default function FieldName({ getter, setter }){

  const { singleUpdate, singleDelete } = useHandler(setter, 'name')

  return (
    <Input 
      type="text" 
      name="name"
      value={getter.name} 
      onChange={singleUpdate} 
      deleter={singleDelete} />
  )
}

FieldName.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
