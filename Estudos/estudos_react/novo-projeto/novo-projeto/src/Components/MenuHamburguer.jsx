const MenuHamburguer = (props)=>{
    return(
        <>
       <img onClick={props.func} src={props.svg} className="block md:hidden cursor-pointer"/>
      </>
    )
}


export default MenuHamburguer