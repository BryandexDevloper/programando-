import Button from "./Events/Button"
const Evento=()=>{

    const meuEvento=()=>{
        console.log("Ativando meu primeiro evento")
        alert("ativando meu promeiro evento")
    }

    const segundoEvento=()=>{
        console.log("Ativando segundo evento")
        alert("Ativando sengundo evento")
    }

    return(
        <div>
            <p className="macaco">Clique para dispara evento</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text='Segundoenvento'/>
        </div>
    )
}

export default Evento