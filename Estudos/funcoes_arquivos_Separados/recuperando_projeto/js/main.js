// ==========================================
// SELETORES E VARIÁVEIS GLOBAIS
// ==========================================

const subcategoria = document.querySelector('.subcategoria');
const container_localiza = document.querySelector('.container_localiza');
const container_localizacao_mobile = document.querySelector('.container_localizacao_mobile');
const container_carrosel = document.querySelector(".container_carrosel");
const btn_voltar = document.querySelector('.btn_voltar');
const btn_avancar = document.querySelector('.btn_avancar');
const inputs = document.querySelectorAll('.input_carrolssel');
const crie_sua_conta = document.querySelector('#crie_sua_conta');
const entre = document.querySelector('#entre');
const compras = document.querySelector('#compras');
const menu_hambur = document.querySelector("#menu_hambur");

let contador = 0;
let num = 0;

// Cores do carrossel
const cores_carrossel = [
    '#FF5733', // laranja avermelhado
    '#33FF57', // verde limão
    '#3357FF', // azul vibrante
    '#F1C40F', // amarelo ouro
    '#9B59B6', // roxo
    '#E67E22', // laranja queimado
    '#1ABC9C'  // verde água
];


// ==========================================
// FUNÇÕES DE API - CEP E LOCALIZAÇÃO
// ==========================================

/**
 * Busca informações de endereço através do CEP
 * @param {string} cep - CEP para consulta
 */
async function PegarCep(cep) {
    try {
        const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const resultado = await data.json();
        
        const informe_cep = document.querySelector('.informe_cep');
        const cep_text = document.querySelector('.cep');
        const cep_text_mob = document.querySelector('.cep_text_mob');
        
        informe_cep.textContent = 'Enviar para';
        cep_text.textContent = `${resultado.logradouro}`;
        cep_text_mob.textContent = `${resultado.logradouro}`;
        
    } catch (err) {
        if (err) {
            console.log('Desculpe ocorreu um erro ' + err);
            const cep_text_mob = document.querySelector('.cep_text_mob');
            const cep_text = document.querySelector('.cep');
            cep_text.textContent = 'Desculpe tente mais tarde';
            cep_text_mob.textContent = 'Desculpe tente mais tarde';
        }
    }
}

/**
 * Obter endereço através de coordenadas (latitude e longitude)
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 */
async function apiPegarendecoLatitude(lat, lon) {
    try {
        const data = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
        const resultado = await data.json();
        const cep = document.querySelector('.cep');
        cep.textContent = `${resultado.address.city}`;
        
    } catch (err) {
        if (err) {
            console.log('ocorreu um erro ' + err);
        }
    }
}

/**
 * Promise para obter localização do usuário
 * @returns {Promise} - Promessa com dados de localização
 */
async function obterLocaliza() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject('Geolocalização não suportada pelo navegador');
        } else {
            navigator.geolocation.getCurrentPosition(
                (posicao) => resolve(posicao),
                (erro) => reject(erro)
            );
        }
    });
}


// ==========================================
// FUNÇÕES DE INTERFACE - CEP
// ==========================================

/**
 * Controla a exibição e funcionalidade do modal de CEP
 */
function ColocarCep() {
    const container_localizacao_box = document.querySelector(".container_localizacao_box");
    container_localizacao_box.style.display = "block";

    const aceitar = document.querySelector('.aceitar');
    const cancelar = document.querySelector('.cancelar');
    
    // Evento para cancelar
    cancelar.addEventListener('click', () => {
        container_localizacao_box.style.display = "none";
    });

    // Evento para aceitar
    aceitar.addEventListener('click', () => {
        const container_filtro_escuro = document.querySelector('.container_filtro_escuro');
        container_filtro_escuro.style.display = "block";

        const container_localizacao_box = document.querySelector(".container_localizacao_box");
        container_localizacao_box.style.display = "none";

        // Botão para fechar container CEP
        const container_btn_close = document.querySelector('#btn_close_container_cep');
        container_btn_close.addEventListener('click', () => {
            container_filtro_escuro.style.display = 'none';
        });

        // Funcionalidade do input CEP
        const input_cep = document.querySelector('#cep');
        const btn_usar_cep = document.querySelector('.btn_usar_cep');
        btn_usar_cep.addEventListener('click', () => {
            PegarCep(input_cep.value);
            input_cep.value = "";
            container_filtro_escuro.style.display = 'none';
        });
    });
}


// ==========================================
// FUNÇÕES DE CARROSSEL
// ==========================================

/**
 * Inicializa o carrossel automático
 */
