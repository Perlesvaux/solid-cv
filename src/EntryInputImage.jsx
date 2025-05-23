import PropTypes from 'prop-types'
import { useRef } from 'react'

export default function EntryInputImage({ name, changer, deleter }){
  const ref = useRef(null)
  return(<>
    <label> {name}
      <input name={name} type="file" accept="image/*" ref={ref} onChange={changer}/>
      <button onClick={()=>{ deleter(); ref.current.value='' }}>unload</button>
    </label>
  </>)

}

EntryInputImage.propTypes = {
  name:PropTypes.string.isRequired,
  changer:PropTypes.func.isRequired,
  deleter:PropTypes.func.isRequired
}
