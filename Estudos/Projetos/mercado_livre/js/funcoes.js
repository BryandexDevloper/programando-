const subcategoria = document.querySelector('.subcategoria')
let logadoo = false
localStorage.setItem("valor_boo",JSON.stringify(logadoo))

let logado = JSON.parse(localStorage.getItem('valor_boo'))


async function PegarCep(cep) {
                try{
                    const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    const resultado = await data.json()
                     const informe_cep = document.querySelector('.informe_cep')
                    const cep_text = document.querySelector('.cep')
                    const cep_text_mob = document.querySelector('.cep_text_mob')
                    informe_cep.textContent='Enviar para'
                    cep_text.textContent=`${resultado.logradouro}`
                    cep_text_mob.textContent=`${resultado.logradouro}`
                    //logradouro
                }catch(err){
                    if(err){
                        console.log('Desculpe ocorreu um erro ' + err)
                        const cep_text_mob = document.querySelector('.cep_text_mob')
                        const cep_text = document.querySelector('.cep')
                        cep_text.textContent='Desculpe tente mais tarde'
                        cep_text_mob.textContent='Desculpe tente mais tarde'
                    }
                }
            }


function ColocarCep(){
   const container_localizacao_box = document.querySelector(".container_localizacao_box")
        container_localizacao_box.style.display="block"
        
        const aceitar = document.querySelector('.aceitar')
        const cancelar = document.querySelector('.cancelar')
        cancelar.addEventListener('click',()=>{
            container_localizacao_box.style.display="none"
        })

        aceitar.addEventListener('click',()=>{
            const container_filtro_escuro = document.querySelector('.container_filtro_escuro')
            container_filtro_escuro.style.display="block"

            const container_localizacao_box = document.querySelector(".container_localizacao_box")
            container_localizacao_box.style.display="none"

            const container_btn_close = document.querySelector('#btn_close_container_cep')
            container_btn_close.addEventListener('click',()=>{
                container_filtro_escuro.style.display='none'
                
            })
            

            const input_cep = document.querySelector('#cep')
            const btn_usar_cep = document.querySelector('.btn_usar_cep')
            btn_usar_cep.addEventListener('click',()=>{
                
                PegarCep(input_cep.value)
                input_cep.value=""
                container_filtro_escuro.style.display='none'
               


            })
        })


}

const container_localiza = document.querySelector('.container_localiza')
const container_localizacao_mobile = document.querySelector('.container_localizacao_mobile')

container_localiza.addEventListener('click',()=>{
    ColocarCep()
})

container_localizacao_mobile.addEventListener('click',()=>{
    ColocarCep()
})


if(!logado){

    setTimeout(()=>{
        ColocarCep()
    },5000)

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


///  https://viacep.com.br/ws/01001000/json/   api de pegar o cep //