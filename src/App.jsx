//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//import ImgUpload from './ImgUpload.jsx'
//import SillyForm from './SillyForm.jsx'
//
import Template from './Template.jsx'
import {useResume} from './Lib.js'

import FieldProfile from './FieldProfile.jsx'
import FieldName from './FieldName.jsx'
import FieldEmail from './FieldEmail.jsx'
import FieldPhone from './FieldPhone.jsx'
import FieldSkills from './FieldSkills.jsx'
import FieldExperience from './FieldExperience.jsx'
import FieldEducation from './FieldEducation.jsx'
import FieldLinks from './FieldLinks.jsx'
import Dump from './Dump.jsx'
import DumpLoader from './DumpLoader.jsx'
import DumpPrint from './DumpPrint.jsx'
import FieldPhoto from './FieldPhoto.jsx'
//import AreaImages from './AreaImages.jsx'
//import TemplateSimple from './TemplateSimple.jsx'

//import './App.css'
import css from './App.module.css'

export default function App() {
  //const [count, setCount] = useState(0)

  const [state, action, blueprint] = useResume()

  const print = () => console.log(state)

  //return <>
  //  <AreaImages getter={state} />
  //</>
  //console.log(state)
  print()


  return (
    <main className={css.container}>

      <div className={css.screen}>

      <section className={css.form}>

        <div className={css.field}>
          <h2>Basic info</h2>
          <FieldPhoto getter={state} setter={action} />
          <FieldName getter={state} setter={action} />
          <FieldEmail getter={state} setter={action} />
          <FieldPhone getter={state} setter={action} />
          <FieldProfile getter={state} setter={action} />
        </div>

        <div className={css.field}>
          <h2>External Links</h2>
          <FieldLinks getter={state} setter={action} />
        </div>

        <div className={css.field}>
          <h2>Skills</h2>
          <FieldSkills getter={state} setter={action} />
        </div>

        <div className={css.field}>
          <h2>Experience</h2>
          <FieldExperience getter={state} setter={action} />
        </div>

        <div className={css.field}>
          <h2>Education</h2>
          <FieldEducation getter={state} setter={action} />
        </div>
      </section>




      <Template getter={state} />


      </div>

      <section className={css.dashboard}>
        <DumpLoader getter={state} setter={action}/>
        <Dump getter={state} />
        <DumpPrint/>
      </section>

    </main>

  )

}
