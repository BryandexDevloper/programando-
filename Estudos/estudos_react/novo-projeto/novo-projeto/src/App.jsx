import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header.jsx'




function App() {
  const link = 'https://i.pinimg.com/736x/ca/90/b5/ca90b576fa704a912bf7c0331c8aff25.jpg'
  const [logado,useLogado] = useState(false)
  return (
    
    <Header logado={logado}/>
    
  )
}

export default App
