// Seleciona os elementos da interface
/** @type {HTMLElement} */
const quantos_obj = document.querySelector("#numero_obj");
/** @type {HTMLInputElement} */
const quntidade_criar_obj = document.querySelector("#quantidade_obj");
/** @type {HTMLElement} */
const add_obj = document.querySelector("#add");
/** @type {HTMLElement} */
const remover_todos_obj = document.querySelector("#remover");
/** @type {HTMLElement} */
const container_bolinhas = document.querySelector(".container_bolinhas");

let larguraContainer_bolinha = container_bolinhas.offsetWidth;
let alturaContainer_bolinha = container_bolinhas.offsetHeight;

let bolas = [];
let numero_bolas = 0;

// Classe para gerar as bolinhas
class Bolinha {
    static GerarId() {
        return "b" + Math.floor(Math.random() * 100000);
    }

    constructor(arrayBolas, palco) {
        this.tam = Math.floor(Math.random() * 15) + 10;
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);

        this.px = Math.floor(Math.random() * (larguraContainer_bolinha - this.tam));
        this.py = Math.floor(Math.random() * (alturaContainer_bolinha - this.tam));

        this.velocidadeX = Math.floor(Math.random() * 2) + 0.5;
        this.velocidadey = Math.floor(Math.random() * 2) + 0.8;

        this.direcaoX = Math.random() > 0.5 ? 1 : -1;
        this.direcaoY = Math.random() > 0.5 ? 1 : -1;

        this.palco = palco;
        this.arrayBolas = arrayBolas;
        this.id = Bolinha.GerarId();

        this.desenharBola(); // cria o elemento na tela

        this.controle = setInterval(() => this.controlarBola(), 10);

        numero_bolas++;
        quantos_obj.value = numero_bolas;
    }

    desenharBola() {
        const bola = document.createElement("div");
        bola.setAttribute("id", this.id);
        bola.setAttribute("class", "bola");
        bola.setAttribute("style", `left:${this.px}px; top:${this.py}px; width:${this.tam}px; height:${this.tam}px; background-color:rgb(${this.r},${this.g},${this.b});`);
        this.palco.appendChild(bola);
        this.eu = bola;
    }

    removerBola() {
        clearInterval(this.controle);
        this.arrayBolas = this.arrayBolas.filter(res => res.id !== this.id);
        this.eu.remove();
        numero_bolas--;
        quantos_obj.value = numero_bolas;
    }

    controlarBola() {
        this.px += this.direcaoX * this.velocidadeX;
        this.py += this.direcaoY * this.velocidadey;

        this.controle_bordas();

        this.eu.setAttribute("style", `left:${this.px}px; top:${this.py}px; width:${this.tam}px; height:${this.tam}px; background-color:rgb(${this.r},${this.g},${this.b});`);

        // Remove se sair do palco
        if (this.px > larguraContainer_bolinha || this.py > alturaContainer_bolinha || this.px < -this.tam || this.py < -this.tam) {
            this.removerBola();
        }
    }

    controle_bordas() {
        if (this.px + this.tam >= larguraContainer_bolinha || this.px <= 0) {
            this.direcaoX *= -1;
        }

        if (this.py + this.tam >= alturaContainer_bolinha || this.py <= 0) {
            this.direcaoY *= -1;
        }
    }
}

// Atualiza tamanho do palco se a tela for redimensionada
window.addEventListener("resize", () => {
    larguraContainer_bolinha = container_bolinhas.offsetWidth;
    alturaContainer_bolinha = container_bolinhas.offsetHeight;
});

// Botão adicionar bolinhas
add_obj.addEventListener("click", () => {
    const quantidade = parseInt(quntidade_criar_obj.value);
    for (let i = 0; i < quantidade; i++) {
        bolas.push(new Bolinha(bolas, container_bolinhas));
    }
});

// Botão remover todas
remover_todos_obj.addEventListener("click", () => {
    bolas.forEach(b => b.removerBola());
    bolas = [];
});