function iniciarCarrossel() {
    // Configuração inicial
    inputs[contador].checked = true;
    container_carrosel.style.backgroundColor = cores_carrossel[contador];

    // Carrossel automático (5 segundos)
    setInterval(() => {
        contador++;
        if (contador >= cores_carrossel.length) {
            contador = 0;
        }
        container_carrosel.style.backgroundColor = cores_carrossel[contador];
        inputs[contador].checked = true;
    }, 5000);
}

/**
 * Avança para próximo slide do carrossel
 */
function avancarCarrossel() {
    contador++;
    if (contador >= cores_carrossel.length) {
        contador = 0;
    }
    container_carrosel.style.backgroundColor = cores_carrossel[contador];
    inputs[contador].checked = true;
}

/**
 * Volta para slide anterior do carrossel
 */
function voltarCarrossel() {
    contador--;
    if (contador < 0) {
        contador = cores_carrossel.length - 1;
    }
    container_carrosel.style.backgroundColor = cores_carrossel[contador];
    inputs[contador].checked = true;
}


// ==========================================
// EVENT LISTENERS - LOCALIZAÇÃO
// ==========================================

// Event listeners para localização (desktop e mobile)
container_localiza.addEventListener('click', () => {
    ColocarCep();
});

container_localizacao_mobile.addEventListener('click', () => {
    ColocarCep();
});


// ==========================================
// EVENT LISTENERS - SUBCATEGORIA
// ==========================================

// Mouseover para subcategoria
subcategoria.addEventListener('mouseover', () => {
    const container_listaa = document.querySelector('.container_listaa');
    container_listaa.style.display = "flex";
    
    container_listaa.addEventListener('mouseleave', (event) => {
        container_listaa.style.display = "none";
    });
});


// ==========================================
// EVENT LISTENERS - CARROSSEL
// ==========================================

// Botões do carrossel
btn_avancar.addEventListener('click', () => {
    avancarCarrossel();
});

btn_voltar.addEventListener('click', () => {
    voltarCarrossel();
});


// ==========================================
// INICIALIZAÇÃO E CONTROLE DE ESTADO
// ==========================================

//=========================================
//  IMPORTAÇÕES DE MÓDULOS
// =========================================
import { tela_Criar_conta } from './telas/tela_cadastro.js';
import { tela_verificar_codigo } from './telas/tela_codigo_verificacao.js';
import { Tela_editar_perfil } from './telas/tela_editar_perfil_usuario.js';
import { tela_Login } from './telas/tela_login.js';
import { menuHamburer } from './telas/tela_menu_hamburguer.js';
import { telaPerfilusuario } from './telas/tela_perfil_usuario.js';
import { tela_Validacao_Email } from './telas/tela_valida_email.js';
import { alterar_tela } from './telas/alterar_tela.js';



// Inicializar carrossel
iniciarCarrossel();

let logado = JSON.parse(localStorage.getItem('logado'))
let usuario = JSON.parse(localStorage.getItem('usuario'))

// Verificação de estado de login
if (!logado) {
    
    // ==========================================
    // EXECUTADO QUANDO NÃO ESTÁ LOGADO
    // ==========================================
    
    // Event listener para DOM carregado
    document.addEventListener('DOMContentLoaded', () => {
        async function obter() {
            try {
                const data = await obterLocaliza();
                apiPegarendecoLatitude(data.coords.latitude, data.coords.longitude);
            } catch (err) {
                console.log('Erro ao obter localização:', err);
            }
        }
        obter();
    });

    // Event listeners para autenticação
    crie_sua_conta.addEventListener('click', () => {
        tela_Validacao_Email();
    });

    compras.addEventListener('click', () => {
        tela_Login();
    });

    entre.addEventListener('click', () => {
        tela_Login();
    });

    // Event listener para menu hamburger
    menu_hambur.addEventListener('click', () => {
        num++;
        if (num == 1) {
            menuHamburer(logado,usuario);
        } else {
            num = 0;
            location.reload();
        }
    });

} else {
    alterar_tela({logado:logado,usuario:usuario})
     console.log('voce esta logado');
}


// ==========================================
// NOTAS PARA REFATORAÇÃO
// ==========================================

/*
FUNÇÕES QUE PRECISAM SER IMPLEMENTADAS/ENCONTRADAS:
- tela_Validacao_Email()
- tela_Criar_conta()
- tela_Login()
- menuHamburer()

MELHORIAS SUGERIDAS:
1. Separar em módulos (auth.js, carousel.js, location.js, ui.js)
2. Usar const/let de forma consistente
3. Implementar tratamento de erro mais robusto
4. Adicionar validação de dados
5. Usar async/await de forma consistente
6. Remover event listeners duplicados
7. Implementar debounce para alguns eventos
8. Adicionar tipos/JSDoc para melhor documentação
*/