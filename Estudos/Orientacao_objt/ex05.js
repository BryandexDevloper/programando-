// // // class carro{
// // //     constructor(marca,modelo,ano,aceleracaoMax){
// // //         this.marca = marca
// // //         this.modelo = modelo
// // //         this.ano = ano
// // //         this.aceleracaoMax = aceleracaoMax
// // //     }


// // //     informacoes(){
// // //         console.log(`Veiculo Marca: ${this.marca} modelo: ${this.modelo} ano: ${this.ano}`)
// // //     }

// // //     tipo(){
// // //         if(this.aceleracaoMax > 170){
// // //             console.log(`Veiculo ${this.modelo} com performaçe de ${this.aceleracaoMax}`)
// // //         }
// // //     }

// // //     Vermarca(){
// // //         console.log(`${this.marca}`)
// // //     }


// // //     TrocarMarca(marca){
// // //         this.marca = marca
// // //     }

// // // }




// // // let car1 = new carro("Fiat","uno",1998,170)
// // // let car2 = new carro("Ford",'Ka',2000,175)



// // // car2.TrocarMarca("Chevrolet")
// // // car2.informacoes()


// // class Conta{
// //     constructor(titular,saldo,cpf){
// //         this.titular = titular
// //         this.saldo = saldo
// //         this.cpf = cpf
// //     }

// //     deposita(valor){
// //         if(valor < 5){
// //             console.log("Valor invalido valor minimo de R$20,00")
// //         }else{
// //             this.saldo = this.saldo + valor
// //             console.log(`Deposito feito com exito no valor de ${valor},00 no cpf ${this.cpf} em nome de ${this.titular}`)
// //         }
// //     }

// //     saque(valor){
// //         if(this.saldo < valor){
// //             console.log("Saldo insuficiente para saque ")
// //         }else{
// //             this.saldo = this.saldo - valor
// //             console.log(`Saque feito com exito no valor de ${valor},00 no cpf ${this.cpf} em nome de ${this.titular}`)
// //         }
// //     }

// //     informacao_da_Conta(){
// //         console.log(`Titular: ${this.titular} CPF: ${this.cpf} SALDO EM CONTA ${this.saldo},00`)
// //     }

// //     Transferencia(valor,titular){

// //         this.saque(valor)
// //         titular.deposita(valor)
// //         console.log(`Transferencia feita com sucesso de ${this.titular} para ${titular.titular} no valor de ${valor}`)

// //     }
// // }


// // let Joao = new Conta("Joao silveira machado",0,19219894670)
// // let maria = new Conta("Maria silveira rosana",0,2314353210)

// // Joao.deposita(500)
// // console.log("----------------------")
// // Joao.saque(250)
// // console.log("----------------------")
// // Joao.informacao_da_Conta()
// // console.log("----------------------")
// // Joao.Transferencia(30,maria)
// // console.log("----------------------")
// // Joao.informacao_da_Conta()
// // console.log("----------------------")
// // maria.informacao_da_Conta()
// // console.log("----------------------")

// class Aluno{
//     constructor(nome,nota,media){
//         this.nome = nome
//         this.nota = nota
//         this.media = media
//     }

//     setmediaNota(nota){

//         this.media = nota
    
//     }

//     informacaoAluno(){
//         console.log(`Aluno ${this.nome} com a nota de ${this.nota} ficou com media de ${this.media}`)
//     }


// }


// const turma = [
//     new Aluno("Ana", 8,0),
//     new Aluno("Pedro", 7,0),
//     new Aluno("Julia", 9,0)
// ]

// const calcularMedia=(turma)=>{
// let acumulador = 0 
//     turma.forEach((res,index)=>{
//       acumulador =  res.nota + acumulador
//     })
//     const media = acumulador / turma.length
//     turma.forEach((res)=>{
//        res.setmediaNota(media)
//     })

// }

// calcularMedia(turma)
// turma.forEach((res)=>{
//     res.informacaoAluno()
// })