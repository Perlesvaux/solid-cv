import PropTypes from 'prop-types'
import {useHandler} from './Lib.js'
import InputJSON from './InputJSON.jsx'

export default function DumpLoader ({getter, setter}) {
  const {dump} = useHandler(setter)

  return (<InputJSON
    name="Load From File"
    changer={dump}
  />)

}

DumpLoader.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func,
}
