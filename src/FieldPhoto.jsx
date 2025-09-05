import PropTypes from 'prop-types';
import {useHandler} from './Lib.js'
import InputImage from './InputImage.jsx'

export default function FieldPhoto({ getter, setter }){

  const { singleImageDelete, singleImageEdit } = useHandler(setter, 'photo')

  return (
      <>
      {getter.photo && <img src={getter.photo} />}
      <InputImage name='photo' onChange={singleImageEdit} deleter={singleImageDelete} /> 
      </>
  )
}

FieldPhoto.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func
};

