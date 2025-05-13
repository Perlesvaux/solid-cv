//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//import ImgUpload from './ImgUpload.jsx'
//import SillyForm from './SillyForm.jsx'
//
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

export default function App() {
  //const [count, setCount] = useState(0)

  const [state, action, blueprint] = useResume()

  const print = () => console.log(state)

  return (
    <>
      {
        //<FieldProfile getter={state} setter={action} />
        //  <FieldName getter={state} setter={action} />
        //  <FieldEmail getter={state} setter={action} />
        //  <FieldPhone getter={state} setter={action} />
          //<FieldExperience getter={state} setter={action} />
      //<FieldEducation getter={state} setter={action} />
      }
          <FieldSkills getter={state} setter={action} />
          <FieldLinks getter={state} setter={action} />
      <button onClick={print}> Sneak peek </button>
      <Dump getter={state} />
    </>
  )
}


      //<ImgUpload />
      //<SillyForm />
