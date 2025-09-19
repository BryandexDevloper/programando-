import { useState } from "react"

const Condicional=()=>{

    const [email,setEmail] = useState()
    const [userEmail,setUserEmail] = useState()
    const enviarEmail=(e)=>{
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    return(<div>
        <h2>Cadastre seu email</h2>
        <form>
            <input type='email' placeholder="Digite seu email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
             <button type="submit" onClick={enviarEmail}>Enviar email</button>
        </form>
        {userEmail ? (<h1>oi</h1>):(<h1>ola</h1>)}
    </div>)
}

export default Condicional