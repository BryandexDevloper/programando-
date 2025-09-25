import { useParams ,useNavigate} from "react-router-dom"



const ContactDetails=()=>{
    const {id,nome,telefone} = useParams()
    const navGation = useNavigate()

    const Redirecionar=()=>{
        console.log("Redirecinando...")
        setTimeout(()=>{
                navGation('/')
        },3000)
    }
    return(
            <div>
                <h1>ContactDetails</h1>
                <p>Exibindo mais informaçoes sobre o id {id}: nome: {nome} telefone: {telefone}</p>
                <button onClick={Redirecionar}>CLique para ser redirecionado</button>
            </div>
    )
}
export default ContactDetails