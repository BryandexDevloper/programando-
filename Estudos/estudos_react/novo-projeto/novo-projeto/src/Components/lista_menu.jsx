


const Lista=({opcoes,func})=>{
    return(
        <>
            <li onClick={func} className='hover:text-blue-500 hover:cursor-pointer' >{opcoes}</li>
        </>

        
    )
}




export default Lista