import { useState } from "react";
import { IoMdVideocam } from "react-icons/io";
import escritorio1 from "../assets/escritorio1.png";
import escritorio2 from "../assets/escritorio2.png";
import escritorio3 from "../assets/escritorio3.png";
import { GrWaypoint } from "react-icons/gr";


const TipoAtendimento = () => {
  const [Togge, setToggle] = useState(false);

  return (
    <div className="w-[70%] h-auto ">
      <div className="flex gap-[10px] max-md:flex-col max-md:h-[100px]">
        <div
          className={`flex-1 h-[60px] ${
            !Togge ? "bg-blue-500" : "bg-white "
          } cursor-pointer border-2 border-black rounded-[5px] flex justify-center items-center`}
          onClick={() => {
            setToggle(false);
            console.log(Togge);
          }}
        >
          <p
            className={`flex items-center gap-[10px] text-[20px] ${
              Togge ? "text-black" : "text-white"
            }`}
          >
            {" "}
            <IoMdVideocam className="size-8" /> Atendimento On-line
          </p>
        </div>
        <div
          className={`flex-1 h-[60px] ${
            Togge ? "bg-blue-500" : "bg-white "
          } cursor-pointer border-2 border-black rounded-[5px] flex justify-center items-center`}
          onClick={() => {
            setToggle(true);
            console.log(Togge);
          }}
        >
          <p
            className={`flex items-center gap-[10px] text-[20px] ${
              !Togge ? "text-black" : "text-white"
            }`}
          >
            {" "}
            <GrWaypoint className="size-8" /> Atendimento Presencial
          </p>
        </div>
      </div>
      {Togge ? (
        <div className="p-[15px] flex justify-center  gap-[20px] flex-col">
          <p className="text-gray-400 text-[14px]">
            Se você busca um{" "}
            <strong className="text-[rgba(0,0,0,0.58)]">
              espaço acolhedor e sem julgamentos,
            </strong>{" "}
            para falar sobre suas angústias, medos, preocupações e tudo o que{" "}
            <br /> achar necessário, você encontrou.
          </p>
          <p className="text-gray-400 text-[14px]">
            Eu posso te ajudar nesse processo, pois meu principal objetivo é te
            auxiliar a desenvolver ferramentas para lidar com suas preocupações
            da forma mais leve possível, aumentando sua qualidade de vida e
            bem-estar.
          </p>
          <div className="w-full h-[200px]  flex gap-[10px]">
            <div className="flex-1 h-full bg-amber-50">
              <img
                src={escritorio1}
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
            <div className="flex-1 h-full bg-amber-50">
              <img
                src={escritorio2}
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
            <div className="flex-1 h-full bg-amber-50">
              <img
                src={escritorio3}
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-[10px]  flex flex-col justify-center gap-[20px]">
           <p className="text-gray-400 text-[14px]">A terapia online possui a mesma eficácia e qualidade da terapia presencial com a diferença de que a sessão é virtual.</p>
           <p className="text-gray-400 text-[14px]">Com um celular ou computador/notebook conectados à internet, nos falamos via videochamada e damos início às sessões. Essa modalidade proporciona mais conveniência, flexibilidade de horários e acessibilidade.</p>
           <p className="text-gray-400 text-[14px]">As sessões são individuais e o plano de tratamento é ajustado de acordo com a necessidade do paciente.</p>
        </div>
      )}
    </div>
  );
};

export default TipoAtendimento;
