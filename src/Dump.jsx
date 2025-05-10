import PropTypes from 'prop-types'
import  {downloadJSON} from './Lib.js'
export default function Dump({getter}){

const handleSubmit = (e) => {
    e.preventDefault();
    downloadJSON(getter)
  }

  return (
  <>
    <form>
      <button onClick={handleSubmit}> download as json </button>
    </form>
  </>
  )
}


Dump.propTypes = {
  getter:PropTypes.object,
  setter:PropTypes.func,
}
