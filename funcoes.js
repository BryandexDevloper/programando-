
//menu hamburguer
    function clickMenu() {
        // Seleciona o elemento do menu
        const menucelular = document.getElementById('menucelular');
        
        // Verifica se o elemento existe
        if (!menucelular) {
            console.error('Elemento com o ID "menucelular" não encontrado.');
            return;
        }

        // Alterna a exibição do menu
        if (menucelular.style.display === 'block') {
            menucelular.style.display = 'none';
        } else {
            menucelular.style.display = 'block';
        }
    }
//fim menu hamburguer










//vira o chevron e mostra a div
   // Seleciona todos os elementos de toggle
document.querySelectorAll('.chevron-toggle').forEach(chevron => {
  chevron.addEventListener('click', (e) => {
    e.preventDefault(); // Evita comportamento padrão do link

    // Seleciona a div de detalhes associada ao botão clicado
    const details = chevron.closest('.container-nav-piloticas').nextElementSibling;

    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block'; // Mostra a div
      chevron.classList.add('rotate'); // Adiciona a classe para rotação
    } else {
      details.style.display = 'none'; // Oculta a div
      chevron.classList.remove('rotate'); // Remove a classe de rotação
    }
  });
});

//fim vira o chevron e mostra a div



//muda a foto pc
    function mudarImagem(foto) {
    // Altera a imagem do elemento com id "foto-grande" para a foto clicada ou ao passar o mouse
    document.getElementById('foto-grande').src = foto;
}
//muda a foto pc
  document.addEventListener('DOMContentLoaded', function() {
    const imagens = document.querySelectorAll('.foto-produto23'); // Todas as divs com as imagens
    const contadorFoto = document.getElementById('foto-atual');
    const totalFotos = document.getElementById('total-fotos');
    const radios = document.querySelectorAll('.container-radio input[type="radio"]');

    const total = imagens.length;
    let fotoAtual = 0;

    let isChanging = false; // Variável de controle para impedir múltiplas mudanças rápidas

    // Inicializa o contador de fotos
    totalFotos.textContent = total;
    contadorFoto.textContent = fotoAtual + 1;

    // Atualiza o rádio e a foto ao clicar
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                mudarFoto(index);
            }
        });
    });

    // Função para mudar a foto
    function mudarFoto(index) {
        if (isChanging) return; // Impede mudanças rápidas

        isChanging = true; // Ativa a variável de controle
        fotoAtual = index;
        contadorFoto.textContent = fotoAtual + 1; // Atualiza o contador

        // Atualiza a visibilidade das imagens
        imagens.forEach((img, i) => {
            img.style.display = (i === fotoAtual) ? 'block' : 'none'; // Exibe a foto atual
        });

        // Atualiza o rádio
        radios.forEach((radio, i) => {
            radio.checked = (i === fotoAtual);
        });

        // Após 300ms (duração da transição), desbloqueia a mudança de foto
        setTimeout(() => {
            isChanging = false;
        }, 300);
    }

    // Função para detectar o swipe
    let startX;

    document.querySelector('.foto-mobile').addEventListener('touchstart', function(e) {
        startX = e.changedTouches[0].screenX;
    });

    document.querySelector('.foto-mobile').addEventListener('touchend', function(e) {
        const endX = e.changedTouches[0].screenX;
        if (startX - endX > 50) { // Swipe para esquerda
            fotoAtual = Math.min(fotoAtual + 1, total - 1); // Vai para a próxima foto
        } else if (endX - startX > 50) { // Swipe para direita
            fotoAtual = Math.max(fotoAtual - 1, 0); // Vai para a foto anterior
        }
        mudarFoto(fotoAtual);
    });

    // Inicializa a primeira foto
    mudarFoto(fotoAtual);
});


