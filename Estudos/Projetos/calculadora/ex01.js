const botoes = document.querySelectorAll('.btn');
const container_tela = document.querySelector(".container_tela")
let guardar_valores = []

// Atribuindo cada botão individualmente a uma constante
const btnAC     = botoes[0];
const btnMaisOuMenos = botoes[1];
const btnPorcento = botoes[2];
const btnDividir  = botoes[3];

const btn7 = botoes[4];
const btn8 = botoes[5];
const btn9 = botoes[6];
const btnMultiplicar = botoes[7];

const btn4 = botoes[8];
const btn5 = botoes[9];
const btn6 = botoes[10];
const btnSubtrair = botoes[11];

const btn1 = botoes[12];
const btn2 = botoes[13];
const btn3 = botoes[14];
const btnSomar = botoes[15];

const btnVazio = botoes[16];  // está vazio no HTML
const btn0 = botoes[17];
const btnVirgula = botoes[18];
const btnIgual = botoes[19];

let contador = ""

btnAC.addEventListener("click", () => {
    container_tela.textContent = ""
    contador = ""
})

btnVazio.addEventListener("click",()=>{
    navigator.clipboard.writeText(container_tela.innerHTML)
})

function atualizarTela() {
    container_tela.textContent = contador
}

btn0.addEventListener("click", () => { contador += "0"; atualizarTela() })
btn1.addEventListener("click", () => { contador += "1"; atualizarTela() })
btn2.addEventListener("click", () => { contador += "2"; atualizarTela() })
btn3.addEventListener("click", () => { contador += "3"; atualizarTela() })
btn4.addEventListener("click", () => { contador += "4"; atualizarTela() })
btn5.addEventListener("click", () => { contador += "5"; atualizarTela() })
btn6.addEventListener("click", () => { contador += "6"; atualizarTela() })
btn7.addEventListener("click", () => { contador += "7"; atualizarTela() })
btn8.addEventListener("click", () => { contador += "8"; atualizarTela() })
btn9.addEventListener("click", () => { contador += "9"; atualizarTela() })


btnSomar.addEventListener("click", () => { contador += "+"; atualizarTela() })
btnSubtrair.addEventListener("click", () => { contador += "-"; atualizarTela() })
btnMultiplicar.addEventListener("click", () => { contador += "*"; atualizarTela() })
btnDividir.addEventListener("click", () => { contador += "/"; atualizarTela() })

btnIgual.addEventListener("click", () => {
    try {
        
        const resultado = eval(contador)
        container_tela.textContent = resultado
        contador = resultado.toString()
    } catch (erro) {
        container_tela.textContent = "Erro"
        contador = ""
    }
})