import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Hero from './components/Hero'
import SobreMim from './components/Sobre'
import Servicos from './components/Servicos'
import Tcc from './components/Tcc'
import Feedback from './components/Feedback'
import BeneficiosTerapia from './components/BeneficiosTerapia'
import SobreAtendimentos from './components/SobreAtendimentos'
import Faq from './components/FAQ'
import ContatoEmpresa from './components/ContatoEmpresa'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
     <Hero/>
     <SobreMim/>
     <Servicos/>
     <Tcc/>
     <Feedback/>
     <BeneficiosTerapia/>
     <SobreAtendimentos/>
     
     <section>
          <div className='w-full h-[200px]   bg-blue-300 flex justify-center items-center flex-col gap-[10px]'>
            <p className='text-[50px] text-white'>Instagram</p>
            <p className='px-[20px] py-[10px] bg-white rounded-[5px] cursor-pointer font-bold  transition-all duration-200 ease-in-out hover:px-[40px] '>Me siga no Instagram</p>
          </div>
     </section>

     <Faq/>
     <ContatoEmpresa/>  
     <Footer/>
    </>
    
  )
}

export default App
