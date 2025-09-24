import React from "react";
import { useState } from "react";

const MostrarProdutos = ({MeusProdutos}) => {
    const [valor,setValor] = useState(0)

    const toggle=()=>{
        if(valor){
            setValor(false)
        }else{
            setValor(true)
        }
    }

    



    return (
        <div className="flex w-full justify-items-start gap-[10px]   py-[10px] px-[20px] overflow-x-auto">

            {
               MeusProdutos.length > 0 ? (
                 MeusProdutos.map((res, index) => {
                    return (
                        <div key={index} className="w-[130px] h-[200px] bg-white rounded-[8px] border-2 border-black flex-none flex-col flex gap-[5px]">
                            <div className="w-full h-[80px] border-[1px]">
                                <img src="" alt={res.titulo} />
                            </div>
                            <p className="w-full  p-[5px] border-1 border-black text-[10px]" >{res.titulo}</p>
                            <p className="px-[10px]"><strong>R${res.valor}</strong></p>
                            {res.freteGratis?<p className="mx-auto w-[110px] px-[5px] py-[5px] bg-green-600 rounded-[8px] text-[12px] text-black font-bold cursor-pointer" onClick={()=>{toggle()}}>Tem frete gratis</p>:<p className="mx-auto w-[110px] px-[5px] py-[5px] bg-red-600 rounded-[8px] text-[12px] text-white font-bold cursor-pointer">Não tem frete gratis</p>} 
                             {valor ?<p>ola</p>:<p>oi</p>}
                        </div>
                    )
                })
               ):(<div className="w-[20px] h-[20px]  ">
                <img src="https://media.tenor.com/WX_LDjYUrMsAAAAi/loading.gif" className="w-full" ></img>
               </div>)
            }

        </div>

       

    )
}

export default MostrarProdutos