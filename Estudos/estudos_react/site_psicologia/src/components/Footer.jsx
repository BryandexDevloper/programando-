import logo_site from '../assets/logo_site.png'


const Footer=()=>{
    return(
        <section id='footer' >
            <div className="w-full h-auto flex flex-col justify-center items-center py-[20px]">
                <div className="w-[100px] h-[100px] ">
                        <img src={logo_site} alt="" />
                </div>
                <p className='text-[40px] text-blue-500'>Amanda Martins</p>
                <p className='text-[20px] text-blue-500'>Terapia Cognitivo Comportamental</p>
                <p className='text-[12px] text-gray-500'>Copyright © Amanda Martins – Terapia Cognitivo Comportamental.</p>
            </div>
        </section>
    )
}

export default Footer