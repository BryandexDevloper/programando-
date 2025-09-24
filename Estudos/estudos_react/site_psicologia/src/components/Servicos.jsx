import ListaServicos from "./Lista_Servicos"
import { FaWhatsapp } from "react-icons/fa";

const Servicos = () => {
  return (
    <section id="atendimento">
      <div className="w-full bg-amber-50 flex flex-col relative ">
        {/* Topo */}
        <div className="w-full bg-blue-500 flex justify-center items-center flex-col py-[40px] sm:py-[60px] lg:py-[80px]">
          <p className="text-[20px] font-bold">Serviços ----</p>
          <p className="text-[30px] sm:text-[40px] lg:text-[50px] font-bold text-white">
            Como posso ajudar?
          </p>
        </div>

        {/* Caixa central */}
        <div className="w-full bg-white flex justify-center pt-[100px]">
          <div className="
            w-full max-w-[900px] 
            bg-white rounded-[8px] shadow-2xl 
            px-[20px] sm:px-[30px] lg:px-[40px] py-[20px] 
            flex flex-col justify-center items-center gap-[20px] 
            -mt-[60px] sm:-mt-[100px] lg:-mt-[160px]
          ">
            {/* duas colunas que viram uma no mobile */}
            <div className="w-full flex flex-col lg:flex-row justify-between gap-[20px]">
              <ul className="flex flex-col gap-[20px] w-full lg:w-1/2">
                <ListaServicos texto="A ansiedade é uma reação natural ..." servicos="Ansiedade"/>
                <ListaServicos texto="A depressão é um distúrbio ..." servicos="Depressão"/>
                <ListaServicos texto="O estresse é uma realidade ..." servicos="Estresse"/>
                <ListaServicos texto="A TCC emerge como ..." servicos="Relacionamentos"/>
              </ul>
              <ul className="flex flex-col gap-[20px] w-full lg:w-1/2">
                <ListaServicos texto="A Terapia Cognitivo-Comportamental ..." servicos="Distúrbios do Sono"/>
                <ListaServicos texto="A TCC alcança resultados ..." servicos="Bipolaridade"/>
                <ListaServicos texto="A TCC é reconhecida ..." servicos="Conflitos Familiares"/>
                <ListaServicos texto="Autoconhecimento, como o termo ..." servicos="Autoconhecimento"/>
              </ul>
            </div>

            {/* Botão */}
            <button className="
              px-[15px] sm:px-[20px] py-[12px] sm:py-[15px] lg:py-[18px]
              bg-blue-500 rounded-[5px] text-white font-bold cursor-pointer 
              transition-all duration-200 ease-in-out 
              hover:scale-105 flex gap-[10px] items-center
              text-[14px] sm:text-[16px] lg:text-[18px]
            ">
              <FaWhatsapp className="size-5 sm:size-6 lg:size-7"/>
              AGENDAR CONSULTA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
