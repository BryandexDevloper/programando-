import { useState,useRef } from "react"


const Formulario=()=>{

const cadastrarUsuario=(e)=>{
    console.log(name)
    e.preventDefault()
    console.log(senha)
    limparCampo()
    setAparecer(name)
}

const limparCampo=()=>{
    
    setName("")
    setSenha("")
}
    let contador = useRef(0)
const limparAparecer=()=>{
    
    

    if(!contador.current > 0){
    contador.current++
    console.log(contador)
    setAparecer("")
    }
}

const [name,setName] = useState("Bryan")
const [senha,setSenha] = useState()
const [aparecer,setAparecer] = useState(name)
return(
    <div>
        <h1>Meu cadadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="input_text">Nome</label>
                <input id="input_text" value={name} type='text' placeholder="Digite algo" onChange={(e)=>setName(e.target.value)} ></input>
            </div>
            <div>
                <label htmlFor="input_senha">Senha</label>
                <input id="input_senha" value={senha} type="password" placeholder="Digite sua senha" onChange={(e)=>{setSenha(e.target.value)}}></input>
            </div>
            <div>
                <input  type='submit' value='Cadastrar'></input>
            </div>
        </form>
        <p onClick={limparAparecer}>{aparecer}</p>
    </div>
)
}

export default Formulario