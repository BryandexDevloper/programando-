<?php
// Configurações do banco de dados
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "produtos";

// Conexão com o banco de dados
$conn = new mysqli($servidor, $usuario, $senha, $banco);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Pega o ID do produto da URL (ou usa 1 como padrão)
$id_produto = isset($_GET['id']) ? $_GET['id'] : 1;

// Consulta para o produto específico
$sql_produto = "SELECT * FROM catalogo_produtos WHERE id = $id_produto";
$resultado_produto = $conn->query($sql_produto);

// Consulta para os produtos "Inspirado no último visto"
$sql_ultimos_produtos = "SELECT * FROM catalogo_produtos";
$resultado_ultimos_produtos = $conn->query($sql_ultimos_produtos);
?>



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mercado livre brasil - frete gratis no mesmo dia</title>
    <link rel="stylesheet" href="Mercado-livre-pag1.css" media="screen">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="Mercado-livre-pag1.css">

</head>

<body>
    <header>
        <div class="cima">
            <div class="img-cell">
                <img src="imagens/th-removebg-preview.png" alt="">
            </div>
            <div class="img">
                
                <picture>
                    <source media="(max-width:700px)" srcset="C:\Users\adria\Downloads\projeto\arquivos de estudo\estudos\Meusprojetos\ex022\html-css\Desafios\imagens\th-removebg-preview.png">
                    <img src="imagens/Captura de tela_6-1-2025_1544_www.mercadolivre.com.br.jpeg" alt=""></div>
                </picture>
            <div class="search">
                <label for="search"></label>
                <input type="search" name="Barra-de-pesquisa" id="search" placeholder="Buscar produtos, marcas e muito mais…">
                <div class="btn-pesquisa"><svg width="50%" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2f2f2f" stroke-width="1">
                    <g id="SVGRepo_iconCarrier">
                      <circle cx="10.5" cy="10.5" r="6.5" stroke="#2f2f2f"></circle>
                      <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" stroke="#2f2f2f"></path>
                    </g>
                  </svg>
                  </div>
            </div>
            
            <div class="img2">
                <img src="https://http2.mlstatic.com/D_NQ_928314-MLA81829463215_012025-OO.webp" alt="Meli+">
                <div class="menu-hamburguer" onclick="clickMenu()">
                    <div class="linha"></div>
                    <div class="linha"></div>
                    <div class="linha"></div>
                </div>
                <div class="svg-carrinho"><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25" viewBox="0 0 53 53" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M45,32.5l8-21H13l-4-8H0v2h8l11,27H45z M50,13.5l-6,17H20l-7-17H50z M25,37.5c-3.293,0-6,2.686-6,6c0,3.314,2.707,6,6,6 s6-2.686,6-6C31,40.186,28.293,37.5,25,37.5z M25,47.5c-2.192,0-4-1.794-4-4s1.808-4,4-4s4,1.794,4,4S27.192,47.5,25,47.5z M42,37.5c-3.293,0-6,2.686-6,6c0,3.314,2.707,6,6,6c3.293,0,6-2.686,6-6C48,40.186,45.293,37.5,42,37.5z M42,47.5c-2.192,0-4-1.794-4-4s1.808-4,4-4c2.192,0,4,1.794,4,4S44.192,47.5,42,47.5z"/>
                  </svg>
                  </div>
            </div>
           
        </div>
        <div class="baixo">
            <div class="cep">
                <div class="location">
                    <img src="https://img.icons8.com/ios/50/marker--v1.png" alt="location">
                </div>
                <div class="div-texto-cep"><span class="tablet-text">informe seu CEP</span><span class="remov1" style="font-size: 9px;">Informe seu</span>
                <span class="remov2">CEP</span>
                 
                </div>  
            </div>
            <div class="categorias">
                <ul>
                    <li>Categorias
                        <ul class="submenu">
                            <li>Veiculos</li>
                            <li>Supermercado</li>
                            <li>Tecnologia</li>
                            <li>Casa e móveis</li>
                            <li>Eletrodomésticos</li>
                            <li>Espotes e fitness</li>
                            <li>Ferramentas</li>
                            <li>Construção</li>
                            <li>Indústria e comércio</li>
                        </ul>
                    </li>
                    <li>Ofertas</li>
                    <li>Cupons</li>
                    <li>Supermercado</li>
                    <li>Moda</li>
                    <li>Mercado play</li>
                    <li>Vender</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div class="menu">
                <svg  
                class="icone-seta" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 32 32">
                <path 
                  d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  fill="currentColor">
                </path>
              </svg>
              
                <ul style="display: flex; align-items: center; justify-content: center;">
                    <li>Crie a sua conta</li>
                    <li>Entre</li>
                    <li>Compras</li>
                    <li></li>
                </ul>
            </div>
        </div>
    </header>

    <!--Area Menu celular-->
    <div id="menucelular">
        <nav id="sua-conta">
            <div class="perfil-foto">
                <div class="foto-perfil">
                </div>
                <div class="texto">
                    <span style="font-size: 16px;">Bem-vindo</span>
                    <span style="color: rgba(0, 0, 0, 0.45); font-size: 14px;">Entra na sua conta para ver suas compras, favoritos etc.</span>
                </div>
            </div>
            <div class="buttons-menu">
                <a href="#" class="entre" style="color: white; background-color: rgb(52, 132, 250);">Entre</a>
                <a href="#" class="crie-sua-conta" style="color: rgb(52, 132, 250); background-color: white; border: 1px solid rgb(52, 132, 250);">Crie sua conta</a>
            </div>
        </nav>
        <div class="navgation">
            <ul>
                <li><div class="icon"><svg width="24px" height="40px" viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="1">
                    <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="none" stroke="black"></path>
                  </svg><p>Inicio</p></div></li>
                <li><div class="icon"><i class="material-icons">local_offer</i>
                  <p>Ofertas</p></div></li>
                <li><div class="icon"><svg width="24px" height="40px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M892.9 145.2H130.1c-33.5 0-60.7 27.2-60.7 60.7v503.4c0 33.4 27.2 60.7 60.7 60.7h762.8c33.5 0 60.7-27.2 60.7-60.7V205.8c0-33.4-27.3-60.6-60.7-60.6z m8.7 564.1c0 4.8-3.9 8.7-8.7 8.7H130.1c-4.8 0-8.7-3.9-8.7-8.7V205.8c0-4.8 3.9-8.7 8.7-8.7h762.8c4.8 0 8.7 3.9 8.7 8.7v503.5zM719.3 823.9h-416c-14.4 0-26 11.6-26 26s11.6 26 26 26h416.1c14.4 0 26-11.6 26-26s-11.7-26-26.1-26z m-83.2-384.8l-173.4-104c-8-4.8-18-4.9-26.2-0.3-8.1 4.6-13.2 13.3-13.2 22.6v208c0 9.4 5 18 13.2 22.6 4 2.3 8.4 3.4 12.8 3.4 4.6 0 9.3-1.3 13.4-3.7l173.4-104c7.8-4.7 12.6-13.2 12.6-22.3 0-9.1-4.8-17.6-12.6-22.3z" fill="#000000"></path>
                    </g>
                  </svg>
                  <p>Mercado play</p> <p style="font-size: 12px; border-radius: 10px; background-color: rgb(0, 166, 80); padding:2px ; color: white; font-weight: bold;">gratis</p></div></li>
                <li><div class="icon"><img width="24px" height="" src="https://img.icons8.com/external-line-adri-ansyah/64/external-time-e-commerce-line-adri-ansyah.png" alt="external-time-e-commerce-line-adri-ansyah"/><p>Historico</p></div></li>
                <li><div class="icon"><i class="material-icons">headset_mic</i><p>Contato</p></div></li>
            </ul>
            <hr>
            <ul>
                <li><div class="icon"><i class="material-icons">shopping_bag</i><p>Supermercado</p></div></li>
                <li><div class="icon"><svg width="24px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 7L6 4H9C9 4.39397 9.0776 4.78407 9.22836 5.14805C9.37913 5.51203 9.6001 5.84274 9.87868 6.12132C10.1573 6.3999 10.488 6.62087 10.8519 6.77164C11.2159 6.9224 11.606 7 12 7C12.394 7 12.7841 6.9224 13.1481 6.77164C13.512 6.62087 13.8427 6.3999 14.1213 6.12132C14.3999 5.84274 14.6209 5.51203 14.7716 5.14805C14.9224 4.78407 15 4.39397 15 4H18L21 7L20.5 12L18 10.5V20H6V10.5L3.5 12L3 7Z" stroke="#000000" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path> </g></svg><p>Moda</p></div></li>
                <li><div class="icon"><svg width="24px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)matrix(-1, 0, 0, -1, 0, 0)" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.7249 8.15612C16.2754 7.23788 17.0507 6.77876 17.6201 7.10452C18.1895 7.43027 18.1758 8.32517 18.1486 10.115L18.1416 10.578C18.1339 11.0866 18.13 11.3409 18.2248 11.5644C18.3196 11.7878 18.5023 11.9552 18.8677 12.2899L19.2003 12.5946C20.4862 13.7725 21.1291 14.3614 20.9784 15.0228C20.8277 15.6841 19.9831 15.9799 18.2941 16.5714L17.8571 16.7245C17.3771 16.8926 17.1371 16.9766 16.953 17.1451C16.7689 17.3137 16.6615 17.5476 16.4467 18.0153L16.2512 18.4412C15.4953 20.0874 15.1174 20.9105 14.4549 20.9935C13.7924 21.0765 13.284 20.3644 12.2673 18.9402L12.0043 18.5717C11.7154 18.167 11.5709 17.9647 11.3623 17.8453C11.1538 17.726 10.9047 17.7032 10.4065 17.6576L9.95303 17.6161C8.20005 17.4557 7.32356 17.3754 7.06482 16.7654C6.80608 16.1553 7.33644 15.4194 8.39716 13.9477L8.67158 13.5669C8.973 13.1487 9.12372 12.9396 9.17893 12.6973C9.23414 12.4551 9.18759 12.2071 9.09451 11.7111L9.00976 11.2596C8.68219 9.51421 8.51841 8.64154 9.02101 8.18152C9.52362 7.7215 10.3598 7.9788 12.032 8.49339L12.4647 8.62652C12.9399 8.77276 13.1775 8.84587 13.4202 8.81547C13.6629 8.78508 13.8832 8.65461 14.3238 8.39368L14.7249 8.15612Z" fill="#none"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96967 1.96967C9.26256 1.67678 9.73744 1.67678 10.0303 1.96967L12.0303 3.96967C12.3232 4.26256 12.3232 4.73744 12.0303 5.03033C11.7374 5.32322 11.2626 5.32322 10.9697 5.03033L8.96967 3.03033C8.67678 2.73744 8.67678 2.26256 8.96967 1.96967ZM3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L7.03033 5.96967C7.32322 6.26256 7.32322 6.73744 7.03033 7.03033C6.73744 7.32322 6.26256 7.32322 5.96967 7.03033L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967ZM12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967L14.0303 5.96967C14.3232 6.26256 14.3232 6.73744 14.0303 7.03033C13.7374 7.32322 13.2626 7.32322 12.9697 7.03033L12.4697 6.53033C12.1768 6.23744 12.1768 5.76256 12.4697 5.46967ZM1.46967 7.46967C1.76256 7.17678 2.23744 7.17678 2.53033 7.46967L3.03033 7.96967C3.32322 8.26256 3.32322 8.73744 3.03033 9.03033C2.73744 9.32322 2.26256 9.32322 1.96967 9.03033L1.46967 8.53033C1.17678 8.23744 1.17678 7.76256 1.46967 7.46967ZM3.96967 9.96967C4.26256 9.67678 4.73744 9.67678 5.03033 9.96967L6.53033 11.4697C6.82322 11.7626 6.82322 12.2374 6.53033 12.5303C6.23744 12.8232 5.76256 12.8232 5.46967 12.5303L3.96967 11.0303C3.67678 10.7374 3.67678 10.2626 3.96967 9.96967Z" fill="#none"></path> </g></svg><p>Mais vendidos</p></div></li>
                <li><div class="icon"><svg width="24px" height="40px" viewBox="-2 -2 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.0002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.04"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,1.39534884 C5.24778239,1.39534884 1.39534884,5.24778239 1.39534884,10 C1.39534884,14.7522176 5.24778239,18.6046512 10,18.6046512 C14.7522176,18.6046512 18.6046512,14.7522176 18.6046512,10 C18.6046512,5.24778239 14.7522176,1.39534884 10,1.39534884 Z M12.0484173,3.48837209 C12.6943954,3.73316368 13.2935211,4.07289922 13.830321,4.49688876 C13.8375175,4.49955698 13.8439329,4.5035935 13.8504647,4.51161526 C13.9752161,4.60791044 14.0954634,4.70955914 14.2130514,4.81924671 C14.2345081,4.83797551 14.2540701,4.85802133 14.2748787,4.87810136 C14.602995,5.18169627 14.9006466,5.52280013 15.165789,5.88928623 C15.2021706,5.94011912 15.2412115,5.98689841 15.2749672,6.03641431 C15.3393207,6.13004127 15.3990537,6.22770477 15.4589031,6.32528274 C15.5063373,6.40290041 15.5538046,6.48180089 15.5979479,6.56205257 C15.6486063,6.65164299 15.6973867,6.74131895 15.7441726,6.8349117 C15.7968255,6.93657751 15.8449244,7.04493097 15.8929568,7.150582 C15.9261308,7.22412893 15.9625124,7.29902709 15.9930438,7.37664476 C16.0658404,7.55854515 16.1314404,7.74181386 16.1899602,7.92906779 C16.2088574,7.99055645 16.2237823,8.05746707 16.2419482,8.11895573 C16.2816373,8.25943039 16.3180356,8.40389025 16.3479021,8.5443478 C16.3641567,8.61787764 16.3777853,8.69142458 16.3913806,8.76497151 C16.4173746,8.91350212 16.4388314,9.05661077 16.4570804,9.20640707 C16.4641772,9.27196648 16.4739831,9.3415282 16.4791852,9.40700207 C16.499329,9.62237488 16.5116279,9.83909889 16.5116279,10.0570886 C16.5116279,10.2710931 16.4993456,10.4851147 16.4804318,10.6964851 C16.4740163,10.7619761 16.4661716,10.8328719 16.4577451,10.8970801 C16.4414906,11.04154 16.4200339,11.1859999 16.3947046,11.3264574 C16.3810096,11.4000044 16.3693588,11.4735513 16.3544338,11.5444642 C16.3147282,11.7344377 16.268607,11.9203404 16.2146412,12.1048748 C15.7064613,11.8708245 15.1079339,11.5284207 14.9519532,11.1511763 C14.6679967,10.4704224 13.9121755,10.1306526 13.6042029,9.25457176 C13.0966047,7.80467086 13.7699065,7.84347969 13.8647248,6.94328227 C13.908303,6.52062683 13.6042029,6.43365329 13.2025752,6.60486372 C12.2674219,6.9981346 11.9502915,6.84697 11.7611534,6.14206535 C11.5719986,5.43851191 11.7611534,5.24323625 11.7611534,5.24323625 C11.12302,5.31278086 11.0989207,4.53568049 11.4297462,4.34040482 C11.6604016,4.20796902 11.8554067,3.80270829 12.0484173,3.48837209 Z M9.37419054,7.79658069 C9.96429148,7.52779229 10.5088696,7.4301288 10.4374027,6.96601342 C10.3665008,6.50716604 10.2008138,6.16479649 9.27928909,6.16479649 C8.35718264,6.16479649 8.75939198,7.4301288 8.00298911,6.67574247 C7.24716795,5.92535846 8.16802789,6.11931713 8.54623763,5.9481067 C8.92453048,5.77554505 9.30272358,5.07067462 8.64113908,5.02115872 C7.97955458,4.97436234 8.12125859,5.31274668 7.60136146,5.12013922 C7.08148097,4.92486355 6.84495861,5.7996103 6.51346829,5.67791578 C6.29511184,5.5963129 5.7096147,5.14557278 5.32168214,4.70282022 C4.53986696,5.37962308 3.90947863,6.23964335 3.48837209,7.21210492 C3.60085774,8.52019708 4.29230877,9.20637291 4.29230877,9.20637291 C4.29230877,9.20637291 4.64706737,10.0570544 6.77473816,11.10308 C6.77473816,11.10308 7.17570097,11.1270939 6.70327121,10.6415986 C6.23082482,10.154735 5.71027952,9.54744255 6.30096215,9.23178937 C6.89174452,8.91348506 7.05811294,8.94025273 7.1997172,9.52469432 C7.34142121,10.1092385 7.81451581,9.76555194 7.86131834,9.20640707 C7.90876907,8.64863051 8.78284309,8.06545461 9.37419054,7.79658069 Z M8.92451384,10.7379451 C9.94152175,10.7379451 9.8466203,11.0535983 10.650557,11.7624539 C11.4544106,12.4660416 11.0287501,13.170912 10.626441,13.7073257 C10.2248799,14.2409857 9.87003816,14.8469099 9.68090006,15.9449828 C9.49184506,17.0391217 8.99529936,16.2593703 8.83026056,15.9918475 C8.66522176,15.7229736 8.4046167,15.4808674 8.47673184,14.3613119 C8.54622099,13.244476 7.78981814,13.9025501 7.5305427,12.4419421 C7.27060244,10.9840537 7.90875244,10.7379451 8.92451384,10.7379451 Z M13.9005248,11.7009653 C14.1721158,11.5284036 14.8213183,11.9791951 14.6803622,12.4539833 C14.5380266,12.9288057 14.0895798,12.661283 13.8647082,12.4539833 C13.6399197,12.2480519 13.6282025,11.8708245 13.9005248,11.7009653 Z"></path> </g></svg><p>Internacional</p></div></li>
                <li><div class="icon"><svg width="24px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M44.88,53H13.67a2.93,2.93,0,0,1-3-2.84V24.59"></path><line x1="50.68" y1="24.76" x2="50.68" y2="35.77"></line><polyline points="24.93 52.95 24.93 35.88 36.51 35.88 36.51 52.95"></polyline><path d="M7.12,16.6s-1.1,7.76,6.45,9a7.15,7.15,0,0,0,6.1-2,7.43,7.43,0,0,0,11-.1,7.37,7.37,0,0,0,5,2.49,11.77,11.77,0,0,0,5.89-2.15,6.67,6.67,0,0,0,4.68,2.15,8,8,0,0,0,7.92-9.3L49.46,6.48a1,1,0,0,0-.94-.66H12.7a1,1,0,0,0-.94.66Z"></path><line x1="7.12" y1="16.6" x2="54.21" y2="16.6"></line><line x1="19.72" y1="16.6" x2="19.72" y2="5.82"></line><line x1="30.72" y1="16.6" x2="30.72" y2="5.82"></line><line x1="41.69" y1="16.6" x2="41.69" y2="5.82"></line><circle cx="50.68" cy="45.37" r="9.6"></circle><polyline points="46.22 46.93 49.45 49.37 55.13 41.38"></polyline></g></svg><p>Lojas oficiais</p></div></li>
                <li><div class="icon"><svg width="24px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000" _mstTextHash="1100112" _mstHash="3840"><g id="SVGRepo_bgCarrier" stroke-width="0" _isTranslated="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001" _isTranslated="1"></g><g id="SVGRepo_iconCarrier" _isTranslated="1"> <title _mstTextHash="351156" _mstHash="3837" _isTranslated="1">lista de categorias</title> <g id="Layer_2" data-name="Layer 2" _isTranslated="1"> <g id="invisible_box" data-name="invisible box" _isTranslated="1"> <rect width="48" height="48" fill="none" _isTranslated="1"></rect> </g> <g id="icons_Q2" data-name="icons Q2" _isTranslated="1"> <path d="M24,10h0a2,2,0,0,1,2-2H42a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H26A2,2,0,0,1,24,10Z" _isTranslated="1"></path> <path d="M24,24h0a2,2,0,0,1,2-2H42a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H26A2,2,0,0,1,24,24Z" _isTranslated="1"></path> <path d="M24,38h0a2,2,0,0,1,2-2H42a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H26A2,2,0,0,1,24,38Z" _isTranslated="1"></path> <path d="M12,7.9,14.4,12H9.5L12,7.9M12,2a2.1,2.1,0,0,0-1.7,1L4.2,13a2.3,2.3,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H18a2.1,2.1,0,0,0,1.7-1,1.8,1.8,0,0,0,0-2l-6-10A1.9,1.9,0,0,0,12,2Z" _isTranslated="1"></path> <path d="M12,30a6,6,0,1,1,6-6A6,6,0,0,1,12,30Zm0-8a2,2,0,1,0,2,2A2,2,0,0,0,12,22Z" _isTranslated="1"></path> <path d="M16,44H8a2,2,0,0,1-2-2V34a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2v8A2,2,0,0,1,16,44Zm-6-4h4V36H10Z" _isTranslated="1"></path> </g> </g> </g></svg><p>Categorias</p></div></li>
            </ul>
            <hr>
            <ul>
                <li><div class="icon"><svg fill="#000000" height="24px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M443.103,71.306H416.76V44.963c0-5.142-4.167-9.31-9.31-9.31h-26.342V9.31c0-5.142-4.167-9.31-9.31-9.31h-302.9 c-5.143,0-9.31,4.169-9.31,9.31v422.074c0,5.142,4.167,9.31,9.31,9.31H95.24v26.342c0,5.142,4.167,9.31,9.31,9.31h26.342v26.342 c0,5.142,4.167,9.31,9.31,9.31h302.9c5.143,0,9.31-4.169,9.31-9.31V80.616C452.413,75.474,448.246,71.306,443.103,71.306z M78.208,422.074V18.621h284.279v403.453H78.208z M113.862,457.726v-17.032h257.935c5.143,0,9.31-4.169,9.31-9.31V54.274h17.033 v403.453H113.862z M433.792,493.379H149.513v-17.032H407.45c5.143,0,9.31-4.169,9.31-9.31V89.927h17.032V493.379z"></path> </g> </g> <g> <g> <path d="M271.292,95.592H169.404c-5.143,0-9.31,4.169-9.31,9.31s4.167,9.31,9.31,9.31h101.887c5.143,0,9.31-4.169,9.31-9.31 S276.435,95.592,271.292,95.592z"></path> </g> </g> <g> <g> <path d="M313.448,141.771h-186.2c-5.143,0-9.31,4.169-9.31,9.31s4.167,9.31,9.31,9.31h186.2c5.143,0,9.31-4.169,9.31-9.31 S318.59,141.771,313.448,141.771z"></path> </g> </g> <g> <g> <path d="M313.448,187.948h-186.2c-5.143,0-9.31,4.169-9.31,9.31s4.167,9.31,9.31,9.31h186.2c5.143,0,9.31-4.169,9.31-9.31 S318.59,187.948,313.448,187.948z"></path> </g> </g> <g> <g> <path d="M313.448,234.125h-186.2c-5.143,0-9.31,4.169-9.31,9.31s4.167,9.31,9.31,9.31h186.2c5.143,0,9.31-4.169,9.31-9.31 S318.59,234.125,313.448,234.125z"></path> </g> </g> <g> <g> <path d="M313.448,280.303h-186.2c-5.143,0-9.31,4.169-9.31,9.31s4.167,9.31,9.31,9.31h186.2c5.143,0,9.31-4.169,9.31-9.31 S318.59,280.303,313.448,280.303z"></path> </g> </g> <g> <g> <path d="M313.448,326.48h-186.2c-5.143,0-9.31,4.169-9.31,9.31s4.167,9.31,9.31,9.31h186.2c5.143,0,9.31-4.169,9.31-9.31 S318.59,326.48,313.448,326.48z"></path> </g> </g> </g></svg><p>Resumo</p></div></li>
                <li ><div class="icon" style="padding: 0px 10px;"><i class="material-icons" >local_offer</i><p> Vender</p></div></li>
            </ul>
        </div>
    </div>
