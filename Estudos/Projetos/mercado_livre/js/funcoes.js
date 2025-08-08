const subcategoria = document.querySelector('.subcategoria')
let logado = true



if(!logado){

    document.addEventListener('DOMContentLoaded',()=>{

      document.addEventListener('DOMContentLoaded', () => {

    async function obter() {
        try {
            const data = await obterLocaliza()
            console.log(data.coords.longitude, data.coords.latitude)
        } catch (err) {
            console.log('Erro ao obter localização:', err)
        }
    }

    obter()

    async function obterLocaliza() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject('Geolocalização não suportada pelo navegador')
            } else {
                navigator.geolocation.getCurrentPosition(
                    (posicao) => resolve(posicao),
                    (erro) => reject(erro)
                )
            }
        })
    }
})

        
    })
    

}else{
    console.log('voce esta logado')
   
}


subcategoria.addEventListener('mouseover', () => {

    const container_listaa = document.querySelector('.container_listaa')
    container_listaa.style.display = "flex"
    container_listaa.addEventListener('mouseleave', (evet) => {

        container_listaa.style.display = "none"
    })
})
const container_carrosel = document.querySelector(".container_carrosel")
const btn_voltar = document.querySelector('.btn_voltar')
const btn_avancar = document.querySelector('.btn_avancar')
const inputs = document.querySelectorAll('.input_carrolssel')
let contador = 0


const imagens_carrolsel = ['https://http2.mlstatic.com/D_NQ_676863-MLA89232785805_082025-OO.webp',
    'https://http2.mlstatic.com/D_NQ_627045-MLA82787677787_022025-OO.webp',
    'https://http2.mlstatic.com/D_NQ_610204-MLA89279266484_082025-OO.webp',
    'https://http2.mlstatic.com/D_NQ_862512-MLA89284372476_082025-OO.webp',
    'https://http2.mlstatic.com/D_NQ_763677-MLA89637956165_082025-OO.webp',
    'https://http2.mlstatic.com/D_NQ_605657-MLA89583968475_082025-OO.webp',
    'https://http2.mlstatic.com/D_NQ_781192-MLA88988196762_082025-OO.webp'
]

setInterval(()=>{
    contador++
     if(contador >= imagens_carrolsel.length){
        contador = 0
    }
    container_carrosel.style.backgroundImage=`url(${imagens_carrolsel[contador]})`
    inputs[contador].checked=true
    
},5000)

inputs[contador].checked=true
container_carrosel.style.backgroundImage=`url(${imagens_carrolsel[contador]})`

btn_avancar.addEventListener('click',()=>{
    contador++
    if(contador >= imagens_carrolsel.length){
        contador = 0
    }
    container_carrosel.style.backgroundImage=`url(${imagens_carrolsel[contador]})`
    inputs[contador].checked=true
})

btn_voltar.addEventListener('click',()=>{
    contador--
    if(contador <= 0){
        contador = imagens_carrolsel.length -1
    }
        container_carrosel.style.backgroundImage=`url(${imagens_carrolsel[contador]})`
     inputs[contador].checked=true
})