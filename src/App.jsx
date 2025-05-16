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

//import './App.css'
import css from './App.module.css'

export default function App() {
  //const [count, setCount] = useState(0)

  const [state, action, blueprint] = useResume()

  const print = () => console.log(state)

  return (
    <>
      <section className={css.form}>
        <h2>Contact</h2>
        <FieldName getter={state} setter={action} />
        <FieldEmail getter={state} setter={action} />
        <FieldPhone getter={state} setter={action} />
        <FieldLinks getter={state} setter={action} />

        <h2>Skills</h2>
        <FieldSkills getter={state} setter={action} />
        <h2>Experience</h2>
        <FieldExperience getter={state} setter={action} />
        <h2>Education</h2>
        <FieldEducation getter={state} setter={action} />

        <h2>Profile</h2>
        <FieldProfile getter={state} setter={action} />

        <h3>Output</h3>
        <button onClick={print}> Sneak peek </button>
        <Dump getter={state} />

        <h3>Input</h3>
        <DumpLoader getter={state} setter={action}/>
      </section>

      <Template getter={state} />
    </>

  )
}


      //<ImgUpload />
      //<SillyForm />
