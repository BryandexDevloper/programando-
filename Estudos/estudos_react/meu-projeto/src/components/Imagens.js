import styles from './Imagens.module.css'
const Imagens=({nome,idade,foto,profissao})=>{
return(

    <div className={styles.container_imagens}>
        
            <img src={foto}/>
            <h1>Nome: {nome}</h1>
            <p>Idade: {idade}</p>
            <p>Profissão {profissao}</p>
        
    </div>
)
}

export default Imagens