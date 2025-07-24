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
        audio.play()
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



/// aqui vem o foreach com as musicas

const horas = document.querySelectorAll(".horas")
setInterval(()=>{
    
    horas[0].textContent = new Date().getHours()
    horas[1].textContent = new Date().getMinutes()
    horas[2].textContent = new Date().getSeconds()

    let hora = new Date().getHours()
    const container_tempo = document.querySelector(".container_tempo")
    const sol = document.querySelector(".sol")
    const lua = document.querySelector(".lua")
    if(hora > 18){
       sol.style.display="none"
       lua.style.display="flex"
       container_tempo.style.backgroundImage=` linear-gradient(
       to bottom,
      #0a1f33 0%,    /* Azul quase preto */
      #2c2c2c 100%   /* Cinza escuro */
)`
    }else{
        sol.style.display="flex"
        lua.style.display="none"
         container_tempo.style.backgroundImage=` linear-gradient(to bottom , rgba(0, 132, 255, 0.898) 40%,rgba(255, 255, 255, 0.841) 100%)`
    }
})

setInterval(()=>{



fetch('https://ipinfo.io/json?token=')
.then(data => data.json())
.then(cidade =>{

fetch(`https://wttr.in/${cidade.city}?format=j1`)
.then(datas => datas.json())
.then(geolocalizacao =>{
    
    const graus = document.querySelector("#graus")
    graus.textContent=`${geolocalizacao.current_condition[0].temp_C}`
    const sensacao_termica = document.querySelector(".sencacao_termica")
    const desc_clima = document.querySelector(".desc_clima")
    desc_clima.textContent=`${geolocalizacao.current_condition[0].weatherDesc[0].value }`
    
    sensacao_termica.textContent=`Sensação termica ${geolocalizacao.current_condition[0].FeelsLikeC} Cº`

    const btn_fh = document.querySelector(".btn_fh")
    let contador = 0
    btn_fh.addEventListener("click",()=>{
        contador++
        if(contador == 1){
           btn_fh.textContent="Cº"
            graus.textContent=`${geolocalizacao.current_condition[0].temp_C}` 
             sensacao_termica.textContent=`Sensação termica ${geolocalizacao.current_condition[0].FeelsLikeC} Cº`
        }else{
             contador = 0
             btn_fh.textContent="ºF"
              graus.textContent=`${geolocalizacao.current_condition[0].temp_F}`
               sensacao_termica.textContent=`Sensação termica ${geolocalizacao.current_condition[0].FeelsLikeF} ºF`
            
        }
    })
})

})

},30000 )



