import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useRef,useState,useEffect } from "react";

const Feedback = (props) => {
    
    const [current,setCurrent] = useState(0)
    
   setTimeout(()=>{
   
   Next()

   },5000)

   


    const Comentarios = [
        [
            {
                foto: "https://randomuser.me/api/portraits/men/1.jpg",
                nome: "Lucas Almeida",
                comentario: "O site me ajudou muito a entender minha ansiedade. Conteúdo claro e objetivo!"
            },
            {
                foto: "https://randomuser.me/api/portraits/women/2.jpg",
                nome: "Mariana Costa",
                comentario: "Muito fácil de navegar e os artigos são super úteis para o dia a dia."
            },
            {
                foto: "https://randomuser.me/api/portraits/men/3.jpg",
                nome: "Rafael Souza",
                comentario: "Gostei das dicas práticas para controlar o estresse, aplico diariamente."
            }
        ],
        [
            {
                foto: "https://randomuser.me/api/portraits/women/4.jpg",
                nome: "Camila Martins",
                comentario: "Os psicólogos recomendados são excelentes e as orientações funcionam."
            },
            {
                foto: "https://randomuser.me/api/portraits/men/5.jpg",
                nome: "Bruno Lima",
                comentario: "Conteúdo muito bom, senti diferença na minha rotina emocional."
            },
            {
                foto: "https://randomuser.me/api/portraits/women/6.jpg",
                nome: "Fernanda Rocha",
                comentario: "As sessões online são práticas e os artigos ajudam muito no autoconhecimento."
            }
        ],
        [
            {
                foto: "https://randomuser.me/api/portraits/men/7.jpg",
                nome: "Thiago Barbosa",
                comentario: "Recomendo para quem quer melhorar a saúde mental de forma simples."
            },
            {
                foto: "https://randomuser.me/api/portraits/women/8.jpg",
                nome: "Juliana Ferreira",
                comentario: "Os conteúdos são claros e bem explicativos, adorei!"
            },
            {
                foto: "https://randomuser.me/api/portraits/men/9.jpg",
                nome: "Gustavo Ribeiro",
                comentario: "Ajuda muito no autoconhecimento e no controle do estresse diário."
            }
        ],
        [
            {
                foto: "https://randomuser.me/api/portraits/women/10.jpg",
                nome: "Aline Silva",
                comentario: "O site é completo, com artigos que realmente ensinam técnicas de bem-estar."
            },
            {
                foto: "https://randomuser.me/api/portraits/men/11.jpg",
                nome: "Vitor Cardoso",
                comentario: "Gostei das recomendações de psicólogos e das dicas práticas."
            },
            {
                foto: "https://randomuser.me/api/portraits/women/12.jpg",
                nome: "Patrícia Gomes",
                comentario: "Simples de usar e muito informativo, recomendo!"
            }
        ],
        [
            {
                foto: "https://randomuser.me/api/portraits/men/13.jpg",
                nome: "Eduardo Nunes",
                comentario: "Os artigos sobre ansiedade e depressão são muito bem escritos."
            },
            {
                foto: "https://randomuser.me/api/portraits/women/14.jpg",
                nome: "Carla Mendes",
                comentario: "Senti que finalmente encontrei conteúdos confiáveis sobre psicologia."
            },
            {
                foto: "https://randomuser.me/api/portraits/men/15.jpg",
                nome: "André Oliveira",
                comentario: "A navegação é intuitiva e os textos são fáceis de compreender."
            }
        ],
        [
            {
                foto: "https://randomuser.me/api/portraits/women/16.jpg",
                nome: "Renata Dias",
                comentario: "Excelente site, recomendo para quem busca ajuda e orientação psicológica."
            },
            {
                foto: "https://randomuser.me/api/portraits/men/17.jpg",
                nome: "Felipe Santos",
                comentario: "Conteúdo prático e útil, já aplico algumas técnicas todos os dias."
            },
            {
                foto: "https://randomuser.me/api/portraits/women/18.jpg",
                nome: "Sofia Pinto",
                comentario: "Adorei a forma como os artigos são explicativos e motivadores."
            }
        ]
    ];

    const Next=()=>{
        setCurrent((current +1) % Comentarios.length )
    }

    const Prev=()=>{
        setCurrent((current -1 + Comentarios.length) % Comentarios.length  )
        
    }

    

    return (
        <section className="pb-[100px]" id="avaliacao">
            <div className="w-full h-auto px-[20px] py-[20px]">
                <p className="text-center text-blue-500 font-bold ">Avalições ----</p>
                <p className="text-[40px] text-blue-500 text-center">O que dizem os pacientes</p>
                <div className="w-full flex gap-[10px] justify-center relative">
                    {Comentarios[current].map((res, index) => {
                        return (
                            <div key={index} className="w-[400px] h-[150px] max-md:w-[100px] bg-white rounded-[8px] px-[10px] py-[20px]">
                                <div className="w-full flex justify-between h-auto ">
                                    <div className="flex">
                                        <IoMdStar className="size-7 text-yellow-300 max-md:size-3" />
                                        <IoMdStar className="size-7 text-yellow-300 max-md:size-3" />
                                        <IoMdStar className="size-7 text-yellow-300 max-md:size-3" />
                                        <IoMdStar className="size-7 text-yellow-300 max-md:size-3" />
                                        <IoMdStar className="size-7 text-yellow-300 max-md:size-3" />
                                    </div>
                                    <div>
                                        <FcGoogle className="size-7 max-md:size-3" />
                                    </div>

                                </div>

                                <div>
                                    <p className="max-md:text-[10px]">{res.comentario}</p>
                                </div>
                            </div>
                        )
                    })}

                    <div className="w-[1280px] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between  max-md:w-full">
                        <div className="w-[60px] h-[60px] bg-[rgba(100,100,100,0.5)] rounded-full cursor-pointer flex justify-center items-center"><FaChevronLeft onClick={Prev} className=" transition-all duration-200 ease-in-out size-6 hover:size-8" /></div>
                        <div className="w-[60px] h-[60px] bg-[rgba(100,100,100,0.5)] rounded-full cursor-pointer flex justify-center items-center"><FaChevronRight onClick={Next} className=" transition-all duration-200 ease-in-out size-6 hover:size-8" /></div>
                    </div>

                </div>
                <div className="flex w-full justify-center gap-[10px] pt-[10px] ">

                    {Comentarios[current].map((res, index) => {

                            

                        return (
                            <div key={index} className="w-[400px] h-auto  flex items-center gap-[10px] max-md:w-[100px]">
                                <div className="w-[50px] h-[50px] border-2 rounded-full max-md:w-[20px] max-md:h-[20px] ">
                                    
                                    {!res.foto ?
                                    <img className="rounded-full" src="https://th.bing.com/th/id/OIP.Rqw5f6J3R0bxYCe3HnMflQAAAA?w=177&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="" />:
                                    <img src={res.foto} className="rounded-full"/>    
                                }

                                </div>
                                 <p className="text-[18px] max-md:text-[12px]">{res.nome}</p>
                            </div>
                        )

                        

                    })}

                </div>
            </div>
        </section>
    )
}

export default Feedback