<!--Fim area menu celular-->

<main>
    <div class="footer">
       <div class="carrosel">
        <img class="carrosel-pc" src="https://http2.mlstatic.com/D_NQ_630907-MLA81498722886_012025-OO.webp" alt="img-pc">
        <img class="carrosel-pc" src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1734118272001-desk-mainslider-landing.png" alt="" class="carrosel-pc">
        <img class="carrosel-pc" src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1734370165938-desk-mainslider-landing.png" alt="" class="carrosel-pc">
        <img class="carrosel-pc" src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1736345385862-desk-mainslider-landing64.png" alt="" class="carrosel-pc">






        <img  class="carrosel-mob" src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1734118264250-mobile-mainslider-regular.png" alt="mob">
        <img class="carrosel-mob" src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1734370158884-mobile-mainslider-regular.png" alt="" class="carrosel-mob">
        <img class="carrosel-mob" src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1734370188903-mobile-mainslider-regular.png" alt="" class="carrosel-mob">
        <img class="carrosel-mob" src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1735909824882-mobile-mainslider-regular11.png" alt="" class="carrosel-mob">




       </div>
       <div class="botoes-radio">
        <div class="btn1"><i class="material-icons" style="color: rgb(52, 132, 250);">chevron_left</i></div>
        <div class="radio">
            <label for="Radiof"></label>
        <input type="radio" name="Radiof" id="Radio1">
        <label for="Radiof"></label>
        <input type="radio" name="Radiof" id="Radio2">
        <label for="Radiof"></label>
        <input type="radio" name="Radiof" id="Radio3">
        <label for="Radiof"></label>
        <input type="radio" name="Radiof" id="Radio4">
        <label for="Radiof"></label>
        <input type="radio" name="Radiof" id="Radio5">
        <label for="Radiof"></label>
        <input type="radio" name="Radiof" id="Radio6">
        <label for="Radiof"></label>
        <input type="radio" name="Radiof" id="Radio7">
        
        </div>
        <div class="btn2"><i class="material-icons" style="color: rgb(52, 132, 250);">chevron_right</i></div>
       </div>
    </div>
  <!--Area frete gratis mobile-->
    <div class="container-celular-frete-gratis">
        <div><svg fill="#00a650" width="20px" height="40px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#00a650"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2.84375 13C1.285156 13 0 14.285156 0 15.84375L0 42C0 43.660156 1.339844 45 3 45L7.09375 45C7.570313 47.835938 10.035156 50 13 50C15.964844 50 18.429688 47.835938 18.90625 45L28.15625 45C28.894531 45 29.554688 44.6875 30.0625 44.21875C30.582031 44.675781 31.246094 44.992188 32 45L33.09375 45C33.570313 47.835938 36.035156 50 39 50C42.300781 50 45 47.300781 45 44C45 40.699219 42.300781 38 39 38C36.035156 38 33.570313 40.164063 33.09375 43L32 43C31.8125 43 31.527344 42.871094 31.3125 42.65625C31.097656 42.441406 31 42.183594 31 42L31 23C31 22.625 31.625 22 32 22L40 22C40.785156 22 41.890625 22.839844 42.65625 23.75C42.664063 23.761719 42.679688 23.769531 42.6875 23.78125L42.84375 24L38 24C36.40625 24 35 25.289063 35 27L35 31C35 31.832031 35.375 32.5625 35.90625 33.09375C36.4375 33.625 37.167969 34 38 34L48 34L48 42C48 42.375 47.375 43 47 43L45 43L45 45L47 45C48.660156 45 50 43.660156 50 42L50 32.375C50 30.085938 48.40625 28.0625 48.40625 28.0625L48.375 28.0625L44.25 22.5625L44.25 22.53125L44.21875 22.5C43.296875 21.386719 41.914063 20 40 20L32 20C31.644531 20 31.316406 20.074219 31 20.1875L31 15.90625C31 14.371094 29.789063 13 28.1875 13 Z M 2.84375 15L28.1875 15C28.617188 15 29 15.414063 29 15.90625L29 42.15625C29 42.625 28.628906 43 28.15625 43L18.90625 43C18.429688 40.164063 15.964844 38 13 38C10.035156 38 7.570313 40.164063 7.09375 43L3 43C2.625 43 2 42.371094 2 42L2 15.84375C2 15.375 2.367188 15 2.84375 15 Z M 38 26L44.34375 26L46.78125 29.25C46.78125 29.25 47.6875 30.800781 47.875 32L38 32C37.832031 32 37.5625 31.875 37.34375 31.65625C37.125 31.4375 37 31.167969 37 31L37 27C37 26.496094 37.59375 26 38 26 Z M 13 40C15.222656 40 17 41.777344 17 44C17 46.222656 15.222656 48 13 48C10.777344 48 9 46.222656 9 44C9 41.777344 10.777344 40 13 40 Z M 39 40C41.222656 40 43 41.777344 43 44C43 46.222656 41.222656 48 39 48C36.777344 48 35 46.222656 35 44C35 41.777344 36.777344 40 39 40Z"></path></g></svg></div>
        <span><p>Frete grátis</p></span><p>por ser sua primeira compra*</p>
    </div>
    
    <!--Fim area frete gratis mobile-->
