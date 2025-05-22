import PropTypes from 'prop-types';
import TemplateSimple from './TemplateSimple.jsx'
import {useState} from 'react'
import css from './Template.module.css'

export default function Template ({getter}) {
  const [state, setState] = useState("select")

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
      <select list="options" onChange={(e)=>setState(e.target.value)} value={state}>
        <option value="">-- Choose a Template! --</option>
        {options.map(( opt, indx )=> <option key={indx} value={opt}> {opt} </option>)}
      </select>
    </section>


    {console.log(state)}
      {templateStyle()}

  </>
}

Template.propTypes ={
  getter: PropTypes.object.isRequired,
}
