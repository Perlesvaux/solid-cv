import PropTypes from 'prop-types';
import TemplateSimple from './TemplateSimple.jsx'
import {useState} from 'react'
import css from './Template.module.css'

export default function Template ({getter}) {
  const [state, setState] = useState("")

  const options = [
    "simple", "cute"
  ]

  const templateStyle = () =>{
    switch (state) {
      case "simple":
        return <TemplateSimple getter={getter}/>
    }

  }
  

  return <>

    <section className={css.templateSelection}>
      <input list="options" onChange={(e)=>setState(e.target.value)} />

      <datalist id="options">
        {options.map(( opt, indx )=> <option key={indx} value={opt}> {opt} </option>)}
      </datalist>
    </section>


      {templateStyle()}

  </>
}

Template.propTypes ={
  getter: PropTypes.object.isRequired,
}
