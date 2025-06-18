const prompt = require('prompt-sync')();


const pessoas = [
  { nome: "Ana", idade: 25, cidade: "São Paulo" },
  { nome: "Carlos", idade: 30, cidade: "Rio de Janeiro" },
  { nome: "Beatriz", idade: 22, cidade: "Belo Horizonte" },
];

const propiedade = prompt(" Digite o nome da propiedade [nome] [idade] [cidade] ")
if(propiedade != "nome","idade","cidae"){
    console.log(" Digite as propiedades correspondentes ")
    const propiedade = prompt(" Digite o nome da propiedade [nome] [idade] [cidade] ")
}
const valor = prompt(" Digite o nome ou idade ou cidade ")

const procurar =(pessoas,propiedade,valor)=>{

    const resultado = pessoas.find((res)=>{
        return res[propiedade] == valor
    })

    if(resultado){
        console.log(resultado[propiedade]+ " Encontrado ")
    }else{
        console.log(" Não encontrado ")
    }
}

procurar(pessoas,propiedade,valor)
