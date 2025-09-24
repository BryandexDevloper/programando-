import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header.jsx'
import Listaa from './Components/Lista.jsx'
import MostrarProdutos from './Components/Produtos.jsx'
import SeuNome from './Components/SeuNome.jsx'



function App() {
  const link = 'https://i.pinimg.com/736x/ca/90/b5/ca90b576fa704a912bf7c0331c8aff25.jpg'
  const [logado,useLogado] = useState(false)
  const [Nome,SetNome] = useState()

  const MeusProdutos = [
    { titulo: 'Celular iPhone 128GB', valor: 2590, freteGratis: false, imagem: 'https://via.placeholder.com/150?text=iPhone' },
    { titulo: 'Notebook Dell Inspiron 15', valor: 3899, freteGratis: true, imagem: 'https://via.placeholder.com/150?text=Dell+Notebook' },
    { titulo: 'Fone de Ouvido Bluetooth JBL', valor: 299, freteGratis: true, imagem: 'https://via.placeholder.com/150?text=JBL+Fone' },
    { titulo: 'Monitor LG 24 polegadas', valor: 899, freteGratis: false, imagem: 'https://via.placeholder.com/150?text=Monitor+LG' },
    { titulo: 'Teclado Mecânico Redragon', valor: 350, freteGratis: true, imagem: 'https://via.placeholder.com/150?text=Teclado+Redragon' },
    { titulo: 'Mouse Gamer Logitech', valor: 199, freteGratis: true, imagem: 'https://via.placeholder.com/150?text=Mouse+Logitech' },
    { titulo: 'Cafeteira Elétrica Philips', valor: 480, freteGratis: false, imagem: 'https://via.placeholder.com/150?text=Cafeteira+Philips' },
    { titulo: 'Ventilador de Mesa Arno', valor: 230, freteGratis: true, imagem: 'https://via.placeholder.com/150?text=Ventilador+Arno' },
    { titulo: 'Smartwatch Samsung Galaxy Watch', valor: 1250, freteGratis: false, imagem: 'https://via.placeholder.com/150?text=Galaxy+Watch' },
    { titulo: 'Aspirador de Pó Electrolux', valor: 670, freteGratis: true, imagem: 'https://via.placeholder.com/150?text=Aspirador+Electrolux' }
];
  
  return (
    <>
    <Header logado={logado}/>
    <Listaa/>
    <MostrarProdutos MeusProdutos={MeusProdutos}/>
    <MostrarProdutos MeusProdutos={[]}/>
    <h1>State lift</h1>
    <SeuNome setNome={SetNome}/>
    {Nome}
    </>
  )
}

export default App
