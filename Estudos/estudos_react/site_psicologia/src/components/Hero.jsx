import Header from "./header";
import mulher_modelo from "../assets/mulher_modelo.png";
import logo_site from "../assets/logo_site.png";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePsychology } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center gap-5 h-[700px] sm:h-[600px] md:h-[650px] lg:h-[700px]" id='inicio'>
      {/* Fundo com blur */}
      <div className="h-[700px] sm:h-[600px] md:h-[650px] lg:h-[700px] absolute inset-0 bg-[url('https://i.pinimg.com/1200x/2d/c1/f2/2dc1f2f0b6e52f0c0a3b63ce13f88f7d.jpg')] bg-no-repeat bg-cover bg-center blur-[4px] z-0"></div>
       
      {/* Conteúdo do section */}
      <div className="relative z-10 w-full flex flex-col items-center gap-5 px-4 sm:px-6 lg:px-0">
        <Header />
        
        {/* Container principal */}
        <div className="w-full max-w-[1200px] h-auto lg:h-[500px] flex flex-col lg:flex-row relative">
          {/* Seção de texto */}
          <div className="w-full lg:w-[800px] h-auto lg:h-full flex flex-col justify-center gap-2.5 mb-8 lg:mb-0 px-4 lg:px-0">
            <p className="text-xs sm:text-sm text-black font-bold">BEM-VINDO(A) -----</p>
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
              <strong>Amanda Martins </strong>
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
              Terapeuta Cognitivo Comportamental
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base max-w-[600px]">
              Ferramentas para atingir seus objetivos de forma leve, aumentando sua qualidade de vida e bem-estar.
            </p>
            <button className="bg-white cursor-pointer rounded-md w-[200px] sm:w-[220px] h-[50px] flex justify-center items-center gap-1.5 transition-all duration-200 ease-in-out hover:text-lg sm:hover:text-xl hover:w-[230px] sm:hover:w-[250px] mt-4">
              <FaWhatsapp size="20" />
              <span className="text-sm sm:text-base">Agendar Consulta</span>
            </button>
          </div>
           
          {/* Seção de imagens */}
          <div className="w-full lg:w-[100%] h-[250px] sm:h-[300px] md:h-[350px] lg:h-full flex relative">
            {/* Imagem da mulher */}
            <div className="w-[50%] sm:w-[40%] md:w-[35%] lg:w-[60%] h-full absolute top-0 left-2 sm:left-4 md:left-6 lg:left-24 object-cover">
              <img className="w-full h-full object-cover lg:object-contain" src={mulher_modelo} alt="Amanda Martins" />
            </div>
            {/* Logo do site */}
            <div className="w-[50%] sm:w-[45%] md:w-[40%] lg:w-[50%] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[350px] absolute top-4 sm:top-6 md:top-8 lg:top-16 right-2 sm:right-4 md:right-6 lg:right-0 object-cover">
              <img className="w-full h-full object-cover lg:object-contain opacity-60 lg:opacity-80" src={logo_site} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Cards inferiores */}
      <div className="w-[95%] sm:w-[90%] lg:w-[1300px] h-auto lg:h-[110px] bg-white absolute bottom-[-80px] sm:bottom-[-60px] lg:bottom-[-30px] rounded-md z-50 flex flex-col lg:flex-row shadow-2xl">
        
        {/* Card 1 */}
        <div className="border-b lg:border-b-0 lg:border-r border-[rgba(144,144,144,0.63)] h-auto lg:h-full flex-1 px-5 py-4 lg:py-2.5 flex gap-2.5 items-center justify-start">
          <GoPeople className="w-10 h-10 lg:w-12 lg:h-12 text-blue-400 flex-shrink-0" />
          <p className="text-gray-600 text-sm lg:text-base">
            Atendimento <strong>Online e Presencial</strong><br />
            Ribeirão Preto-SP
          </p>
        </div>
         
        {/* Card 2 */}
        <div className="border-b lg:border-b-0 lg:border-r border-[rgba(144,144,144,0.63)] h-auto lg:h-full flex-1 px-5 py-4 lg:py-2.5 flex gap-2.5 items-center justify-start">
          <IoPersonOutline className="w-10 h-10 lg:w-12 lg:h-12 text-blue-400 flex-shrink-0" />
          <p className="text-gray-600 text-sm lg:text-base">
            Atendimentos <strong>Individuais</strong><br />
            para Adultos
          </p>
        </div>
         
        {/* Card 3 */}
        <div className="h-auto lg:h-full flex-1 px-5 py-4 lg:py-2.5 flex gap-2.5 items-center justify-start">
          <MdOutlinePsychology className="w-10 h-10 lg:w-12 lg:h-12 text-blue-400 flex-shrink-0" />
          <p className="text-gray-600 text-sm lg:text-base">
            Terapia <strong>Cognitivo Comportamental</strong><br />
            (TCC)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;