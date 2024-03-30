import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Galeria from './components/Galeria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><Galeria/> </div>
    </>
  )
}

export default App
