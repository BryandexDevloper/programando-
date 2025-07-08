class caneta{
        constructor(caninho,tinta,ponta,capa,tampinha){

            this.caninho = caninho
            this.tinta = tinta
            this.ponta = ponta
            this.capa = capa
            this.tampinha = tampinha
        }

        mostrar_caninho(){
            this.caninho.style.display="flex"
        }

        mostrar_tinta(){
            this.tinta.style.display="flex"
        }

        mostrar_ponta(){
            this.ponta.style.display="flex"
        }

        mostrar_capa(){
            this.capa.style.display="flex"
        }

        mostrar_tampinha(){
            this.tampinha.style.display="flex"
        }

        mostrar_tudo(){
             this.caninho.style.display="flex"
             this.tinta.style.display="flex"
             this.ponta.style.display="flex"
            this.capa.style.display="flex"
               this.tampinha.style.display="flex"
        }



}



const main = document.querySelector("#principal")
const caninho = document.createElement("div")
caninho.classList.add("caninho")
main.appendChild(caninho)

const tinta = document.createElement("div")
tinta.classList.add("tinta")
main.appendChild(tinta)

const ponta = document.createElement("div")
ponta.classList.add("ponta")
main.appendChild(ponta)

const container_tampinha = document.createElement("div")
container_tampinha.classList.add("container_tampinha")
const cabinho = document.createElement("div")
cabinho.classList.add("cabinho")
container_tampinha.appendChild(cabinho)
const tampinha = document.createElement("div")
tampinha.classList.add("tampinha")
container_tampinha.appendChild(tampinha)

main.appendChild(container_tampinha)


let caneta1 = new caneta(caninho,tinta,ponta,container_tampinha)
let caneta2 = new caneta(caninho,tinta,ponta,container_tampinha)

caneta1.mostrar_tudo()