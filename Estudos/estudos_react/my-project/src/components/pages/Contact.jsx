import { Link } from "react-router-dom"

const Contact=()=>{
    return(
        <>
        <h1>Contato</h1>
        <Link to='/contact/1/bryan/1904'>Forma de contato 1</Link>
          <Link to='/contact/2'>Forma de contato 2</Link>
            <Link to='/contact/3'>Forma de contato 3</Link>
        </>
    )
}
export default Contact