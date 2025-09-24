import mulher_conversando from '../assets/mulher_conversando.png'
import { FaWhatsapp } from "react-icons/fa";

const Tcc = () => {
  return (
    <section className="bg-white pt-[30px] sm:pt-[40px] lg:pt-[50px] pb-[30px] sm:pb-[40px] lg:pb-[50px]">
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-0">
        <div className="
          w-full max-w-[900px] 
          flex flex-col lg:flex-row justify-between 
          gap-[30px] sm:gap-[40px] lg:gap-[50px]
        ">
          
          {/* Seção da imagem */}
          <div className="
            w-full lg:flex-1 
            h-[250px] sm:h-[300px] lg:h-auto 
            bg-amber-100 rounded-[8px] overflow-hidden
          ">
            <img
              className='w-full h-full object-cover'
              src={mulher_conversando}
              alt="Mulher conversando - Terapia"
            />
          </div>
          
          {/* Seção do texto */}
          <div className="w-full lg:flex-1 flex flex-col justify-center gap-[15px] sm:gap-[18px] lg:gap-[20px]">
            <p className='font-bold text-[12px] sm:text-[13px] lg:text-[14px] text-blue-500'>
              SOBRE ----
            </p>
            
            <h2 className='font-bold text-[28px] sm:text-[34px] lg:text-[40px] text-blue-500 leading-tight'>
              Terapia Cognitivo Comportamental
            </h2>
             
            <p className='text-[rgba(74,74,74,0.62)] text-[13px] sm:text-[14px] leading-relaxed'>
              A TCC é a abordagem psicológica para o desenvolvimento da saúde mental e emocional. Possui maiores evidências científicas e resultados para melhorar questões como: Ansiedade, depressão, estresse, conflitos familiares e no trabalho e transtornos psicológicos.
            </p>
            
            <p className='text-[rgba(74,74,74,0.62)] text-[13px] sm:text-[14px] leading-relaxed'>
              Juntos, podemos traçar objetivos e encontrar o melhor caminho para seu desenvolvimento emocional, profissional, cognitivo, familiar, entre outros.
            </p>
            
            <p className='text-[rgba(74,74,74,0.62)] text-[13px] sm:text-[14px] leading-relaxed'>
              Durante sua evolução na terapia, traçamos objetivos, como melhora da qualidade do sono, equilíbrio e controle de emoções, alívio da ansiedade e estresse, melhora na sua energia e disposição, maior autoconhecimento, entre outros.
            </p>
             
            <button className="
              px-[15px] sm:px-[20px] py-[12px] sm:py-[15px] lg:py-[18px]
              bg-blue-500 text-white w-fit flex justify-center items-center 
              rounded-[8px] gap-[10px] sm:gap-[12px] transition-all duration-200 ease-in-out 
              hover:bg-blue-600 hover:scale-105 cursor-pointer 
              text-[13px] sm:text-[14px] lg:text-[16px] font-medium
            ">
              <FaWhatsapp className="size-5 sm:size-6 lg:size-7"/>
              <span>AGENDAR CONSULTA</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tcc
