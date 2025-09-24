import TipoAtendimento from './TiposAtendimento'
const SobreAtendimentos =()=>{
    return(
        <section>
            <div className="w-full h-auto bg-white flex items-center gap-[50px] flex-col pt-[20px] pb-[20px]">

                <div className=" h-[315px]border-2 border-black">
                    <iframe width="full" height="315" src="https://www.youtube.com/embed/nRNHeu4lODQ?si=MdU4piBjYsk8PjWb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div>
                    <p className="text-[20px] text-blue-500 text-center"> ATENDIMENTOS ---</p>
                    <p className="text-[50px] text-center text-blue-500">Presencial e Online</p>
                </div>
                    <TipoAtendimento/>
            </div>
        </section>
    )
}

export default SobreAtendimentos