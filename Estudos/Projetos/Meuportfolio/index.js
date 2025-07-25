let musicas = [
    {src: new Audio("songs/Nirvana_Lithium_(Official Music Video).mp3"), capa: "https://th.bing.com/th/id/OIP.xY8kf1ubyOYNliLYxU6XvwHaEX?w=298&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {src: new Audio("songs/Radiohead_Creep.mp3"), capa: "https://th.bing.com/th/id/OIP.P6aCLmHn7PwYiT9WUNNfswHaE5?w=260&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {src: new Audio("songs/Red_Hot_Chili_Peppers_Californication_(Official_Music_Video)_[HD UPGRADE].mp3"), capa: "https://th.bing.com/th/id/OIP.AMRh-pP4-uuhU_kHPisJ3wHaHa?w=175&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    {src: new Audio("songs/Snoop_Dogg_Riders_on_the_Storm_(feat. The Doors).mp3"), capa: "https://th.bing.com/th/id/OIP.M4f6hfSVb0zHPAjU1esIbgHaHa?w=164&h=180&c=7&r=0&o=7&pid=1.7&rm=3"}
];

let contador_1 = 0;
let audio = musicas[contador_1].src;



    
    
    const musica = document.querySelector("#musica"); // range
    const capa = document.querySelector("#foto_capa"); // imagem da capa
    const btns = document.querySelectorAll(".btn_controles");
    const icon_play = document.querySelector("#play");
    const icon_pause = document.querySelector("#pause");

    icon_play.style.display="none"
    icon_pause.style.display="flex"

    audio.autoplay = true
    audio.volume = 0.02
    

    audio.addEventListener("ended",()=>{
        contador_1++
        audio = musicas[contador_1].src
        audio.autoplay = true
        audio.volume = 0.02
        capa.src = musicas[contador_1].capa
    })


capa.src = musicas[contador_1].capa


let contador = 0; // controle do play/pause

// Carregar metadados e setar max do range
audio.addEventListener("loadedmetadata", () => {
    musica.max = audio.duration;
});

setInterval(() => {
    musica.value = audio.currentTime;
    
}, 500);

btns[1].addEventListener("click", () => {
    contador++;
    if (contador === 1) {
        icon_play.style.display = "none";
        icon_pause.style.display = "flex";
        audio.play();
        audio.volume = 0.03;
    } else {
        contador = 0;
        icon_play.style.display = "flex";
        icon_pause.style.display = "none";
        audio.pause();
    }
});

// BOTÃO VOLTAR
btns[0].addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    contador_1--;
    if (contador_1 < 0) {
        contador_1 = musicas.length - 1;
    }
    audio = musicas[contador_1].src;
    capa.src = musicas[contador_1].capa;
    musica.value = 0;

    audio.addEventListener("loadedmetadata", () => {
        musica.max = audio.duration;
    });

    if (contador === 1) {
        audio.play();
        audio.volume = 0.03;
    }
});

// BOTÃO AVANÇAR
btns[2].addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    contador_1++;
    if (contador_1 >= musicas.length) {
        contador_1 = 0;
    }
    audio = musicas[contador_1].src;
    capa.src = musicas[contador_1].capa;
    musica.value = 0;

    audio.addEventListener("loadedmetadata", () => {
        musica.max = audio.duration;
    });

    if (contador === 1) {
        audio.play();
        audio.volume = 0.03;
    }
});

// mover barra manualmente
musica.addEventListener("input", () => {
    audio.currentTime = musica.value;
});



