import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'

export default function FieldName({ getter, setter }){

  const { singlePropertyUpdate, singlePropertyDelete } = useHandler(setter, 'name')

  return (
    <Input 
      type="text" 
      name="name"
      value={getter.name} 
      onChange={singlePropertyUpdate} 
      deleter={singlePropertyDelete} />
  )
}

FieldName.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};
