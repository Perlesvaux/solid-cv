import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import Input from './Input.jsx'

export default function FieldTitle({ getter, setter }){

  const { singleUpdate } = useHandler(setter, 'title')

  return (
    <Input 
      type="text" 
      name="title" 
      value={getter.title} 
      onChange={singleUpdate} 
      placeholder="Big Boss - CEO of Diamond Dogs"
     />
  )
}

FieldTitle.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};