<div class="blur"></div>

<!--Area Informações-->
<div class="alinhamento-conteudo">
    <section class="categorias-celular">
        <div class="bolinha-categoria">
            <div class="bolinha">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_mercado_pago_carousel_mobile.webp" alt="">
            </div>
            <p>Mercado<br>Pago</p>
        </div>
        <div class="bolinha-categoria">
            <div class="bolinha">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_ofertas_carousel_mobile.webp" alt="">
            </div>
            <p>Ofertas</p>
        </div>
        <div class="bolinha-categoria">
            <div class="bolinha" style="box-shadow: inset 0px 0px 0px 2px rgb(0, 166, 80);">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_mplay_black_carousel_mobile.webp" alt="">
            </div>
            <p>Mercado <br>Play</p>
            
        </div>
        <div class="bolinha-categoria">
            <div class="bolinha">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_supermercado_carousel_mobile.webp" alt="">
            </div>
            <p>supermer-<br>cado</p>
        </div>
        <div class="bolinha-categoria">
            <div class="bolinha">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_style_summer_female_v1_carousel_mobile.webp" alt="">
            </div>
            <p>Moda</p>
        </div>
        <div class="bolinha-categoria">
            <div class="bolinha">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_celulares_carousel_mobile.webp" alt="">
            </div>
            <p>Celulares</p>
        </div>
        <div class="bolinha-categoria">
            <div class="bolinha">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_vehiculos_carousel_red2_mobile.webp" alt="">
            </div>
            <p>Veiculos</p>
        </div>
        <div class="bolinha-categoria">
            <div class="bolinha">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_armchair_carousel_mobile.webp" alt="">
            </div>
            <p>Lar</p>
        </div>
        <div class="bolinha-categoria">
            <div class="bolinha">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_computacion_carousel_mobile.webp" alt="">
            </div>
            <p>Computa-<br>ção</p>
        </div>
        <div class="bolinha-categoria">
            <div class="bolinha">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_tv_carousel_mobile.webp" alt="">
            </div>
            <p>Televiso-<br>res</p>
        </div>
        <div class="bolinha-categoria">
            <div class="bolinha">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_best_sellers_carousel_mobile.webp" alt="">
            </div>
            <p>Mais<br>Vendidos</p>
        </div>
        <div class="bolinha-categoria">
            <div class="bolinha">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/quick_access/home_row_ver_mas_carousel_mobile.webp" alt="">
            </div>
            <p>Ver Mais</p>
        </div>
    </section>


    <section id="sec1">
        <div class="mini-container">
            <div class="h2"><h2>Frete Gratis</h2></div>
            <div class=" mini-container-img"><img src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg" alt="Frete-gratis"></div>
            <div class="paragrafo">Benefício por ser sua primeira compra.</div>
            <div class="btn"><a href="#">Mostrar mais Produtos</a></div>
        </div>
        <div class="mini-container">
            <div class="h2" style="margin: 0; text-align: center;"><h2>Insira sua localização</h2></div>
            <div class=" mini-container-img"><img src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/location.svg" alt="localização"></div>
            <div class="paragrafo">Confira os custos e prazos de entrega.</div>
            <div class="btn"><a href="#">Inserir localização</a></div>
        </div>
        <div class="mini-container">
            <div class="h2"><h2>Entre na sua conta</h2></div>
            <div class=" mini-container-img"><img src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/registration-da.svg" alt="Sua conta"></div>
            <div class="paragrafo">Aproveite ofertas para comprar tudo que quiser.</div>
            <div class="btn"><a href="#">Entrar na sua conta</a></div>
        </div>
        <div class="mini-container">
            <div class="h2" style="display: flex; justify-content:left; margin:0; padding: 0 9px;"><h2>Meios de pagamento</h2></div>
            <div class=" mini-container-img"><img src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/payment-methods.svg" alt="Formas de pagamento"></div>
            <div class="paragrafo">Pague suas compras com rapidez e segurança.</div>
            <div class="btn"><a href="#">Mostrar meios</a></div>
        </div>
        <div class="mini-container">
            <div class="h2"><h2>Menos de <strong>R$100</strong></h2></div>
            <div class=" mini-container-img"><img src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/mlb-low-price-product.svg" alt="Meios de pagamento"></div>
            <div class="paragrafo">Benefício por ser sua primeira compra.</div>
            <div class="btn"><a href="#">Mostrar produtos</a></div>
        </div>
        <div class="mini-container">
            <div class="h2"><h2>Compra garantida</h2></div>
            <div class=" mini-container-img"><img src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/buy-protected.svg" alt="Compra garantida"></div>
            <div class="paragrafo">Você pode devolver sua compra grátis.</div>
            <div class="btn"><a href="#">Como funciona</a></div>
        </div>


        
    </section><!--AREA Informações-->
    
 

    <section id="sec3">
    <div class="container-produtos">
        <h2 class="titulo-mais">Inspirado no último visto</h2>
        <div class="produtos">

        <?php
        // Verifica se há produtos na consulta de "Inspirado no último visto"
        if ($resultado_ultimos_produtos->num_rows > 0) {
            while ($linha = $resultado_ultimos_produtos->fetch_assoc()) {
                // Validação dos dados do banco
                $preco_antigo = isset($linha["preco_antigo"]) ? $linha["preco_antigo"] : 0;
                $preco_atual = isset($linha["preco_atual"]) ? $linha["preco_atual"] : 0;
                $desconto = isset($linha["desconto"]) ? $linha["desconto"] : 0;
                $parcelado_em = isset($linha["parcelado_em"]) ? $linha["parcelado_em"] : 0;
                $valor_parcela = isset($linha["valor_parcela"]) ? $linha["valor_parcela"] : 0;
                $frete_gratis = isset($linha["frete_gratis"]) ? $linha["frete_gratis"] : false;

                // HTML para exibir os produtos
                echo "<div class='area-produtos'>";
                echo "    <div class='foto-produto'>";
                echo "        <img src='" . htmlspecialchars($linha["imagem_url"]) . "' alt='Produto'>";
                echo "    </div>";
                echo "    <div class='titulo-preco'>";
                echo "        <a href='Paginaproduto.php?id=" . $linha['id'] . "' class='titulo-produto' style='color: black;'>" . htmlspecialchars($linha["nome"]) . "</a>";
                echo "        <div class='promo' style='color:#808080;'><s>R$" . $preco_antigo . "</s></div>"; // Sem formatação de moeda
                echo "        <div class='valor-desconto'>"; 
                echo "            <span class='cifrao'>R$</span><span class='valor'>" . $preco_atual . "</span>"; // Sem formatação de moeda
                echo "            <span class='desconto'>" . htmlspecialchars($desconto) . "% OFF</span>";
                echo "        </div>";
                echo "        <div class='parcelado'>";
                echo "            <span>em " . htmlspecialchars($parcelado_em) . "x R$" . $valor_parcela . "</span>"; // Sem formatação de moeda
                echo "        </div>";
                echo "        <div class='frete-gratis'>"; 
                echo $frete_gratis ? "<span class='frete-verde'>Frete grátis por ser sua primeira compra</span>" : "<span class='frete-verde'>Frete não incluso</span>";
                echo "        </div>";
                echo "    </div>";
                echo "</div>";
            }
        } else {
            echo "<p>Nenhum produto encontrado.</p>";
        }
        ?>

        </div>  <!-- Fim da div de produtos -->
    </div>  <!-- Fim da div de container-produtos -->
