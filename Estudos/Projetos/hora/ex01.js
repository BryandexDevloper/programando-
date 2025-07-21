const data =  new Date()



console.log(data.getHours())
console.log(data.getMinutes())
console.log(data.getMilliseconds())





const hora = document.querySelector("#hora");
hora.style.backgroundColor = "green";

let calculo_hora = 360 / 12

let calculo_minuti = 360 / 60

let calculo_seguntos = 360 / 60

let calculo_mili = 6 / 1000



// posisao que vai comelçar ou angulo 0
hora.style.transform = `rotate(${data.getHours() * calculo_hora * 0.5}deg)`;

const minuto = document.querySelector("#minuto")
minuto.style.transform = `rotate(${data.getMinutes() * calculo_minuti }deg)`;
const segundo = document.querySelector("#segundo")
segundo.style.transform = `rotate(${data.getSeconds() * calculo_seguntos }deg)`;
const som_alarme = new Audio("Social_CREDITS_Song_Xina.mp3")
som_alarme.loop = 1


const mili_seconts = document.querySelector("#milisecund")
mili_seconts.style.transform = `rotate(${data.getMilliseconds() * calculo_mili }deg)`;



const horas = setInterval(()=>{

    calculo_hora = calculo_hora + 30

    hora.style.transform = `rotate(${calculo_hora}deg)`;
},3600000 )


const minutos = setInterval(()=>{

    calculo_minuti = calculo_minuti + 6

    minuto.style.transform = `rotate(${calculo_minuti}deg)`;
},60000 )



const segundos = setInterval(()=>{

    calculo_seguntos = calculo_seguntos + 6
    segundo.style.transform = `rotate(${calculo_seguntos}deg)`;
},1000)



const mili_secontss = setInterval(()=>{
    calculo_mili = calculo_mili + 6
        mili_seconts.style.transform = `rotate(${calculo_mili}deg)`;
        

},1)


let segundos_despertador = document.querySelector("#segundos_despertador")
let iniciar_despertador = document.querySelector("#iniciar")



iniciar_despertador.addEventListener("click",()=>{
    let tempo = segundos_despertador.value
    let numero =  0
    let temporizador = setInterval(()=>{
        if(numero < tempo){
            numero++
            console.log(numero)
            
        }else{
            som_alarme.play()
            const pararalarme = document.querySelector("#para")
            pararalarme.addEventListener("click",()=>{
                som_alarme.pause()
                numero = 0
                clearInterval(temporizador)
            })

            console.log("alarme chegou ao fim")
        }
    },1000)
})


