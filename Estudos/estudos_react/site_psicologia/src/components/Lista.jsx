const Lista=(propos)=>{
    return(
        <>
        <li className="hover:text-black cursor-pointer font-bold"><a href={propos.link}>{propos.texto}</a></li>
        </>
    )
}

export default Lista