</section>

    
    <section id="sec4">
        <div class="banners">
            <div class="banner1">
                <div class="palavras">
                    <span style="font-size: 10px; margin-bottom: 10px;">LANÇAMENTO</span>
                    <span><h2>LANCÔME</h2></span>
                    <span><h2>LOJA OFICIAL</h2></span>
                    <span style="font-size: 10px; margin-top:10px">Compre agora</span>
                </div>
                <div class="foto-perfume">
                    <img src="https://http2.mlstatic.com/D_NQ_609303-MLA80712629855_112024-OO.webp" alt="">
                </div>
            </div>
            <div class="banner2">
                <div class="texto1">
                    <div class="eletro">
                        <div><img src="https://http2.mlstatic.com/D_NQ_978226-MLA81434987890_122024-OO.webp" alt=""></div>
                    </div>
                    <div class="palavras2">
                        <span style="font-size: 10px; white-space: nowrap;">ESPECIAL ELECTROLUX</span>
                        <span style="font-size: 12px;"><h2>DESCONTOS</h2></span>
                        <span style="font-size: 12px;"><h2>IMPERDÍVEIS</h2></span>
                        <span style="font-size: 10px;">Compre já</span>
                    </div>
                </div>
                <div class="foto1">
                    <img src="https://http2.mlstatic.com/D_NQ_873825-MLA81435016932_122024-OO.webp" alt="">
                </div>
            </div>
        </div>
    </section>
    <div class="banner-meli-mais">
        <div class="meli">
            <div class="roxo">
                <div class="meli-img-titulo"><img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/meliplus/home/meliplus-outline-pill@3x.png" alt="Meli logo">
                <span style="margin-left: 10px; color: white;">Assine a partir de  </span> <span class="cifrao" style="color: white;">R$</span><span class="valor" style="color: white;">9</span> <span class="centavos" style="color: white;">00</span><span class="valor" style="color: white;">/mês</span>
                
            </div>
            <div class="botao"><a href="#">Assinar o Meli+</a></div>
            </div>
            <div class="conteudo-roxo">
                <div class="conteudo-meli-texto"> <span style="font-weight: 600; font-size: 18px;">Economize em frete, compras e pagamentos, e faça seu dinheiro render
                </span></div>
                <div class="condicoes">
                    <div class="condicoes-etc">
                        <div class="imagem-banner"><img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/free_shipping_2x.png" alt="caminhao-logo"></div>
                        <div class="texto-banner">
                            <span style="font-size: 10px;">Frete grátis em <br> milhões de <br> produtos a partir <br> de R$ 29</span>
                        </div>
                    </div>
                    <div class="condicoes-etc">
                        <div class="imagem-banner"><img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/interest_free_installments_discount_2x.png" alt="cartao-logo"></div>
                        <div class="texto-banner">
                            <span style="font-size: 10px;" >Até 3 parcelas extras sem juros</span>
                        </div>
                    </div>
                    <div class="condicoes-etc">
                        <div class="imagem-banner"><img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/cashback-ml_2x.png" alt="caminhao-logo"></div>
                        <div class="texto-banner">
                            <span style="font-size: 10px;">Cashback em compras e pagamentos</span>
                        </div>
                    </div>
                    <div class="condicoes-etc">
                        <div class="imagem-banner"><img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/money_profit_2x.png" alt="caminhao-logo"></div>
                        <div class="texto-banner">
                            <span style="font-size: 10px;">Seu dinheiro rende 105% do CDI no Mercado Pago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!--Anuncio meli+ mobile-->
    <div class="container-banner-roxo-mobile">
         <div class="roxo-mobile">
            <div class="img-meli-mobile">
                <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/meliplus/home/meliplus-outline-pill@3x.png" alt="meli+mobile">
                <div class="traco-branco-meli-mobile"></div>
                <span style="color: white; font-size: 16px; ">Assine a partir de <br>
                    <span style="padding-right:3px;">R$</span><span style="padding-right: 2px;">9</span><span style="font-size: 10px; position: relative; bottom:6px;">90</span><span>/mes</span>
                </span>
            </div>
            
        </div>
         <div class="conteudo-roxo-mobile">
            <p style="font-size: 14px">Economize em frete, compras e pagamentos, e faça seu dinheiro render</p>
            <div class="conteudo-roxo-mobile-sessao1">
                <div class="imagem-banner-mobile-meli">
                    <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/free_shipping_2x.png" alt="">
                </div>
                <p>Frete grátis em milhões de produtos a partir de R$ 29</p>
            </div>
            <div class="conteudo-roxo-mobile-sessao1">
                <div class="conteudo-roxo-mobile-sessao1">
                    <div class="imagem-banner-mobile-meli">
                        <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/interest_free_installments_discount_2x.png" alt="">
                    </div>
                    <p>Até 3 parcelas extras sem juros</p>
                </div>
            </div>
            <div class="conteudo-roxo-mobile-sessao1">
                <div class="conteudo-roxo-mobile-sessao1">
                    <div class="imagem-banner-mobile-meli">
                        <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/cashback-ml_2x.png" alt="">
                    </div>
                    <p>Cashback em compras e pagamentos</p>
                </div>
            </div>
            <div class="conteudo-roxo-mobile-sessao1">
                <div class="conteudo-roxo-mobile-sessao1">
                    <div class="imagem-banner-mobile-meli">
                        <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/money_profit_2x.png" alt="">
                    </div>
                    <p>Seu dinheiro rende 105% do CDI no Mercado Pago</p>
                </div>
            </div>
         </div>
    </div>
