import mulher_modelo_2 from "../assets/mulher_modelo_2.png"
import mulher_modelo_escritorio from '../assets/mulher_modelo_escritorio.png'
const SobreMim=()=>{
    return(
        <section className="pt-[100px] pb-[100px] flex justify-center" id="sobre_mim" >
  <div className="w-[1300px] h-auto text-white flex justify-between max-md:flex-col max-md:w-full">
        
        <div className="flex-1 h-[500px] flex items-center relative">
            <div className="w-[500px] h-full rounded-[50%]  overflow-hidden ">
                <div className="w-[200px] h-[200px] absolute bg-black bottom-0 max-md:bottom-[-20px] max-md:right-0 right-[60px] rounded-[50%] border-[20px] border-white flex justify-center items-center shadow-2xl">
                    <p className="minhaFonte">Viva sua melhor versão!</p>
                </div>

             <img className="w-full  object-cover" src={mulher_modelo_escritorio}alt="" />   
            </div>
        </div>

        <div className="flex-1 h-[500px] flex flex-col justify-center p-[10px]">
            <p className="text-black font-bold text-[20px]">Sobre Mim -----</p>
            <p className="text-black font-bold text-[50px]">Amanda Martins</p>
            <div className="flex flex-col gap-[30px] text-[rgb(84,84,84)]">
                <p>Sou Terapeuta Cognitivo Comportamental (TCC), habilitada por Pós-Graduação na área. Realizo atendimentos individuais para adultos na modalidade presencial e online.</p>
                <p>Meu propósito é acompanhar sua evolução para o caminho que lhe traga mais felicidade, através de acolhimento e escuta, proporcionando um ambiente onde você seja o protagonista da sua vida e de suas decisões, sem julgamento.</p>
                <p>Hoje possuo consultório particular, e atendo demandas de autoconhecimento, ansiedade, depressão, luto, estresse, distúrbios do sono, habilidades emocionais, entre outros. Traga seus objetivos e sua história para trabalharmos juntos na sua evolução!</p>
            </div>
        </div>

  </div>
</section>
    )
}

export default SobreMim