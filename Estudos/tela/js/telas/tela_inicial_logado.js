import { tela_amigos } from './tela_amigos.js'



export function tela_inicial_logado(){

    const principal = document.querySelector("#principal")
    principal.innerHTML=`
    <!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../tela/css/style.css">

</head>

<body>
    <header>
       <div class="container_cima">
         <div class="container_img"><img src="assets/Facebook-Logo.png" alt=""></div>
        <div class="container_menu">
            <div class="lupa"><img src="assets/icon_search.svg" alt=""></div>
            <div class="container_hamburguer"><img src="assets/icon_menu.svg" alt=""></div>
        </div>
       </div>
       <nav class="navegacao">
            <ul>
                <li class="home">
                    <img src="assets/icon_home.svg" alt="home">
                    <div class="notificacao">22</div>
                </li>
                <li class="amigos_icon">
                    <img src="assets/icon_person.svg" alt="">
                    <img class="icon2" src="assets/icon_person.svg" alt="">
                </li>
                <li><img src="assets/icon_message.svg" alt=""></li>
                <li><img src="assets/icon_video.svg" alt=""></li>
                <li class="notifi">
                    <img src="assets/icon_notifi.svg" alt="">
                    <div class="notificacao">12</div>
                </li>
                <li><img src="assets/icon_marketplace.svg" alt=""></li>
            </ul>
        </nav>
    </header>

    <main>
<nav class="container_acoes">
    <div class="container_foto">
        <div class="foto"><img src="https://i.pinimg.com/736x/97/bd/17/97bd17cfa9bb42ac0b7ba08fdc4c341f.jpg" alt="exemplo"></div>
        <div class="icon_online"></div>
    </div>
    <div class="container_post">
        <p>Poste uma atualização de status</p>
    </div>
    <div class="container_postar_foto">
        <img src="assets/icon_img.svg" alt="">
        <p>Foto</p>
    </div>
</nav>

<section id="storys">
    <div class="container_storys">
        <div class="container_criar_story">
            <div class="foto_perfil"></div>
            <div class="icon_mais"><p>+</p></div>
        </div>
        <div class="container_criar_story"></div>
        <div class="container_criar_story"></div>
        <div class="container_criar_story"></div>
        <div class="container_criar_story"></div>
        <div class="container_criar_story"></div>
    </div>
</section>

<section id="posts">
    
</section>

    </main>
</body>

</html>
    
    `

const amigos_icon = document.querySelector(".amigos_icon")
amigos_icon.addEventListener("click",()=>{
    tela_amigos()
})

}


