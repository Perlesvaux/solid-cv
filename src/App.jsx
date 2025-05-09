import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import ImgUpload from './ImgUpload.jsx'
import SillyForm from './SillyForm.jsx'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImgUpload />
      <SillyForm />
    </>
  )
}

