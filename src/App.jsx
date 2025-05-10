//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//import ImgUpload from './ImgUpload.jsx'
//import SillyForm from './SillyForm.jsx'
//
import {useResume} from './Lib.js'

import FieldProfile from './FieldProfile.jsx'

export default function App() {
  //const [count, setCount] = useState(0)

  const [state, action, blueprint] = useResume()

  return (
    <>
      <FieldProfile getter={state} setter={action} />
    </>
  )
}


      //<ImgUpload />
      //<SillyForm />
