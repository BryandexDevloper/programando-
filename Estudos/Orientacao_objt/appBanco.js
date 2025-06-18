class Contabancaria{
        constructor(titular_conta,saldo_conta,imagem_de_perfil,pix){
            this.titular=titular_conta
            this.Saldo=saldo_conta
            this.foto_perfil = imagem_de_perfil
            this.chave_pix = pix
        }

        deposito(valor){

            if(this.Saldo >= valor){
                this.Saldo = this.Saldo + valor

                console.log(`Deposito feito com exito pelo cliente ${this.titular} no valor de ${valor}`)
            }else{
                console.log("Saldo invalido ")
            }
            
        }

        saque(valor){

            if(this.Saldo >= valor ){
                this.Saldo = this.Saldo - valor 
                console.log(`Saque realizado com sucesso no valor de ${valor} pelo cliente ${this.titular}`)
            }else{
                console.log("saldo insuficiente")
            }

        }


        Transferencia(valor,beneficiario){

            this.saque(valor)
            beneficiario.deposito(valor)

            console.log(`Tranderencia feito com exito no valor de ${valor} para ${beneficiario.titular}`)

        }

}



let contas =  [
    new Contabancaria("Joao",3500,"https://th.bing.com/th?q=Joao+Caetano+E+13+Ou+22&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=strict&t=1&mw=247",123_456_789_10),
    new Contabancaria("Maria",5000,"https://th.bing.com/th/id/OIP.7dOTJ2GsBKAsCEak7t3ABgHaEK?w=276&h=180&c=7&r=0&o=7&pid=1.7&rm=3",192_198_946_70)
]





contas[1].Transferencia(500,contas[0])
console.log(contas[0])
console.log(contas[1])

const criarContas=(contas)=>{

    const container_tudo = document.querySelector(".container_informacoes")

    contas.forEach((res)=>{

        const container_info = document.createElement("div")
        container_info.style.width="100%"
        container_info.style.height="100px"
        container_info.style.display="flex"
        container_info.style.border="1px solid"
        container_info.style.gap="20px"
        container_tudo.appendChild(container_info)

        const container_foto_perfil = document.createElement("div")
        container_foto_perfil.style.width="100px"
        container_foto_perfil.style.height="100px"
        container_foto_perfil.style.border="1px solid"
        container_foto_perfil.style.borderRadius="50%"
        container_info.appendChild(container_foto_perfil)

        const foto_perfil = document.createElement("img")
        foto_perfil.style.width="100%"
        foto_perfil.setAttribute("src",res.foto_perfil)
        foto_perfil.style.height = "100%";
        foto_perfil.style.objectFit = "cover";
        foto_perfil.style.borderRadius="50%"
        container_foto_perfil.appendChild(foto_perfil)

        const container_nome_saldo = document.createElement("div")
        container_nome_saldo.style.width="300px"
        container_nome_saldo.style.height="100%"
        container_nome_saldo.style.border="1px solid"
        container_nome_saldo.style.flexDirection="column"
        container_nome_saldo.style.gap="20px"
        container_info.appendChild(container_nome_saldo)


        const nomeUser = document.createElement("p")
        nomeUser.innerHTML=res.titular
        nomeUser.style.fontSize="20px"
        container_nome_saldo.appendChild(nomeUser)

        const SaldoEmconta = document.createElement("p")
        SaldoEmconta.innerHTML=res.Saldo.toLocaleString("pt-br",{
            style:"currency",
            currency:"BRL"
        })
        SaldoEmconta.style.fontSize="20px"
        container_nome_saldo.appendChild(SaldoEmconta)
        

        


        

    })

}
criarContas(contas)