
// declaração de variaveis
let num :number = 4;
let num1 : number = 4;
let soma : number = num + num1;
let ativo : boolean  = false
console.log(ativo)



// arrais
let array :number[] = [1,2,3,4,5,5]
let array_strings : string[] = ['a','b','c']
console.log(array[3])
console.log(array_strings[2])

//funções
function soma_numeros(a:number,b:number):number{
    return a + b ;
}

console.log(soma_numeros(5,6))



function apresentar(nome:string,idade:number):string{
    //let nomeIdade :string = `Nome: ${nome} idade: ${idade}`
   //console.log(nomeIdade)

    return `Nome: ${nome} Idade:${idade}`
}
console.log(apresentar('bryan',18))


//objetos

let pessoa: {nome:string;idade:number;ativo:boolean} = {
    nome:'bryan',
    idade:18,
    ativo:false
};


//array de objetos

let pessoas:{nome:string,idade:number}[] = [
    {nome:'bryan',idade:18},
    {nome:'anderson',idade:22}
]

//array de objetos




// requisições

async function name(nome: string, idade: number) {
    // Simulando uma resposta da API com propriedades desconhecidas
    const resultado: { [key: string]: string | number | boolean } = {
        nome: "Bryan",
        idade: 18,
        ativo: true
    };

    // Acessando propriedades por chave string
    console.log(resultado.nome);  // "Bryan"
    console.log(resultado["idade"]); // 18
    console.log(resultado.ativo); // true

    // Se fossem chaves numéricas (ex: {[key: number]: string}), você faria:
    const resultadoNumerico: { [key: number]: string } = {
        0: "Bryan",
        1: "Adrian"
    };
    console.log(resultadoNumerico[0]); // "Bryan"
    console.log(resultadoNumerico[1]); // "Adrian"
}

