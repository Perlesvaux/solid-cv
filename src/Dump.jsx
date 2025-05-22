import PropTypes from 'prop-types'
import  {downloadJSON} from './Lib.js'
import download from './assets/download.svg'
import css from './Dump.module.css'

export default function Dump({getter}){

const handleSubmit = (e) => {
    e.preventDefault();
    downloadJSON(getter)
  }

  return (
  <>
    <form>
      <button onClick={handleSubmit} className={css.container}> <img src={download} /> </button>
    </form>
  </>
  )
}


Dump.propTypes = {
  getter:PropTypes.object,
  setter:PropTypes.func,
}
