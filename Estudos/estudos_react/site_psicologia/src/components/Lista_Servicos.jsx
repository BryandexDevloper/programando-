import { LuChevronDown,LuChevronUp  } from "react-icons/lu";


import { useState } from "react";
const ListaServicos = (props) => {
    const [toggle,setToggle] = useState(false)
    const MostrarServico=()=>{

       toggle?setToggle(false):setToggle(true)  
        
      
    }

    

    return (
        <>
        <li onClick={MostrarServico} className={`text-[20px]  border-[1px] border-blue-500 flex flex-col rounded-[8px] cursor-pointer hover:text-blue-500 ${toggle?"bg-amber-50":""}`}>
            <div className="w-full flex justify-between px-[20px] py-[10px]">
                 {props.servicos} 
                {toggle?(
                    <LuChevronDown  className="size-7"/>
                ):( <LuChevronUp className="size-7"/> )}

            </div>
             {toggle && (
                
            <div className="w-full h-auto border-[1px] border-[rgb(84,84,84)] rounded-[5px] p-[10px]">
                <p className="text-[rgb(84,84,84)] text-[12px]">{props.texto}</p>
            </div>
       )}
        </li>
        </>
    )
}

export default ListaServicos