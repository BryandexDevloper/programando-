import { useState } from "react"
import { useRef } from "react"
import Lista from "./lista_menu"
import TelaLogin from "./TelaLogin"
import icon_menu from '../assets/icon_menu.svg'
import MenuHamburguer from '../Components/MenuHamburguer'
import { MdRestaurantMenu } from "react-icons/md";
const Header=(props)=>{

  const [TelaLoginHtml , setTelaLoginHtml] = useState(false)
  let contador = useRef(0)

  

  const reload =()=>{
    window.location.reload()
  }
    const link = 'https://i.pinimg.com/736x/d4/3e/ff/d43eff50a5785f6ac2088cde92229358.jpg'
    return (
        <>
     <header className='bg-[rgba(0,0,0,0.49)] w-full h-[100px] flex justify-around items-center py-[10px] px-[20px]'>
      <div className='w-[100px] h-full bg-black border-2 border-black'><img src={link} className='object-cover w-full h-full'/></div>
     
    <div className='w-[60%] bg-white h-[40px] rounded-[8px]'>
      <input type='search' className='w-full h-full rounded-[8px] border-none p-[10px]' placeholder='Digite o nome de algum produto ex: Carro fiat...'/>
    </div>

        <MdRestaurantMenu className="size-20   text-red-500"  />


        {props.logado?(
          <>
          <ul className=' gap-[10px] font-bold  hidden md:flex'>
          <Lista func={reload} opcoes='Inicio'/>
          <Lista opcoes='Minha Conta'/>
          <Lista opcoes='Sair'/>
          </ul>
          <MenuHamburguer sgv={icon_menu}/>
          </>
          
        ):(
          <>
          <ul className=' gap-[10px] font-bold  hidden md:flex'>
          <Lista func={reload} opcoes='Inicio'/>
          <Lista func={()=>{  }} opcoes='Login'/>
          <Lista opcoes='Cadastrar-se'/>
          </ul>
          <MenuHamburguer func={()=>{setTelaLoginHtml(TelaLoginHtml ? false : true); contador.current++}} svg={icon_menu}/>
          </>
        )}  
     
     </header>

        {TelaLoginHtml &&( 
          <TelaLogin/>
        )}

       

    </>
    )
}

export default Header