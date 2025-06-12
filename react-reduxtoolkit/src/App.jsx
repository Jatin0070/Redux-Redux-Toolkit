import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeView from './features/cake/CakeView'
import IceView from './features/icecream/Icecream'
import User from './features/user/User'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CakeView/>
    <IceView/>
    <User/>
    </>
  )
}

export default App
