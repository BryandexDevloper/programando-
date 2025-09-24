import Lista from "./Lista"
import logo_site from "../assets/logo_site.png"

const Header = () => {
    return (
        <header className="w-full h-[80px] sm:h-[90px] lg:h-[100px] flex justify-between lg:justify-around items-center py-[10px] px-4 sm:px-6 lg:px-0">
            {/* Logo e nome */}
            <div className="h-full flex gap-[8px] sm:gap-[10px] items-center px-[10px] cursor-pointer">
                <div className="w-[50px] sm:w-[60px] lg:w-[70px] h-full object-cover">
                    <img className="w-full h-full object-contain" src={logo_site} alt="Logo Amanda Martins" />
                </div>
                 
                <div>
                    <p className="text-[18px] sm:text-[22px] lg:text-[27px] text-white transition-all duration-200 ease-in-out hover:text-[20px] sm:hover:text-[24px] lg:hover:text-[30px] hover:scale-105 leading-tight">
                        Amanda Martins
                    </p>
                    <p className="text-[10px] sm:text-[11px] lg:text-[12px] text-white font-bold transition-all duration-200 ease-in-out hover:text-[12px] sm:hover:text-[14px] lg:hover:text-[16px] hover:font-black hover:scale-105 leading-tight">
                        Terapia Cognitivo Comportamental
                    </p>
                </div>
            </div>
             
            {/* Menu de navegação - oculto em telas pequenas */}
            <ul className="hidden lg:flex gap-[20px] text-white">
               <Lista link='#inicio' texto="inicio"/>
               <Lista link="#sobre_mim" texto="Sobre mim"/>
               <Lista link="#atendimento" texto="Atendimento"/>
               <Lista link='#avaliacao' texto="Avaliações"/>
               <Lista link='#contato' texto="Contato"/>
            </ul>

            {/* Menu hambúrguer para mobile - você pode implementar se necessário */}
            <div className="lg:hidden flex items-center">
                <button className="text-white p-2" aria-label="Menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header