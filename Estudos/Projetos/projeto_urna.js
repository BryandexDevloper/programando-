const prompt = require('prompt-sync')();
const joao  = [];
const maria = [];
const pedro = [];
const ana   = [];
const lucas = [];
const voto_nulo = [];
const voto_em_branco = [];
const quantidade_politicos = [joao,maria,pedro,ana,lucas];
let numero_pessoas;
let votos_vencedor = 0; 
let vencedor = ""
let mais_votado = 0;


numero_pessoas = parseFloat(prompt("Digite quantas pessoas iram votas: "))

    

for(let i = 1 ; i <= numero_pessoas; i++){
  
    console.log()
    console.log()
    console.log("========== URNA ELEITORAL 2025 ==========");
    console.log("Escolha o número do seu candidato:");
    console.log("[10] João da Silva");
    console.log("[20] Maria Oliveira");
    console.log("[30] Pedro Souza");
    console.log("[40] Ana Costa");
    console.log("[50] Lucas Lima");
    console.log("------------------------------------------");
    console.log("[0] Voto em Branco");
    console.log("[9] Voto Nulo");
    console.log("==========================================");   

 let voto = parseFloat(prompt("Digite o numero correspondente: "));
    if(voto == 10){
        joao.push(voto)
        mais_votado++
    }else if(voto == 20){
        mais_votado++
        maria.push(voto)
    }else if(voto == 30){
        mais_votado++
        pedro.push(voto)
    }else if(voto == 40){
        mais_votado++
        ana.push(voto)
    }else if(voto == 50){
        mais_votado++
        lucas.push(voto)
    }else if(voto == 0){
        mais_votado++
        voto_em_branco.push(voto)
    }else if(voto == 9){
        mais_votado++
        voto_nulo.push(voto)
    }else{
        console.log("Voto invalido digite novamente: ")
        voto = parseFloat(prompt("Digite o numero correspondente"))
    }
           
}   
            let total_validos = joao.length + maria.length + pedro.length + ana.length + lucas.length;
            let joaopercentual = (joao.length / total_validos) * 100 || 0;
            let mariapercentual = (maria.length / total_validos) * 100 || 0;
            let pedropercentual = (pedro.length / total_validos) * 100 || 0;
            let anapercentual = (ana.length / total_validos) * 100 || 0;
            let lucaspercentual = (lucas.length / total_validos) * 100 || 0;


            if (joao.length > votos_vencedor) {
                votos_vencedor = joao.length;
                vencedor = "João da Silva";
            }
            if (maria.length > votos_vencedor) {
                votos_vencedor = maria.length;
                vencedor = "Maria Oliveira";
            }
            if (pedro.length > votos_vencedor) {
                votos_vencedor = pedro.length;
                vencedor = "Pedro Souza";
            }
            if (ana.length > votos_vencedor) {
                votos_vencedor = ana.length;
                vencedor = "Ana Costa";
            }
            if (lucas.length > votos_vencedor) {
                votos_vencedor = lucas.length;
                vencedor = "Lucas Lima";
            }

console.log("        Resumo      ")
console.log("Quantidade de eleitores  "+numero_pessoas )
console.log("Quantidade de Politicos "+ quantidade_politicos.length)
console.log("Quantidade de votos nulos "+voto_nulo.length)
console.log("Quantidade de votos em branco " + voto_em_branco.length)
console.log("Numero de votos para João da Silva " + "Total de votos "+ joao.length+ "  " + joaopercentual+" % ")
console.log("Numero de votos para Maria Oliveira " + "Total de votos "+ ana.length+ "  " + mariapercentual+ " % ")
console.log("Numero de votos para Pedro Souza " + "Total de votos " + pedro.length + "  "+ pedropercentual+" % ")
console.log("Numero de votos para Ana Costa " + "Total de votos " +ana.length+ "  " + anapercentual+" % ")
console.log("Numero de votos para Lucas Lima " + "Total de votos "+ lucas.length+ "  "+ lucaspercentual+" % ")
console.log("🏆 Candidato mais votado: " + vencedor + " com " + votos_vencedor + " votos.");



