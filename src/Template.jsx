import PropTypes from 'prop-types';
import TemplateSimple from './TemplateSimple.jsx'
import TemplateSpanishSimple from './TemplateSpanishSimple.jsx'
import {useState} from 'react'
import css from './Template.module.css'
import AreaImages from './AreaImages.jsx'

export default function Template ({getter}) {
  const [state, setState] = useState("select")

  const options = [
    "Simple (eng)", "Simple (spa)"
  ]

  const templateStyle = () =>{
    switch (state) {

      case "Simple (eng)":
        return <TemplateSimple getter={getter}/>

      case "Simple (spa)":
        return <TemplateSpanishSimple getter={getter}/>

    }

  }
  

  return <>

    <section className={css.container}>
      <div  className={css.templateSelection}>
        <select list="options" onChange={(e)=>setState(e.target.value)} value={state}>
          <option value="">-- Choose a Template! --</option>
          {options.map(( opt, indx )=> <option key={indx} value={opt}> {opt} </option>)}
        </select>
      </div>

      {templateStyle()}
      <AreaImages getter={getter} />
    </section>


    {console.log(state)}

  </>
}

Template.propTypes ={
  getter: PropTypes.object.isRequired,
}
