import { tela_inicial_logado } from './tela_inicial_logado.js'
export function tela_amigos(){
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
    <header style="height: 50px;">
      
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

    <main id="principal">
        <nav class="container_amigos">
            <ul>
                <li><img src="assets/icon_chevron.svg" alt="">
                <p>Amigos</p>    
                </li>
               
                <li><div class="lupa"><img src="assets/icon_search.svg" alt=""></div></li>
            </ul>

            <div class="container_btns">
                <button id="sugestao">Sugestões</button>
                <button id="seus_amigos">Seus amigo</button>
            </div>
            

        </nav>

        <section id="pedidos_recebidos">
            <div class="container_pedidos_de_amizade">
                <ul class="text_navegacao">
                    <li><p>Pedidos de amizade</p></li>
                    <li><a href="#">Ver tudo</a></li>
                </ul>

                

            </div>
        </section>

<hr>

        <section  id="talvez_conheca">
            <div class="container_pessoas_talvez_conheca">

            </div>
        </section>


    </main>
</body>

</html>

    `

    const home = document.querySelector(".home")
    home.addEventListener("click",()=>{
        tela_inicial_logado()
    })
}