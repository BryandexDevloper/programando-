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


const cores_carrossel = [
    '#FF5733', // laranja avermelhado
    '#33FF57', // verde limão
    '#3357FF', // azul vibrante
    '#F1C40F', // amarelo ouro
    '#9B59B6', // roxo
    '#E67E22', // laranja queimado
    '#1ABC9C'  // verde água
]


setInterval(() => {
    contador++
    if (contador >= cores_carrossel.length) {
        contador = 0
    }
    container_carrosel.style.backgroundColor = cores_carrossel[contador]
    inputs[contador].checked = true
}, 5000)

inputs[contador].checked = true
container_carrosel.style.backgroundColor = cores_carrossel[contador]

btn_avancar.addEventListener('click', () => {
    contador++
    if (contador >= cores_carrossel.length) {
        contador = 0
    }
    container_carrosel.style.backgroundColor = cores_carrossel[contador]
    inputs[contador].checked = true
})

btn_voltar.addEventListener('click', () => {
    contador--
    if (contador < 0) {
        contador = cores_carrossel.length - 1
    }
    container_carrosel.style.backgroundColor = cores_carrossel[contador]
    inputs[contador].checked = true
})
