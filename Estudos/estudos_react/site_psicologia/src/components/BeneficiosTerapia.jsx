import escritorio_imagem from '../assets/escritorio_imagem.png'
import { FaCheck } from "react-icons/fa6";


const BeneficiosTerapia=()=>{
    return(
        <section className="pt-[10px] ">
           <div className="w-full h-[300px] bg-white relative max-md:w-full">
                <div  style={{backgroundImage:`url(${escritorio_imagem})`}} className="w-full h-full bg-no-repeat bg-cover bg-top bg-fixed absolute"></div>
                <div className="w-full h-full bg-[rgba(83,170,150,0.8)] absolute z-1000 flex justify-around items-center max-md:flex-col max-md:justify-center max-md:items-center">
                    <div><p className='text-[40px] font-bold text-white max-md:text-[20px]'>TERAPIA TEM TUDO <br/> A VER COM:</p></div>
                    <div>
                        <ul className='flex flex-col gap-[10px]'>
                            <li className='flex items-center gap-[10px]' > <p className='p-[10px] bg-blue-500 rounded-full max-md:p-[5px]'><FaCheck className='size-8 text-white max-md:size-3' /></p> <p className='text-white text-[20px] max-md:text-[12px]'>Equilíbrio e controle de suas emoções</p></li>
                            <li className='flex items-center gap-[10px]' > <p className='p-[10px] bg-blue-500 rounded-full max-md:p-[5px]'><FaCheck className='size-8 text-white max-md:size-3' /></p> <p className='text-white text-[20px] max-md:text-[12px]'>Alívio da ansiedade e estresse</p></li>
                            <li className='flex items-center gap-[10px]' > <p className='p-[10px] bg-blue-500 rounded-full max-md:p-[5px]'><FaCheck className='size-8 text-white max-md:size-3' /></p> <p className='text-white text-[20px] max-md:text-[12px]'>Melhor qualidade do sono</p></li>
                        </ul>
                        </div>
                </div>
           </div>
        </section>
    )
}
export default BeneficiosTerapia