</div>

</main>




<!--Script Carrosel de imagens-->

<script>
    // Seleciona os elementos necessários
const imagensPc = document.querySelectorAll(".carrosel-pc");
const imagensMob = document.querySelectorAll(".carrosel-mob");
const radios = document.querySelectorAll(".radio input");
const btnPrev = document.querySelector(".btn1");
const btnNext = document.querySelector(".btn2");

// Variáveis de controle
let indexAtual = 0; // Índice atual da imagem exibida
const tempoTroca = 3000; // Tempo em milissegundos para troca automática
const isMobile = window.innerWidth <= 768; // Detecta se é mobile

// Array com as imagens correspondentes
const imagensAtuais = isMobile ? imagensMob : imagensPc;

// Função para mostrar a imagem atual e atualizar os radios
function atualizarCarrossel() {
    // Esconde todas as imagens
    imagensAtuais.forEach((img, index) => {
        img.style.display = index === indexAtual ? "block" : "none";
    });

    // Atualiza o estado dos radios
    radios.forEach((radio, index) => {
        radio.checked = index === indexAtual;
    });
}

// Função para avançar uma imagem
function avancarImagem() {
    indexAtual = (indexAtual + 1) % imagensAtuais.length; // Vai para a próxima imagem
    atualizarCarrossel();
}

// Função para voltar uma imagem
function voltarImagem() {
    indexAtual = (indexAtual - 1 + imagensAtuais.length) % imagensAtuais.length; // Volta para a imagem anterior
    atualizarCarrossel();
}

// Adiciona eventos aos botões de navegação
btnNext.addEventListener("click", avancarImagem);
btnPrev.addEventListener("click", voltarImagem);

// Adiciona evento aos radios para navegar manualmente
radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
        indexAtual = index; // Atualiza o índice com o radio selecionado
        atualizarCarrossel();
    });
});

// Troca automática de imagens
setInterval(avancarImagem, tempoTroca);

// Inicializa o carrossel
atualizarCarrossel();

</script>

<!--Fim script carrossel de imagens-->


<!--Script Menu Hamburguer-->

<script>
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
</script>

<!--Fim script menu-->

</body>
</html>