function aplicarTemaManual(theme) {
  const body = document.body;
  const themeIcon = document.querySelector('.theme-icon path');
  const container_tempo = document.querySelector('.container_tempo');
  const sol = document.querySelector('.sol');
  const lua = document.querySelector('.lua');

  if (theme === 'light') {
    body.setAttribute('data-theme', 'light');
    themeIcon.setAttribute('d', 'M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M2 12h2m16 0h2M6.34 6.34l-1.42-1.42M19.07 19.07l-1.42-1.42');
    container_tempo.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 132, 255, 0.898) 40%, rgba(255, 255, 255, 0.841) 100%)`;
    sol.style.display = "flex";
    lua.style.display = "none";
  } else {
    body.removeAttribute('data-theme');
    themeIcon.setAttribute('d', 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z');
    container_tempo.style.backgroundImage = `linear-gradient(to bottom, #0a1f33 0%, #2c2c2c 100%)`;
    sol.style.display = "none";
    lua.style.display = "flex";
  }
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  if (currentTheme === 'light') {
    aplicarTemaManual('dark');
  } else {
    aplicarTemaManual('light');
  }
}

setInterval(() => {
  const horas = document.querySelectorAll(".horas");
  const now = new Date();
  const hora = now.getHours();

  horas[0].textContent = String(hora).padStart(2, '0');
  horas[1].textContent = String(now.getMinutes()).padStart(2, '0');
  horas[2].textContent = String(now.getSeconds()).padStart(2, '0');

  const container_tempo = document.querySelector(".container_tempo");
  const sol = document.querySelector(".sol");
  const lua = document.querySelector(".lua");

  // Só muda o fundo automático se o usuário NÃO tiver escolhido tema manual
  if (!localStorage.getItem('theme')) {
    if (hora > 18) {
      sol.style.display = "none";
      lua.style.display = "flex";
      container_tempo.style.backgroundImage = `linear-gradient(
        to bottom,
        #0a1f33 0%, 
        #2c2c2c 100%
      )`;
    } else {
      sol.style.display = "flex";
      lua.style.display = "none";
      container_tempo.style.backgroundImage = `linear-gradient(
        to bottom,
        rgba(0, 132, 255, 0.898) 40%,
        rgba(255, 255, 255, 0.841) 100%
      )`;
    }
  }
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    aplicarTemaManual(savedTheme);
  } else {
    // Se não tiver salvo, aplica o fundo e ícones conforme a hora atual
    const hora = new Date().getHours();
    if (hora > 18) {
      aplicarTemaManual('dark');
    } else {
      aplicarTemaManual('light');
    }
  }
});


setInterval(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
      .then(data => data.json())
      .then(cidade => {
        // Corrigindo para pegar a cidade correta do objeto
        const nomeCidade = cidade.address.city || cidade.address.town || cidade.address.village || 'Sao Paulo';

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(nomeCidade)},BR&appid=ad30cc98e4dc41aef1a77b7bf0c46292&units=metric&lang=pt_br`)
          .then(datas => datas.json())
          .then(geolocalizacao => {
            
            const graus = document.querySelector("#graus");
            const sensacao_termica = document.querySelector(".sencacao_termica");
            const desc_clima = document.querySelector(".desc_clima");

            graus.textContent = `${geolocalizacao.main.temp}`;
            desc_clima.textContent = `${geolocalizacao.weather[0].description}`;
            sensacao_termica.textContent = `Sensação térmica ${geolocalizacao.main.feels_like} Cº`;

            // Evita adicionar o listener múltiplas vezes
            if (!btn_fh.hasListener) {
              let contador = 0;
              btn_fh.addEventListener("click", () => {
                contador++;
                if (contador == 1) {
                  btn_fh.textContent = "Cº";
                  graus.textContent = `${geolocalizacao.main.temp}`;
                  sensacao_termica.textContent = `Sensação térmica ${geolocalizacao.main.feels_like} Cº`;
                } else {
                  contador = 0;
                  btn_fh.textContent = "ºF";
                  graus.textContent = `${((geolocalizacao.main.temp * 9) / 5 + 32)}`;
                  sensacao_termica.textContent = `Sensação térmica ${((geolocalizacao.main.feels_like * 9) / 5 + 32)} ºF`;
                }
              });
              btn_fh.hasListener = true; // marca que já adicionou listener
            }
          });
      });
  });
}, 50000);

const btn_fh = document.querySelector(".btn_fh");



