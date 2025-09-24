import escritorio_bg_2 from '../assets/escritorio_bg_2.png';
import mulher_modelo_cruzado from '../assets/mulher_modelo_cruzado.png';
import { FaWhatsapp } from "react-icons/fa";
import { GrWaypoint } from "react-icons/gr";
import Mapa from './Mapa';

const ContatoEmpresa = () => {
    return (
        <section id='contato'>
            <div className="w-full h-[400px] relative">
                <div 
                    style={{ backgroundImage: `url(${escritorio_bg_2})`, backgroundAttachment: 'fixed' }} 
                    className="w-full h-full absolute bg-top bg-no-repeat bg-cover"
                ></div>
                <div className="w-full h-full absolute bg-[rgba(0,132,255,0.29)] top-0 z-50 flex justify-center items-center gap-[10px]">
                    <div className="hidden md:block w-[20%] h-full relative">
                        <img 
                            className="h-[430px] absolute -top-[30px]" 
                            src={mulher_modelo_cruzado} 
                            alt="" 
                        />
                    </div>
                    <div className="w-[90%] md:w-[20%] h-full flex flex-col justify-center items-center md:items-start py-[10px] space-y-3 md:space-y-5">
                        <p className="text-[24px] md:text-[40px] text-white text-center">Contato</p>
                        <p className="text-[14px] md:text-[18px] flex gap-[5px] items-center text-white">
                            <FaWhatsapp className="size-4 md:size-5 text-green-500"/> 
                            (xx)-xxxx-xxxx-xxx
                        </p>
                        <p className="text-[14px] md:text-[18px] flex gap-[5px] items-center text-white">
                            <GrWaypoint className="size-6 md:size-8 text-red-500" /> 
                            R. Professor Roberto José, 100 <br/>
                            Subsetor Sul - 5 (S-5), Ribeirão Preto-SP, 14026-562
                        </p>
                        <div className="hidden md:block w-full h-full overflow-hidden rounded-[8px]">
                            <Mapa />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContatoEmpresa;