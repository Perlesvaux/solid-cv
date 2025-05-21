import PropTypes from 'prop-types'
import css from './InputOkClear.module.css'
import add from './assets/add.svg'
import cancel from './assets/cancel.svg'

export default function InputOkClear({ ok, clear }){

  return <div className={css.container}>
    <button onClick={ok} className={css.ok}> <img src={ add } /> </button>
    <button onClick={clear} className={css.clear}> <img src={ cancel } /> </button>
  </div>
}

InputOkClear.propTypes = {
  ok:PropTypes.func,
  clear:PropTypes.func,
}
