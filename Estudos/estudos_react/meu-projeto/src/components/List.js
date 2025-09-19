import PropTypes from 'prop-types'

const List=({marca,lancamento})=>{

    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <li>Marca {marca} Ano de Lançamento: {lancamento}</li>
                
            </ul>
        </>
    )
    
}

List.propTypes = {
    marca: PropTypes.string.isRequired
}
export default List