import PropTypes from 'prop-types'
import {useHandler} from './Lib.js'
import InputJSON from './InputJSON.jsx'
import post from './assets/post.svg'

export default function DumpLoader ({getter, setter}) {
  const {dump} = useHandler(setter)

  return (<InputJSON
    name="load"
    icon={post}
    changer={dump}
  />)

}

DumpLoader.propTypes = {
  getter: PropTypes.object,
  setter: PropTypes.func,
}
