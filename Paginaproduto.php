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

// Consulta todos os dados do produto (usando o ID)
$id_produto = isset($_GET['id']) ? $_GET['id'] : 1; // Pega o ID do produto da URL (ou usa 1 como padrão)
$sql = "SELECT * FROM catalogo_produtos WHERE id = $id_produto";
$resultado = $conn->query($sql);



// Consulta para os produtos "Inspirado no último visto"
$sql_ultimos_produtos = "SELECT * FROM catalogo_produtos";
$resultado_ultimos_produtos = $conn->query($sql_ultimos_produtos);

$sql_produtos_ultimos_vistos = "SELECT * FROM produtos_ultimos_vistos";
$resultado_produtos_ultimos_vistos = $conn->query($sql_produtos_ultimos_vistos);





$produtos = [];
if ($resultado_ultimos_produtos->num_rows > 0) {
    while ($linha = $resultado_ultimos_produtos->fetch_assoc()) {
        $produtos[] = $linha;
    }
}

// Verifica se há resultado
if ($resultado->num_rows > 0) {
    $linha = $resultado->fetch_assoc();
    $titulo_produto = $linha['nome'];
    $imagem_url = $linha['imagem_url'];
    $preco_antigo = $linha['preco_antigo'];
    $preco_atual = $linha['preco_atual'];
    $desconto = $linha['desconto'];
    $parcelado_em = $linha['parcelado_em'];
    $valor_parcela = $linha['valor_parcela'];
    $frete_gratis = $linha['frete_gratis'];
    $foto_1 = $linha['foto_1'];
    $foto_2 = $linha['foto_2'];
    $foto_3 = $linha['foto_3'];
    $foto_4 = $linha['foto_4'];
    $foto_5 = $linha['foto_5'];
    $foto_6 = $linha['foto_6'];
    $foto_7 = $linha['foto_7'];
    $chegara_dia = $linha['chegara_dia'];
    $retire_dia = $linha['retire_dia'];
    $foto_loja = $linha['foto_loja'];
    $nome_loja = $linha['nome_loja'];
    $quantidade_produtos_loja = $linha['quantidade_produtos_loja'];
    $quantidade_vendas_concluidas = $linha['quantidade_vendas_concluidas'];
    $nome_marca = $linha['nome_marca'];
    $linha_produto = $linha['linha'];
    $modelo = $linha['modelo'];
    $garantia = $linha['garantia'];
    $formato_venda = $linha['formato_venda'];
    $tipo_produto = $linha['tipo_produto'];
    $descricao = $linha['descricao'];
    $pergunta_comprador1 = $linha['pergunta_comprador1'];
    $resposta_vendedor1 = $linha['resposta_vendedor1'];
    $pergunta_comprador2 = $linha['pergunta_comprador2'];
    $resposta_vendedor2 = $linha['resposta_vendedor2'];
    $pergunta_comprador3 = $linha['pergunta_comprador3'];
    $resposta_vendedor3 = $linha['resposta_vendedor3'];
    $avaliacao_1 = $linha['avaliacao_1'];
    $avaliacao_2 = $linha['avaliacao_2'];
    $avaliacao_3 = $linha['avaliacao_3'];
} else {
    die("Produto não encontrado");
}

// Fecha a conexão
$conn->close();
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
    <link rel="stylesheet" type="text/css" href="Mercado-livre-produtos.css">
    <script src="funcoes.js"></script>
    

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
<!--conteudo mobile-->
<div class="container-pai-pag-produtos-mobile">
    <div class="container-quantidades-vendas-avaliacoes-mobile">
        <div style="display: flex;gap: 10px;">
            <span class="pequeno-grey">Novo</span>
            <div class="barra-pequena-entre-frases"></div>
            <span class="pequeno-grey">+50mil Vendidos</span>
        </div>
        <div class="container-quantidade-avaliacoes-estrelas-mobile">
            <span class="pequeno-grey">4.7</span>
            <div class="stars-container">
            <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <polygon points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9" />
            </svg>
            <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <polygon points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9" />
            </svg>
            <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <polygon points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9" />
            </svg>
            <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <polygon points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9" />
            </svg>
            <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <polygon points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9" />
            </svg>
          </div>
          <span class="pequeno-grey">(2928)</span>
          </div>
    </div>
    <div class="container-mercado-preto">
        <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/melichoice.svg" alt="mercado-preto">
        <span>RECOMENDADO</span>
    </div>


    <!--php celular vem  aqui-->


    <!--TITULO ANUNCIO MOBILE-->
    <h1 class="titulo-produto-mobile"><?php echo $titulo_produto; ?></h1>
    <div class="container-produto-mobile"> 
        <div class="container-numero-foto-favorito">
            <div class="contador-foto"><span id="foto-atual">3</span><span>/</span><span id="total-fotos" >5</span></div>
            <div class="favorito-mobile"><i class="material-icons">favorite</i></div>
        </div>
                <div class="foto-mobile">
            <div class="foto-produto23">
                <img src="<?php echo $foto_1; ?>" alt="Foto 1">
            </div>
            <div class="foto-produto23">
                <img src="<?php echo $foto_2; ?>" alt="Foto 2">
            </div>
            <div class="foto-produto23">
                <img src="<?php echo $foto_3; ?>" alt="Foto 3">
            </div>
            <div class="foto-produto23">
                <img src="<?php echo $foto_4; ?>" alt="Foto 4">
            </div>
            <div class="foto-produto23">
                <img src="<?php echo $foto_5; ?>" alt="Foto 5">
            </div>
            <div class="foto-produto23">
                <img src="<?php echo $foto_6; ?>" alt="Foto 6">
            </div>
            <div class="foto-produto23">
                <img src="<?php echo $foto_7; ?>" alt="Foto 7">
            </div>
        </div>

        <div class="container-compartilhar">
            <div></div>
            <div><i class="material-icons">share</i></div>
        </div>
        <div class="container-radio">
            <label for="radio-mobile"></label>
            <input type="radio" name="radio" id="radio-1">
            <input type="radio" name="radio" id="radio-2">
            <input type="radio" name="radio" id="radio-3">
            <input type="radio" name="radio" id="radio-4">
            <input type="radio" name="radio" id="radio-5">
        </div>
        <div class="container-valor-produto-mobile">
            <div class="preco-antigo-mobile">
                <s>
                                <span class="antigo-cifrao-mobile-pag-produto">R$</span>
                <span class="antigo-valor-produto-mobile">
                    <?php echo number_format($preco_antigo, 0, ',', '.'); ?>
                </span>
                <span class="antigo-centavos">
                    <?php 
                    // Calculando os centavos
                    $centavos = $preco_antigo - floor($preco_antigo);
                    echo number_format($centavos * 100, 0, ',', '.');
                    ?>
                </span>
                </s>
            </div>
        </div>
        <div class="valor-atual-mobile">
        <span class="cifrao-mobile">R$</span>
                <span class="valor-atual-pag-mobile">
                    <?php echo number_format($preco_atual, 0, ',', '.'); ?>
                </span>
                <span class="centavos-atual-mobile">
                    <?php 
                    // Calculando os centavos para o preço atual
                    $centavos_atual = $preco_atual - floor($preco_atual);
                    echo number_format($centavos_atual * 100, 0, ',', '.');
                    ?>
                </span>
                <span class="desconto-mobile">
                    <?php 
                    // Exibindo o desconto em porcentagem
                    echo $desconto . '%';
                    ?>
                </span>
                <span class="desconto-mobile">OFF</span>
        </div>
        <span class="pague-parcelado">Pague parcelado</span>
        <span class="link-azul-pequeno"><a href="#">Ver os meios de pagamento</a></span>
        <?php 
// Verifica se a coluna 'chegara_dia' no banco é 1, e exibe a mensagem
if ($chegara_dia == 1) {
    echo '<span class="data-entrega-mobile">Chegará entre dia 6 e 11/fev</span>';
}

// Verifica se a coluna 'retire_dia' no banco é 1, e exibe a mensagem
if ($retire_dia == 1) {
    echo '<span class="data-entrega-rapida-mobile">Chegará entre sexta-feira e quarta-feira 5/fev</span>';
}
?>
        <span class="link-azul-pequeno"><a href="#">Mais formas de entrega</a></span>
        <div class="container-estoque-disponivel-mobile">
            <p>Estoque disponível</p>
            <div class="container-quantidade-box">
                <div class="container-quantidade">
                    <span>Quantidade:</span>
                    <span class="quantidade-disponivel-comprar">1</span>
                    <span class="quantidade-disponivel">(+500 disponíveis)</span>
                </div>
                <i class="material-icons" style="color: rgb(52, 132, 250);">chevron_right</i>
            </div>
        </div>
        <div class="container-buttons-menu">
            <a href="#">Comprar Agora</a>
            <a href="#">Adicionar ao carrinho</a>
        </div>
        <div class="vendido-por-mobile">
        <span>Vendido por</span><span class="nome-da-loja"><?php echo $nome_loja; ?></span>
            <!--------------------------------------------------------->
        </div>
        <span class="total-vendas">+10mil vendas</span>
        <div class="garantia-container">
            <div class="garantia1">
                <div class="icon-back"><i class="material-icons">keyboard_return</i></div>
                <div class="texto-garantia"><span style="color: rgb(52, 132, 250); font-size: 14px; ">Devolução gratís.</span><span style="font-size: 14px; color: grey;">Você tem 30 dias a partir da data de recebimento.</span></div>
            </div>
            <div class="garantia2">
                <div class="protecao"><i class="material-icons">verified_user</i></div>
                <div class="protecao"><span style="color:rgb(52, 132, 250) ; font-size: 14px;">Compra garantida</span><span style="font-size: 14px; color: grey;">, receba o produto que está esperando ou devolvemos o dinheiro.</span></div>
            </div>
            <div class="garantia3">
                <div class="medalha"><i class="material-icons">workspace_premium</i></div>
                <div class="texto-medalha"><span style="color: gray; font-size: 14px;">90 dias de garantia da fábrica.</span></div>
            </div>
           

                <div class="container-favoritar-celular">
                    <div><i class="material-icons">favorite</i><span class="link-azul-pequeno"><a href="#">Adicionar aos favoritos</a></span></div>
                    <div><i class="material-icons">share</i><span class="link-azul-pequeno"><a href="#">Compartilhar</a></span></div>                                                   
                </div>
            <hr>
            <div class="container-descricao-produto-mobile">
                <h2>Características do produto</h2>
                <div class="container-caracteristica-produto">
                    <div class="container-descri"><div><img src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/default.svg" alt="cheked"></div><span>Marca:</span><span class="marca-mobile"><?php echo $nome_marca; ?></span></div>
                    <div class="container-descri"><div><img src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/default.svg" alt="cheked"></div><span>Modelo:</span><span class="modelo-mobile"><?php echo $modelo; ?></span></div>
                    <div class="container-descri"><div><img src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/default.svg" alt="cheked"></div><span>Linha:</span><span class="linha"><?php echo $linha_produto; ?></span></div>
                    <div class="container-descri"><div><img src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/default.svg" alt="cheked"></div><span>Tipo de produto:</span><span class="terreno"><?php echo $tipo_produto; ?></span></div>
                    <div class="container-descri"><div><img src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/default.svg" alt="cheked"></div><span>Garantia:</span><?php echo $garantia; ?></span></div>
                </div>

                <div class="container-conferir-caracteristicas">
                    <div class="container-quantidade">
                        <span class="link-azul-pequeno"><a href="#">Conferir todas as caracteísticas</a></span>
                    </div>
                    <i class="material-icons" style="color: rgb(52, 132, 250);">chevron_right</i>
                </div>
                
            </div>
            <hr>
            <div class="container-produtos-relacionados-mobile">
        <h2>Produtos relacionados</h2>
        <span class="pequeno-grey">Patrocinado</span>
        <div class="produtos-relacionados">

        <?php
        // Verifica se há produtos na consulta de "Inspirado no último visto"
        if ($resultado_produtos_ultimos_vistos->num_rows > 0) {
            while ($linha = $resultado_produtos_ultimos_vistos->fetch_assoc()) {
                // Validação dos dados do banco
                $preco_antigo = isset($linha["preco_antigo"]) ? $linha["preco_antigo"] : 0;
                $preco_atual = isset($linha["preco_atual"]) ? $linha["preco_atual"] : 0;
                $desconto = isset($linha["desconto"]) ? $linha["desconto"] : 0;
                $parcelado_em = isset($linha["parcelado_em"]) ? $linha["parcelado_em"] : 0;
                $valor_parcela = isset($linha["valor_parcela"]) ? $linha["valor_parcela"] : 0;
                $frete_gratis = isset($linha["frete_gratis"]) ? $linha["frete_gratis"] : false;
                $titulo_produto = isset($linha["nome"]) ? $linha["nome"] : 'Produto não disponível';
                $imagem_url = isset($linha["imagem_url"]) ? htmlspecialchars($linha["imagem_url"]) : 'imagens/default.jpg';
        
                // HTML para exibir os produtos
                echo "<div class='container-produto'>";
                echo "    <div class='foto-produto'><img src='" . $imagem_url . "' alt='Produto'></div>";
                echo "    <div class='titulo-valor-condicoes'>";
                echo "        <div class='valor-desconto-centavos' style='margin-top: 20px;'>";
                echo "            <span class='cifrao1'>R$</span><span class='valor1'>" . $preco_atual . "</span><span class='centavos1'>00</span><span class='desconto1'>" . $desconto . "% OFF</span>";
                echo "        </div>";
                echo "        <div class='parcelado' style='margin-top: 5px;'>";
                echo "            <span class='parcelado-em-vezes'>em</span><span class='quantidades-parcelas'>" . $parcelado_em . "x</span><span class='cifrao-valor-da-parcela'>R$</span><span class='valor-parcela'>" . $valor_parcela . "</span>";
                echo "        </div>";
                echo "        <div class='texto-produto-relacionado-container' style='margin-top: 20px;'>";
                echo "            <span class='frete-gratis' style='color: #00A650; font-size: 14px;'>" . ($frete_gratis ? 'Frete grátis' : 'Frete não incluso') . "</span><span style='color: grey; font-size: 14px;'> por ser sua primeira compra</span>";
                echo "        </div>";
                echo "        <div class='titulo-produto-relacionados' style='font-size: 14px; margin-top: 10px;'><span class='titulo-produto-relacionado'>" . htmlspecialchars($titulo_produto) . "</span></div>";
                echo "    </div>";
                echo "</div>";
            }
        } else {
            echo "<p>Nenhum produto encontrado.</p>";
        }
        ?>

        </div> <!-- Fim da div de produtos-relacionados -->
    </div> <!-- Fim da div de container-produtos-relacionados-mobile -->
                <hr style="margin-top: 50px;margin-bottom: 50px;">
                <div class="container-vendedor">
                    <div class="container-foto-nome-vendeor">
                        <div class="container-foto-nome">
                            <div class="foto-nome"><img src="<?php echo $foto_loja; ?>" alt="Foto-loja"></div><!--aqui vai a foto da loja-->
                            <div class="nome-vendedor"><span class="nome-do-vendedor"><strong><?php echo $nome_loja; ?></strong> <!--aqui o nome-->
                                <div><span style="font-size: 14px;"><?php echo $quantidade_produtos_loja; ?></span> <span style="color: grey; font-size: 14px;">Produtos</span></div>
                            </span></div>
                        </div>
                        <div class="botao-seguir">
                            <a href="#" class="seguir">Seguir</a>
                        </div>
                    </div>
                    <div class="container-vendas-feitas-etc">
                        <div class="medalha">
                            <span style="color:rgb(0, 166, 80) ;font-size: 14px;">MercadoLíder gold</span>
                            <span style="font-size: 14px; color: grey;">É um dos melhores do site</span>
                        </div>
                        <div class="arcoiris">
                            <div class="cor1" style="background-color: #FDE2E5; width: 60px; height: 4px;"></div>
                            <div class="cor2" style="background-color: #FFEBE1; width: 60px; height: 4px;"></div>
                            <div class="cor3" style="background-color: #FFFCD9; width: 60px; height: 4px;"></div>
                            <div class="cor4" style="background-color: #F3FADE; width: 60px; height: 4px;"></div>
                            <div class="cor5" style="background-color: #00A650; width: 60px; height: 4px;"></div>
                        </div>
                        <div class="container-quantidade-vendas"><!--CONTAINER DAS VENDAS FEITAS ATENDIMENTO ETC...-->
                            <div class="venda1">
                                <p style="font-size: 14px;"><?php echo $quantidade_vendas_concluidas; ?></p>
                                <p style="font-size: 12px;  color: gray;">Vendas concluidas</p>
                            </div>
                            <div class="venda1">
                                <div class="mensagem-perfil"><img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive-v2.svg" alt=""></div>
                                <p style="font-size: 12px; color: gray;">Oferece bom <br>atendimento</p>
                            </div>
                            <div class="venda1">
                                <div class="mensagem-perfil"> <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive-v2.svg" alt=""></div>
                                <p style="font-size: 12px; color: gray;">Entregas os <br>produtos dentro <br>prazo</p>
                                
                            </div>
                        </div>
                            <div style="display: flex; align-items:center; justify-content: center; width: 100%; height: 100%;">
                                <div class="botao-vender-ir-para-pagina-vendedor">
                                    <span>Ir para a página do vendedor</span>
                                </div>
                            </div>
                    </div>
                    
                </div>
                <hr style="margin-bottom: 50px;margin-top: 50px;">
                <h2 style="font-weight: 500;font-size: 20px;">Fotos do produto</h2>
                                    <div class="caixa-foto-produto">
                        <div class="foto-produto-comprar" data-foto="<?php echo $foto_1; ?>">
                            <img src="<?php echo $foto_1; ?>" alt="Foto 1" />
                        </div>
                        <div class="foto-produto-comprar" data-foto="<?php echo $foto_2; ?>">
                            <img src="<?php echo $foto_2; ?>" alt="Foto 2" />
                        </div>
                        <div class="foto-produto-comprar" data-foto="<?php echo $foto_3; ?>">
                            <img src="<?php echo $foto_3; ?>" alt="Foto 3" />
                        </div>
                        <div class="foto-produto-comprar" data-foto="<?php echo $foto_4; ?>">
                            <img src="<?php echo $foto_4; ?>" alt="Foto 4" />
                        </div>
                        <div class="foto-produto-comprar" data-foto="<?php echo $foto_5; ?>">
                            <img src="<?php echo $foto_5; ?>" alt="Foto 5" />
                        </div>
                        <div class="foto-produto-comprar" data-foto="<?php echo $foto_6; ?>">
                            <img src="<?php echo $foto_6; ?>" alt="Foto 6" />
                        </div>
                        <div class="foto-produto-comprar" data-foto="<?php echo $foto_7; ?>">
                            <img src="<?php echo $foto_7; ?>" alt="Foto 7" />
                        </div>
                    </div>  
            </div>
            <div class="container-descircao-produto">
                <h2 style="font-weight: 500; margin-top: 40px; font-size: 20px;">Descrição</h2>
                <p class="descricao" style="margin-top: 60px; color: gray;"><?php echo $descricao; ?></p>
            </div>
            <hr style="margin-bottom: 50px;">
            <div class="meios-pagamento">
                <h2 style="font-size: 16px;font-weight: 500;">Meios de pagamento</h2>
                <h3 style="font-size: 14px;font-weight: 500;margin-top: 20px;">Linha de Crédito</h3>
                <div style="margin-top: 10px;"><img src="https://http2.mlstatic.com/storage/logos-api-admin/b4534650-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="mercado-pago logo"></div>
                <h3 style="font-size: 14px; font-weight: 500;margin-top: 20px;">Cartões de crédito</h3>
                <p style="font-size: 13px; color: grey;">Pague em até 12x!</p>
                <div style="margin-top: 10px;"><img src="https://http2.mlstatic.com/storage/logos-api-admin/ddf23a60-f3bd-11eb-a186-1134488bf456-m.svg" alt="cartao-de-credito">
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/37f7b160-6278-11ec-ae75-df2bef173be2-m.svg" alt="elo">
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="visa">
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="">
                <h3 style="font-size: 14px;font-weight: 500;margin-top: 20px;">Cartões de débito</h3>
                <div style="display: flex; gap: 10px;"><img src="https://http2.mlstatic.com/storage/logos-api-admin/1e7db140-6f0b-11ec-813c-8542a9aff8ea-m.svg" alt="">
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/d2407420-f3bd-11eb-8e0d-6f4af49bf82e-m.svg" alt="">
                </div>
                <h3 style="font-size: 14px;font-weight: 500;margin-top: 20px;">Pix</h3>
                <div> <img src="https://http2.mlstatic.com/storage/logos-api-admin/f99fcca0-f3bd-11eb-9984-b7076edb0bb7-m.svg" alt="pix"></div>
                <h3 style="font-size: 14px;font-weight: 500; margin-top: 20px;">Boleto bancário</h3>
                <div><img src="https://http2.mlstatic.com/storage/logos-api-admin/00174300-571e-11e8-8364-bff51f08d440-m.svg" alt=""></div>
                <p style="color: rgb(52, 132, 250);font-size: 12px; margin-top: 20px;">Confira outros meios de pagamento</p>
                </div>
                <div class="container-conferir-caracteristicas">
                    <div class="container-quantidade">
                        <span class="link-azul-pequeno"><a href="#">Confíra outros meios </a></span>
                    </div>
                    <i class="material-icons" style="color: rgb(52, 132, 250);">chevron_right</i>
                </div>
            </div>
            <hr style="margin-bottom: 30px;">
            <div class="container-anuncio-volks-mob">
                <div class="preto-volks">
                    <div class="img-volks-preto"><img src="https://http2.mlstatic.com/D_NQ_739355-MLA81384146010_122024-O.webp" alt=""></div>
                    <div class="texto-preto-volks">
                        <span class="pequeno-texto-anuncio-mobile">PARA SUA REVISÃO</span>
                        <span class="grande-pequeno-texto-anuncio-mobile">CUPONS COM</span>
                        <span class="grande-pequeno-texto-anuncio-mobile">10% OFF</span>
                        <span class="pequeno-texto-anuncio-mobile">Confira</span>
                    </div>
                </div>
                <div class="carinha-volks">

                </div>
            </div>
            <hr style="margin-bottom: 50px;">
            <div class="container-perguntas">
                <h2 style="font-weight: 500;">Perguntas e respostas</h2>
                <h3 style="font-weight: 500; margin-top: 50px;">Qual informação você precisa?</h3>
                <div class="container-botoes-perguntas">
                    <a href="#">Custo e prazo de envio</a>
                    <a href="#">Devolução grátis</a>
                    <a href="#">Meios de pagamentos</a>
                    <a href="#">Garantia</a>
                </div>
                <h3 style="margin-top: 50px; margin-bottom: 20px; font-weight: 500;">Pergunte ao vendedor</h3>
                <div class="container-enviar-pergunta">
                    <textarea name="envie-sua-pergunta" id="envie" placeholder="Envie sua pergunta" ></textarea>
                    <a href="#"><i class="material-icons">search</i></a>
                </div>
                                <!--Container perguntas e respostas-->
                <div class="container-ultimas-perguntas-feitas">
                    <h3 style="font-weight: 500; font-size: 18px; margin-top: 50px;">últimas perguntas feitas</h3>
                    <!--classe perguntas e respostas-->
                    <div class="pergunta">
                        <span class="pergunta"><?php echo $pergunta_comprador1; ?></span>
                        <div style="display: flex; margin-top: 10px;"><span style="padding-right: 10px; color: gray;">L</span><span class="resposta" style="color: grey; font-size: 14px;" ><?php echo $resposta_vendedor1; ?></span></div>  
                    </div><!--perguntas terminam aqui-->
                    
                    <div class="pergunta">
                        <span class="pergunta"><?php echo $pergunta_comprador2; ?></span>
                        <div style="display: flex; margin-top: 10px;"><span style="padding-right: 10px; color: gray;">L</span><span class="resposta" style="color: grey; font-size: 14px;" ><?php echo $resposta_vendedor2; ?></span></div>  
                    </div><!--perguntas terminam aqui-->

                    <a href="#" style="font-size: 14px; color: dodgerblue; text-decoration: none;">Ver todas as perguntas</a>
                    
                </div>
                <div class="conteiner-btn-perguntar-vendedor">
                    <i class="material-icons">help</i>
                    <span>Como pergunto ao vendedor?</span>
                </div>
            </div>
            <hr>
            <div class="container-opnioes-do-produto">
                <h2 style="font-weight: 500; margin-top: 50px;">Opiniões do produto</h2>
                    <div class="container-avaliacao-opiniao">
                        <div class="container-estrelas">
                            <p style="color: dodgerblue; font-size: 48px;font-weight: 600;">4.8</p>
                            <div class="container-estrelas">
                              <div class="estrelas-texto">
                                <!--aqui vai as estrelas-->
                                <svg width="90" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <!-- Primeira estrela -->
                                    <polygon points="10,2 12,8 18,8 13,11 15,17 10,13 5,17 7,11 2,8 8,8" 
                                             fill="rgb(52, 131, 250)" />
                                  
                                    <!-- Segunda estrela (com margem) -->
                                    <polygon points="28,2 30,8 36,8 31,11 33,17 28,13 23,17 25,11 20,8 26,8" 
                                             fill="rgb(52, 131, 250)" />
                                  
                                    <!-- Terceira estrela (com margem) -->
                                    <polygon points="46,2 48,8 54,8 49,11 51,17 46,13 41,17 43,11 38,8 44,8" 
                                             fill="rgb(52, 131, 250)" />
                                  
                                    <!-- Quarta estrela (com margem) -->
                                    <polygon points="64,2 66,8 72,8 67,11 69,17 64,13 59,17 61,11 56,8 62,8" 
                                             fill="rgb(52, 131, 250)" />
                                  
                                    <!-- Quinta estrela (com margem) -->
                                    <polygon points="82,2 84,8 90,8 85,11 87,17 82,13 77,17 79,11 74,8 80,8" 
                                             fill="rgb(52, 131, 250)" />
                                  </svg>
                                  <span style="font-size: 14px; color: grey;">192 avaliações</span>
                              </div>  
                            </div><!--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
                        </div>
                        <div class="container-avaliacao-em-destaque"></div><!--opnioes vai aqui-->
                    </div><!--Area opinies do produto-->
                    <div class="container-barra-carregamento-avaliacao">
                        <div style="display: flex; align-items: center;">
                            <div style="background-color: #E5E5E5; height: 6px; width: 200px; border-radius: 10px;">
                                <div style="background-color:#676767; width: 190px; height: 6px; border-radius: 10px;"></div>
                            </div>
                            <div style="padding-left: 10px; display: flex; gap:6px; align-items: center; justify-content: center; font-size: 12px;color: grey;"><span>5</span>
                                <div><svg width="70" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <!-- Estrela menor -->
                                    <polygon points="7,2 9,6 13,6 9.5,8.5 11,12.5 7,9.5 3,12.5 4.5,8.5 1,6 6,6" 
                                             fill="#BFBFBF" />
                                  </svg>
                                  </div></div> 
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="background-color: #E5E5E5; height: 6px; width: 200px; border-radius: 10px;">
                                <div style="background-color:#676767; width: 120px; height: 6px; border-radius: 10px;"></div>
                            </div>
                            <div style="padding-left: 10px; display: flex; gap:5px; align-items: center; justify-content: center; font-size: 12px;color: grey;"><span>4</span>
                                <div><svg width="70" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <!-- Estrela menor -->
                                    <polygon points="7,2 9,6 13,6 9.5,8.5 11,12.5 7,9.5 3,12.5 4.5,8.5 1,6 6,6" 
                                             fill="#BFBFBF" />
                                  </svg>
                                  </div></div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="background-color: #E5E5E5; height: 6px; width: 200px; border-radius: 10px;">
                                <div style="background-color:#676767; width: 40px; height: 6px; border-radius: 10px;"></div>
                            </div>
                            <div style="padding-left: 10px; display: flex; gap:5px; align-items: center; justify-content: center; font-size: 12px;color: grey;"><span>3</span>
                                <div><svg width="70" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <!-- Estrela menor -->
                                    <polygon points="7,2 9,6 13,6 9.5,8.5 11,12.5 7,9.5 3,12.5 4.5,8.5 1,6 6,6" 
                                             fill="#BFBFBF" />
                                  </svg>
                                  </div></div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="background-color: #E5E5E5; height: 6px; width: 200px; border-radius: 10px;">
                                <div style="background-color:#676767; width: 20px; height: 6px; border-radius: 10px;"></div>
                            </div>
                            <div style="padding-left: 10px; display: flex; gap:5px; align-items: center; justify-content: center; font-size: 12px;color: grey;"><span>2</span>
                                <div><svg width="70" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <!-- Estrela menor -->
                                    <polygon points="7,2 9,6 13,6 9.5,8.5 11,12.5 7,9.5 3,12.5 4.5,8.5 1,6 6,6" 
                                             fill="#BFBFBF" />
                                  </svg>
                                  </div></div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="background-color: #E5E5E5; height: 6px; width: 200px; border-radius: 10px;">
                                <div style="background-color:#676767; width: 10px; height: 6px; border-radius: 10px;"></div>
                            </div>
                            <div style="padding-left: 10px; display: flex; gap:8px; align-items: center; justify-content: center; font-size: 12px;color: grey;"><span>1</span>
                            <div><svg width="70" height="15" xmlns="http://www.w3.org/2000/svg">
                                <!-- Estrela menor -->
                                <polygon points="7,2 9,6 13,6 9.5,8.5 11,12.5 7,9.5 3,12.5 4.5,8.5 1,6 6,6" 
                                         fill="#BFBFBF" />
                              </svg>
                              </div></div>
                        </div>
                        <h3 style="font-weight: 500; font-size: 16px; margin-top: 10px;">avaliações de características</h3>
                        <div class="container-melhores-avaliacoes"> <!--Container melhores avaliaçoes-->
                            <div class="melhores-avaliacoes">
                                <p><?php echo $avaliacao_1; ?></p>
                                <div><svg width="230" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <!-- Primeira estrela -->
                                    <polygon points="10,2 12,8 18,8 13,11 15,17 10,13 5,17 7,11 2,8 8,8" fill="dodgerblue" />
                                    <!-- Segunda estrela -->
                                    <polygon points="30,2 32,8 38,8 33,11 35,17 30,13 25,17 27,11 22,8 28,8" fill="dodgerblue" />
                                    <!-- Terceira estrela -->
                                    <polygon points="50,2 52,8 58,8 53,11 55,17 50,13 45,17 47,11 42,8 48,8" fill="dodgerblue" />
                                    <!-- Quarta estrela -->
                                    <polygon points="70,2 72,8 78,8 73,11 75,17 70,13 65,17 67,11 62,8 68,8" fill="dodgerblue" />
                                    <!-- Quinta estrela -->
                                    <polygon points="90,2 92,8 98,8 93,11 95,17 90,13 85,17 87,11 82,8 88,8" fill="dodgerblue" />
                                  </svg>
                                  </div>
                            </div>

                            <div class="melhores-avaliacoes">
                                <p><?php echo $avaliacao_2; ?></p>
                                <div><svg width="230" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <!-- Primeira estrela -->
                                    <polygon points="10,2 12,8 18,8 13,11 15,17 10,13 5,17 7,11 2,8 8,8" fill="dodgerblue" />
                                    <!-- Segunda estrela -->
                                    <polygon points="30,2 32,8 38,8 33,11 35,17 30,13 25,17 27,11 22,8 28,8" fill="dodgerblue" />
                                    <!-- Terceira estrela -->
                                    <polygon points="50,2 52,8 58,8 53,11 55,17 50,13 45,17 47,11 42,8 48,8" fill="dodgerblue" />
                                    <!-- Quarta estrela -->
                                    <polygon points="70,2 72,8 78,8 73,11 75,17 70,13 65,17 67,11 62,8 68,8" fill="dodgerblue" />
                                    <!-- Quinta estrela -->
                                    <polygon points="90,2 92,8 98,8 93,11 95,17 90,13 85,17 87,11 82,8 88,8" fill="dodgerblue" />
                                  </svg></div>
                            </div>

                            <div class="melhores-avaliacoes">
                                <p><?php echo $avaliacao_3; ?></p>
                                <div><svg width="230" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <!-- Primeira estrela -->
                                    <polygon points="10,2 12,8 18,8 13,11 15,17 10,13 5,17 7,11 2,8 8,8" fill="dodgerblue" />
                                    <!-- Segunda estrela -->
                                    <polygon points="30,2 32,8 38,8 33,11 35,17 30,13 25,17 27,11 22,8 28,8" fill="dodgerblue" />
                                    <!-- Terceira estrela -->
                                    <polygon points="50,2 52,8 58,8 53,11 55,17 50,13 45,17 47,11 42,8 48,8" fill="dodgerblue" />
                                    <!-- Quarta estrela -->
                                    <polygon points="70,2 72,8 78,8 73,11 75,17 70,13 65,17 67,11 62,8 68,8" fill="dodgerblue" />
                                    <!-- Quinta estrela -->
                                    <polygon points="90,2 92,8 98,8 93,11 95,17 90,13 85,17 87,11 82,8 88,8" fill="dodgerblue" />
                                  </svg></div>
                            </div>
                        </div>
                  </div>
            </div>
        </div>
    </div>
    <div class="id-anuncio-mobile">
        <span>Anúncio</span>
        <span>#384387415</span>
        <span>|</span>
        <span>Denunciar</span>
    </div>
    
</div>


<!--fim conteudo mobile-->
    <!-- conteudo pc-->
<div class="pag-produtos">
    <div class="foto-produto-galeria">
    <div class="caixa-foto-produto">
    <div class="foto-produto-comprar" data-foto="<?php echo $foto_1; ?>" onmouseover="mudarImagem('<?php echo $foto_1; ?>')" onclick="mudarImagem('<?php echo $foto_1; ?>')">
        <img src="<?php echo $foto_1; ?>" alt="Foto-do-produto">
    </div>
    <div class="foto-produto-comprar" data-foto="<?php echo $foto_2; ?>" onmouseover="mudarImagem('<?php echo $foto_2; ?>')" onclick="mudarImagem('<?php echo $foto_2; ?>')">
        <img src="<?php echo $foto_2; ?>" alt="Foto-do-produto">
    </div>
    <div class="foto-produto-comprar" data-foto="<?php echo $foto_3; ?>" onmouseover="mudarImagem('<?php echo $foto_3; ?>')" onclick="mudarImagem('<?php echo $foto_3; ?>')">
        <img src="<?php echo $foto_3; ?>" alt="Foto-do-produto">
    </div>
    <div class="foto-produto-comprar" data-foto="<?php echo $foto_4; ?>" onmouseover="mudarImagem('<?php echo $foto_4; ?>')" onclick="mudarImagem('<?php echo $foto_4; ?>')">
        <img src="<?php echo $foto_4; ?>" alt="Foto-do-produto">
    </div>
    <div class="foto-produto-comprar" data-foto="<?php echo $foto_5; ?>" onmouseover="mudarImagem('<?php echo $foto_5; ?>')" onclick="mudarImagem('<?php echo $foto_5; ?>')">
        <img src="<?php echo $foto_5; ?>" alt="Foto-do-produto">
    </div>
    <div class="foto-produto-comprar" data-foto="<?php echo $foto_6; ?>" onmouseover="mudarImagem('<?php echo $foto_6; ?>')" onclick="mudarImagem('<?php echo $foto_6; ?>')">
        <img src="<?php echo $foto_6; ?>" alt="Foto-do-produto">
    </div>
</div>

        <div class="container-foto-grande">
            <div class="foto-grande-img"><img id="foto-grande" src="<?php echo $foto_1; ?>" alt="Foto-do-produto"></div>
            <hr>
            <!--area container dos prdutos relacionados com fotos-->
            <div class="container-produtos-relacionados-comentarios"><!--container produtos relacionados-->
                <h2 style="font-weight: 300;">Produtos relacionados</h2>
                <p style="font-size: 14px; color: gray;">Patrocinado</p>



                <div class="produtos-relacionados"><!--container do produto relacionado-->
                                        <?php
                        // Exemplo de exibição de cada produto no array $produtos
                        foreach ($produtos as $linha) {
                            $preco_antigo = isset($linha["preco_antigo"]) ? $linha["preco_antigo"] : 0;
                            $preco_atual = isset($linha["preco_atual"]) ? $linha["preco_atual"] : 0;
                            $desconto = isset($linha["desconto"]) ? $linha["desconto"] : 0;
                            $parcelado_em = isset($linha["parcelado_em"]) ? $linha["parcelado_em"] : 0;
                            $valor_parcela = isset($linha["valor_parcela"]) ? $linha["valor_parcela"] : 0;
                            $frete_gratis = isset($linha["frete_gratis"]) ? $linha["frete_gratis"] : false;
                            $titulo_produto = isset($linha["nome"]) ? $linha["nome"] : 'Produto não disponível';
                            $imagem_url = isset($linha["imagem_url"]) ? htmlspecialchars($linha["imagem_url"]) : 'imagens/default.jpg';
                            
                            // Exibe o produto
                            echo "<div class='container-produto'>";
                            echo "    <div class='foto-produto'><img src='" . $imagem_url . "' alt='Produto'></div>";
                            echo "    <div class='titulo-valor-condicoes'>";
                            echo "        <div class='valor-desconto-centavos' style='margin-top: 20px;'>";
                            echo "            <span class='cifrao1'>R$</span><span class='valor1'>" . $preco_atual . "</span><span class='centavos1'>00</span><span class='desconto1'>" . $desconto . "% OFF</span>";
                            echo "        </div>";
                            echo "        <div class='parcelado' style='margin-top: 5px;'>";
                            echo "            <span class='parcelado-em-vezes'>em</span><span class='quantidades-parcelas'>" . $parcelado_em . "x</span><span class='cifrao-valor-da-parcela'>R$</span><span class='valor-parcela'>" . $valor_parcela . "</span>";
                            echo "        </div>";
                            echo "        <div class='texto-produto-relacionado-container' style='margin-top: 20px;'>";
                            echo "            <span class='frete-gratis' style='color: #00A650; font-size: 14px;'>" . ($frete_gratis ? 'Frete grátis' : 'Frete não incluso') . "</span><span style='color: grey; font-size: 14px;'> por ser sua primeira compra</span>";
                            echo "        </div>";
                            echo "        <div class='titulo-produto-relacionados' style='font-size: 14px; margin-top: 10px;'><span class='titulo-produto-relacionado'>" . htmlspecialchars($titulo_produto) . "</span></div>";
                            echo "    </div>";
                            echo "</div>";
                        }
                        ?>




                <div class="container-produto"><!--produto em sí-->
                    <div class="foto-produto"><img src="" alt=""></div>
                    <div class="titulo-valor-condicoes">
                        <div class="valor-desconto-centavos" style="margin-top: 20px;">
                            <span class="cifrao1">R$</span><span class="valor1">112</span><span class="centavos1">00</span><span class="desconto1">30% OFF</span>
                        </div>
                        <div class="parcelado" style="margin-top: 5px;" >
                            <span class="parcelado-em-vezes">em</span><span class="quantidades-parcelas">12x</span><span class="cifrao-valor-da-parcela">R$</span><span class="valor-parcela">22,43</span>
                        </div>
                        <div class="texto-produto-relacionado-container" style="margin-top: 20px;">
                            <span class="frete-gratis" style="color: #00A650; font-size: 14px;">Frete grátis</span><span style="color: grey; font-size: 14px;"> por ser sua primeira compra</span>
                        </div>
                        <div class="titulo-produto-relacionados" style="font-size: 14px; margin-top: 10px;"><span class="titulo-produto-relacionado">Aqui vaio titulo do seu produto</span></div>
                    </div>
                </div>
                <div class="container-produto"><!--produto em sí-->
                    <div class="foto-produto"><img src="" alt=""></div>
                    <div class="titulo-valor-condicoes">
                        <div class="valor-desconto-centavos" style="margin-top: 20px;">
                            <span class="cifrao1">R$</span><span class="valor1">112</span><span class="centavos1">00</span><span class="desconto1">30% OFF</span>
                        </div>
                        <div class="parcelado" style="margin-top: 5px;" >
                            <span class="parcelado-em-vezes">em</span><span class="quantidades-parcelas">12x</span><span class="cifrao-valor-da-parcela">R$</span><span class="valor-parcela">22,43</span>
                        </div>
                        <div class="texto-produto-relacionado-container" style="margin-top: 20px;">
                            <span class="frete-gratis" style="color: #00A650; font-size: 14px;">Frete grátis</span><span style="color: grey; font-size: 14px;"> por ser sua primeira compra</span>
                        </div>
                        <div class="titulo-produto-relacionados" style="font-size: 14px; margin-top: 10px;"><span class="titulo-produto-relacionado">Aqui vaio titulo do seu produto </span></div>
                    </div>
                </div>
                <div class="container-produto"><!--Produto em sí-->
                    <div class="foto-produto"><img src="" alt=""></div>
                    <div class="titulo-valor-condicoes">
                        <div class="valor-desconto-centavos" style="margin-top: 20px;">
                            <span class="cifrao1">R$</span><span class="valor1">112</span><span class="centavos1">00</span><span class="desconto1">30% OFF</span>
                        </div>
                        <div class="parcelado" style="margin-top: 5px;" >
                            <span class="parcelado-em-vezes">em</span><span class="quantidades-parcelas">12x</span><span class="cifrao-valor-da-parcela">R$</span><span class="valor-parcela">22,43</span>
                        </div>
                        <div class="texto-produto-relacionado-container" style="margin-top: 20px;">
                            <span class="frete-gratis" style="color: #00A650; font-size: 14px;">Frete grátis</span><span style="color: grey; font-size: 14px;"> por ser sua primeira compra</span>
                        </div>
                        <div class="titulo-produto-relacionados" style="font-size: 14px; margin-top: 10px;"><span class="titulo-produto-relacionado">Aqui vaio titulo do seu produto</span></div>
                    </div>
                </div>
                <div class="container-produto"><!--Produto em sí-->
                    <div class="foto-produto"><img src="" alt=""></div>
                    <div class="titulo-valor-condicoes">
                        <div class="valor-desconto-centavos" style="margin-top: 20px;">
                            <span class="cifrao1">R$</span><span class="valor1">112</span><span class="centavos1">00</span><span class="desconto1">30% OFF</span>
                        </div>
                        <div class="parcelado" style="margin-top: 5px;" >
                            <span class="parcelado-em-vezes">em</span><span class="quantidades-parcelas">12x</span><span class="cifrao-valor-da-parcela">R$</span><span class="valor-parcela">22,43</span>
                        </div>
                        <div class="texto-produto-relacionado-container" style="margin-top: 20px;">
                            <span class="frete-gratis" style="color: #00A650; font-size: 14px;">Frete grátis</span><span style="color: grey; font-size: 14px; color: grey;"> por ser sua primeira compra</span>
                        </div>
                        <div class="titulo-produto-relacionados" style="font-size: 14px; margin-top: 10px;"><span class="titulo-produto-relacionado">Aqui vaio titulo do seu produto</span></div>
                    </div>
                </div>
                
                </div>
                <div class="container-produtos-do-vendedor"> <!--sessao dos produtos relacionados-->
                    <div class="produtos-do-vendendorh2"><!--div do h2 vv-->
                        <h2 style="font-weight: 300;margin-bottom: 20px;">Produtos do vendedor</h2>
                        <?php
                        if ($resultado_produtos_do_vendedor->num_rows > 0) {
    echo "<div class='container-produtos-recomendados01'>"; // container que segura os produtos
    while ($linha = $resultado_produtos_do_vendedor->fetch_assoc()) {
        // Validação dos dados do banco
        $titulo_produto = isset($linha["nome"]) ? $linha["nome"] : 'Produto não disponível';
        $preco_atual = isset($linha["preco_atual"]) ? $linha["preco_atual"] : 0;
        $frete_gratis = isset($linha["frete_gratis"]) ? $linha["frete_gratis"] : false;
        $imagem_url = isset($linha["imagem_url"]) ? htmlspecialchars($linha["imagem_url"]) : 'imagens/default.jpg';

        // HTML para exibir os produtos
        echo "<div class='container-produto-do-vendedor-recomendado'>"; // container de informações dos produtos recomendados
        echo "    <div class='foto-produto-vendedor'><img src='" . $imagem_url . "' alt='Produto'></div>";
        echo "    <div class='texto-produto-vendedor'>";
        echo "        <span class='titulo-produto-recomendado'>" . htmlspecialchars($titulo_produto) . "</span>";
        echo "        <span class='valor-produto-recomendado'>R$ " . number_format($preco_atual, 2, ',', '.') . "</span>";
        echo "        <div class='frete-condicao'>";
        echo "            <span class='frete-verde' style='font-size: 12px;'>" . ($frete_gratis ? 'Frete grátis' : 'Frete não incluso') . "</span>";
        echo "            <span style='font-size: 12px; color: grey;'> por ser sua primeira compra</span>";
        echo "        </div>";
        echo "    </div>";
        echo "</div>"; // Fechando container do produto
    }
    echo "</div>"; // Fechando container dos produtos recomendados
} else {
    echo "<p>Nenhum produto encontrado.</p>";
}
?>
                    </div>
                </div>
                <p style="color: cornflowerblue; font-size: 14px; margin-top: 15px; padding-bottom: 70px;">Ir para a página do vendedor</p>
                <hr>
                <div class="container-caracteres-produto">
                    <h2 style="font-weight: 200; font-size: 24px;">Caracteristicas do produto </h2>
                    <div class="caracetisticas-produto-tablea">
                        <h3 style="font-size: 15px; font-weight: 500;">Caracteristicas principais</h3>
                        <table>
                           <tr>
                            <th>Marca</th>
                            <td class="marca"><?php echo $nome_marca; ?></td>
                           </tr>
                           <tr>
                            <th>Linha</th>
                            <td class="linha"><?php echo $linha_produto; ?></td>
                           </tr>
                           <tr>
                            <th>Modelo</th>
                            <td class="modelo"><?php echo $modelo; ?></td>
                           </tr>
                           <tr>
                            <th>Formato de venda</th>
                            <td class="formato-de-venda"><?php echo $formato_venda; ?></td>
                           </tr>
                           <tr>
                            <th>Tipo do produto</th>
                            <td class="tipo-do-produto"><?php echo $tipo_produto; ?></td>
                           </tr>
                        </table>
                        <hr style="margin-top: 30px;">
                        <div class="container-descircao-produto">
                            <h2 style="font-weight: 500; margin-top: 40px;">Descrição</h2>
                            <p class="descricao" style="margin-top: 60px;"><?php echo $descricao; ?></p>
                        </div>
                        <hr>
                            <div class="container-quem-viu-comprou">
                                <h2 style="font-weight: 500;">Quem este produto também comprou</h2>
<?php
// Verifica se há produtos
if ($resultado_produtos_ultimo_visto->num_rows > 0) {
    echo "<div class='produtos-relacionados'>"; // container que segura os produtos relacionados
    
    // Loop para exibir os produtos
    while ($linha = $resultado_produtos_ultimo_visto->fetch_assoc()) {
        // Validação dos dados do banco
        $titulo_produto = isset($linha["nome"]) ? $linha["nome"] : 'Produto não disponível';
        $preco_atual = isset($linha["preco_atual"]) ? $linha["preco_atual"] : 0;
        $frete_gratis = isset($linha["frete_gratis"]) ? $linha["frete_gratis"] : false;
        $imagem_url = isset($linha["imagem_url"]) ? htmlspecialchars($linha["imagem_url"]) : 'imagens/default.jpg';
        $desconto = isset($linha["desconto"]) ? $linha["desconto"] : '0% OFF';
        $parcelas = isset($linha["parcelas"]) ? $linha["parcelas"] : 1;
        $valor_parcela = isset($linha["valor_parcela"]) ? $linha["valor_parcela"] : $preco_atual / 12;

        // HTML para exibir os produtos
        echo "<div class='container-produto'>"; // container de informações dos produtos relacionados
        echo "    <div class='foto-produto'><img src='" . $imagem_url . "' alt='Produto'></div>";
        echo "    <div class='titulo-valor-condicoes'>";
        echo "        <div class='valor-desconto-centavos' style='margin-top: 20px;'>";
        echo "            <span class='cifrao1'>R$</span><span class='valor1'>" . $preco_atual . "</span><span class='centavos1'>00</span><span class='desconto1'>" . $desconto . "</span>";
        echo "        </div>";
        echo "        <div class='parcelado' style='margin-top: 5px;'>";
        echo "            <span class='parcelado-em-vezes'>em</span><span class='quantidades-parcelas'>" . $parcelas . "x</span><span class='cifrao-valor-da-parcela'>R$</span><span class='valor-parcela'>" . $valor_parcela . "</span>";
        echo "        </div>";
        echo "        <div class='texto-produto-relacionado-container' style='margin-top: 20px;'>";
        echo "            <span class='frete-gratis' style='color: #00A650; font-size: 14px;'>" . ($frete_gratis ? 'Frete grátis' : 'Frete não incluso') . "</span>";
        echo "            <span style='color: grey; font-size: 14px;'> por ser sua primeira compra</span>";
        echo "        </div>";
        echo "        <div class='titulo-produto-relacionados' style='font-size: 14px; margin-top: 10px;'><span class='titulo-produto-relacionado'>" . htmlspecialchars($titulo_produto) . "</span></div>";
        echo "    </div>";
        echo "</div>"; // Fechando container do produto
    }
    echo "</div>"; // Fechando container dos produtos relacionados
} else {
    echo "<p>Nenhum produto encontrado.</p>";
}
?>
                                    <hr style="margin-top: 50px;">
                                    <div class="container-perguntas">
                                        <h2 style="font-weight: 500;">Perguntas e respostas</h2>
                                        <h3 style="font-weight: 500; margin-top: 50px;">Qual informação você precisa?</h3>
                                        <div class="container-botoes-perguntas">
                                            <a href="#">Custo e prazo de envio</a>
                                            <a href="#">Devolução grátis</a>
                                            <a href="#">Meios de pagamentos</a>
                                            <a href="#">Garantia</a>
                                        </div>
                                        <h3 style="margin-top: 50px; font-weight: 500;">Pergunte ao vendedor</h3>
                                        <div class="container-enviar-pergunta">
                                            <textarea name="envie-sua-pergunta" id="envie" placeholder="Envie sua pergunta" ></textarea>
                                            <a href="#">Perguntar</a>
                                        </div>
                                                        <!--Container perguntas e respostas-->
                                        <div class="container-ultimas-perguntas-feitas">
                                            <h3 style="font-weight: 500; font-size: 18px; margin-top: 50px;">últimas perguntas feitas</h3>
                                            <!--classe perguntas e respostas-->
                                            <div class="pergunta">
                                                <span class="pergunta"><?php echo $pergunta_comprador1; ?></span>
                                                <div style="display: flex; margin-top: 10px;"><span style="padding-right: 10px; color: gray;">L</span><span class="resposta" style="color: grey; font-size: 14px;" ><?php echo $resposta_vendedor1; ?></span></div>  
                                            </div><!--perguntas terminam aqui-->
                                            
                                            <div class="pergunta">
                                                <span class="pergunta"><?php echo $pergunta_comprador2; ?></span>
                                                <div style="display: flex; margin-top: 10px;"><span style="padding-right: 10px; color: gray;">L</span><span class="resposta" style="color: grey; font-size: 14px;" ><?php echo $resposta_vendedor2; ?></span></div>  
                                            </div><!--perguntas terminam aqui-->

                                            <a href="#" style="font-size: 14px; color: dodgerblue; text-decoration: none;">Ver todas as perguntas</a>
                                            
                                        </div>
                                    </div>

                                    <hr style="margin-top: 50px;">
                                    <div class="container-opnioes-do-produto">
                                        <h2 style="font-weight: 500; margin-top: 50px;">Opiniões do produto</h2>
                                            <div class="container-avaliacao-opiniao">
                                                <div class="container-estrelas">
                                                    <p style="color: dodgerblue; font-size: 48px;font-weight: 600;">4.8</p>
                                                    <div class="container-estrelas">
                                                      <div class="estrelas-texto">
                                                        <!--aqui vai as estrelas-->
                                                        <svg width="90" height="20" xmlns="http://www.w3.org/2000/svg">
                                                            <!-- Primeira estrela -->
                                                            <polygon points="10,2 12,8 18,8 13,11 15,17 10,13 5,17 7,11 2,8 8,8" 
                                                                     fill="rgb(52, 131, 250)" />
                                                          
                                                            <!-- Segunda estrela (com margem) -->
                                                            <polygon points="28,2 30,8 36,8 31,11 33,17 28,13 23,17 25,11 20,8 26,8" 
                                                                     fill="rgb(52, 131, 250)" />
                                                          
                                                            <!-- Terceira estrela (com margem) -->
                                                            <polygon points="46,2 48,8 54,8 49,11 51,17 46,13 41,17 43,11 38,8 44,8" 
                                                                     fill="rgb(52, 131, 250)" />
                                                          
                                                            <!-- Quarta estrela (com margem) -->
                                                            <polygon points="64,2 66,8 72,8 67,11 69,17 64,13 59,17 61,11 56,8 62,8" 
                                                                     fill="rgb(52, 131, 250)" />
                                                          
                                                            <!-- Quinta estrela (com margem) -->
                                                            <polygon points="82,2 84,8 90,8 85,11 87,17 82,13 77,17 79,11 74,8 80,8" 
                                                                     fill="rgb(52, 131, 250)" />
                                                          </svg>
                                                          <span style="font-size: 14px; color: grey;">192 avaliações</span>
                                                      </div>  
                                                    </div><!--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
                                                </div>
                                                <div class="container-avaliacao-em-destaque">dsd</div><!--opnioes vai aqui-->
                                            </div><!--Area opinies do produto-->
                                            <div class="container-barra-carregamento-avaliacao">
                                                <div style="display: flex; align-items: center;">
                                                    <div style="background-color: #E5E5E5; height: 6px; width: 200px; border-radius: 10px;">
                                                        <div style="background-color:#676767; width: 190px; height: 6px; border-radius: 10px;"></div>
                                                    </div>
                                                    <div style="padding-left: 10px; display: flex; gap:6px; align-items: center; justify-content: center; font-size: 12px;color: grey;"><span>5</span>
                                                        <div><svg width="70" height="15" xmlns="http://www.w3.org/2000/svg">
                                                            <!-- Estrela menor -->
                                                            <polygon points="7,2 9,6 13,6 9.5,8.5 11,12.5 7,9.5 3,12.5 4.5,8.5 1,6 6,6" 
                                                                     fill="#BFBFBF" />
                                                          </svg>
                                                          </div></div> 
                                                </div>
                                                <div style="display: flex; align-items: center;">
                                                    <div style="background-color: #E5E5E5; height: 6px; width: 200px; border-radius: 10px;">
                                                        <div style="background-color:#676767; width: 120px; height: 6px; border-radius: 10px;"></div>
                                                    </div>
                                                    <div style="padding-left: 10px; display: flex; gap:5px; align-items: center; justify-content: center; font-size: 12px;color: grey;"><span>4</span>
                                                        <div><svg width="70" height="15" xmlns="http://www.w3.org/2000/svg">
                                                            <!-- Estrela menor -->
                                                            <polygon points="7,2 9,6 13,6 9.5,8.5 11,12.5 7,9.5 3,12.5 4.5,8.5 1,6 6,6" 
                                                                     fill="#BFBFBF" />
                                                          </svg>
                                                          </div></div>
                                                </div>
                                                <div style="display: flex; align-items: center;">
                                                    <div style="background-color: #E5E5E5; height: 6px; width: 200px; border-radius: 10px;">
                                                        <div style="background-color:#676767; width: 40px; height: 6px; border-radius: 10px;"></div>
                                                    </div>
                                                    <div style="padding-left: 10px; display: flex; gap:5px; align-items: center; justify-content: center; font-size: 12px;color: grey;"><span>3</span>
                                                        <div><svg width="70" height="15" xmlns="http://www.w3.org/2000/svg">
                                                            <!-- Estrela menor -->
                                                            <polygon points="7,2 9,6 13,6 9.5,8.5 11,12.5 7,9.5 3,12.5 4.5,8.5 1,6 6,6" 
                                                                     fill="#BFBFBF" />
                                                          </svg>
                                                          </div></div>
                                                </div>
                                                <div style="display: flex; align-items: center;">
                                                    <div style="background-color: #E5E5E5; height: 6px; width: 200px; border-radius: 10px;">
                                                        <div style="background-color:#676767; width: 20px; height: 6px; border-radius: 10px;"></div>
                                                    </div>
                                                    <div style="padding-left: 10px; display: flex; gap:5px; align-items: center; justify-content: center; font-size: 12px;color: grey;"><span>2</span>
                                                        <div><svg width="70" height="15" xmlns="http://www.w3.org/2000/svg">
                                                            <!-- Estrela menor -->
                                                            <polygon points="7,2 9,6 13,6 9.5,8.5 11,12.5 7,9.5 3,12.5 4.5,8.5 1,6 6,6" 
                                                                     fill="#BFBFBF" />
                                                          </svg>
                                                          </div></div>
                                                </div>
                                                <div style="display: flex; align-items: center;">
                                                    <div style="background-color: #E5E5E5; height: 6px; width: 200px; border-radius: 10px;">
                                                        <div style="background-color:#676767; width: 10px; height: 6px; border-radius: 10px;"></div>
                                                    </div>
                                                    <div style="padding-left: 10px; display: flex; gap:8px; align-items: center; justify-content: center; font-size: 12px;color: grey;"><span>1</span>
                                                    <div><svg width="70" height="15" xmlns="http://www.w3.org/2000/svg">
                                                        <!-- Estrela menor -->
                                                        <polygon points="7,2 9,6 13,6 9.5,8.5 11,12.5 7,9.5 3,12.5 4.5,8.5 1,6 6,6" 
                                                                 fill="#BFBFBF" />
                                                      </svg>
                                                      </div></div>
                                                </div>
                                                <h3 style="font-weight: 500; font-size: 16px; margin-top: 10px;">avaliações de características</h3>
                                                <div class="container-melhores-avaliacoes"> <!--Container melhores avaliaçoes-->
                                                    <div class="melhores-avaliacoes">
                                                        <p><?php echo $avaliacao_1; ?></p>
                                                        <div><svg width="230" height="20" xmlns="http://www.w3.org/2000/svg">
                                                            <!-- Primeira estrela -->
                                                            <polygon points="10,2 12,8 18,8 13,11 15,17 10,13 5,17 7,11 2,8 8,8" fill="dodgerblue" />
                                                            <!-- Segunda estrela -->
                                                            <polygon points="30,2 32,8 38,8 33,11 35,17 30,13 25,17 27,11 22,8 28,8" fill="dodgerblue" />
                                                            <!-- Terceira estrela -->
                                                            <polygon points="50,2 52,8 58,8 53,11 55,17 50,13 45,17 47,11 42,8 48,8" fill="dodgerblue" />
                                                            <!-- Quarta estrela -->
                                                            <polygon points="70,2 72,8 78,8 73,11 75,17 70,13 65,17 67,11 62,8 68,8" fill="dodgerblue" />
                                                            <!-- Quinta estrela -->
                                                            <polygon points="90,2 92,8 98,8 93,11 95,17 90,13 85,17 87,11 82,8 88,8" fill="dodgerblue" />
                                                          </svg>
                                                          </div>
                                                    </div>

                                                    <div class="melhores-avaliacoes">
                                                        <p><?php echo $avaliacao_2; ?></p>
                                                        <div><svg width="230" height="20" xmlns="http://www.w3.org/2000/svg">
                                                            <!-- Primeira estrela -->
                                                            <polygon points="10,2 12,8 18,8 13,11 15,17 10,13 5,17 7,11 2,8 8,8" fill="dodgerblue" />
                                                            <!-- Segunda estrela -->
                                                            <polygon points="30,2 32,8 38,8 33,11 35,17 30,13 25,17 27,11 22,8 28,8" fill="dodgerblue" />
                                                            <!-- Terceira estrela -->
                                                            <polygon points="50,2 52,8 58,8 53,11 55,17 50,13 45,17 47,11 42,8 48,8" fill="dodgerblue" />
                                                            <!-- Quarta estrela -->
                                                            <polygon points="70,2 72,8 78,8 73,11 75,17 70,13 65,17 67,11 62,8 68,8" fill="dodgerblue" />
                                                            <!-- Quinta estrela -->
                                                            <polygon points="90,2 92,8 98,8 93,11 95,17 90,13 85,17 87,11 82,8 88,8" fill="dodgerblue" />
                                                          </svg></div>
                                                    </div>

                                                    <div class="melhores-avaliacoes">
                                                        <p><?php echo $avaliacao_3; ?></p>
                                                        <div><svg width="230" height="20" xmlns="http://www.w3.org/2000/svg">
                                                            <!-- Primeira estrela -->
                                                            <polygon points="10,2 12,8 18,8 13,11 15,17 10,13 5,17 7,11 2,8 8,8" fill="dodgerblue" />
                                                            <!-- Segunda estrela -->
                                                            <polygon points="30,2 32,8 38,8 33,11 35,17 30,13 25,17 27,11 22,8 28,8" fill="dodgerblue" />
                                                            <!-- Terceira estrela -->
                                                            <polygon points="50,2 52,8 58,8 53,11 55,17 50,13 45,17 47,11 42,8 48,8" fill="dodgerblue" />
                                                            <!-- Quarta estrela -->
                                                            <polygon points="70,2 72,8 78,8 73,11 75,17 70,13 65,17 67,11 62,8 68,8" fill="dodgerblue" />
                                                            <!-- Quinta estrela -->
                                                            <polygon points="90,2 92,8 98,8 93,11 95,17 90,13 85,17 87,11 82,8 88,8" fill="dodgerblue" />
                                                          </svg></div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    
                            </div>
                    </div>
                </div>
                
            </div><!--termina aqui-->



        </div>
        
    </div> 
    <div class="informacoes-comprar"><!--container-->
        <div class="container-informacoes"><!--arredondamento do container e conteudo-->
            <div class="novo-usado-vendidos"><!--primeira coluna-->
                <div class="quantidade-vendidas"><span>Novo</span><div style="width: 1px; height: 15px; background-color: grey;"></div><span>+<?php echo $quantidade_produtos_loja; ?></span></div>
                <div class="coracao"><i class="material-icons">favorite</i></div>
            </div>
            <h1 class="titulo-produto"><?php echo $titulo_produto; ?></h1>
            <div class="container-avaliacoes">
                <span class="quantidade-avaliacoes">4.7</span>
                <span><svg width="90" height="20" xmlns="http://www.w3.org/2000/svg">
                    <!-- Primeira estrela -->
                    <polygon points="10,2 12,8 18,8 13,11 15,17 10,13 5,17 7,11 2,8 8,8" 
                             fill="rgb(52, 131, 250)" />
                  
                    <!-- Segunda estrela (com margem) -->
                    <polygon points="28,2 30,8 36,8 31,11 33,17 28,13 23,17 25,11 20,8 26,8" 
                             fill="rgb(52, 131, 250)" />
                  
                    <!-- Terceira estrela (com margem) -->
                    <polygon points="46,2 48,8 54,8 49,11 51,17 46,13 41,17 43,11 38,8 44,8" 
                             fill="rgb(52, 131, 250)" />
                  
                    <!-- Quarta estrela (com margem) -->
                    <polygon points="64,2 66,8 72,8 67,11 69,17 64,13 59,17 61,11 56,8 62,8" 
                             fill="rgb(52, 131, 250)" />
                  
                    <!-- Quinta estrela (com margem) -->
                    <polygon points="82,2 84,8 90,8 85,11 87,17 82,13 77,17 79,11 74,8 80,8" 
                             fill="rgb(52, 131, 250)" />
                  </svg>
                  </span>
                  <span class="quantidade-comentarios">(11)</span>
                  
            </div>
            <div class="valor-parcela">
                <span class="cifrao">R$</span>
                <span class="valor"><?php echo $preco_atual; ?></span>
                <br>
                <p>em <span class="parcelado"><?php echo $parcelado_em; ?>x</span> R$ <?php echo $valor_parcela; ?><span class="centavos">67</span> sem juros</p>
                <a href="#">Ver meios de pagamento</a>
            </div>

                            <div class="container-prazo-entrega">
                    <span class="chegara-dia" style="color:rgb(0, 166, 80);">Chegará grátis amanhã</span>
                    <span>por ser sua primeira compra</span>
                    <span class="dia-para-frete-gratis" style="font-size: 14px; color: grey; margin-top: 10px;">
                        Comprando dentro das próximas 17h 7min
                    </span>
                    <a href="#" style="margin-top: 5px; font-size: 14px;">mais formas de entrega</a>
                </div>

                <div class="container-retire-tal-dia">
                    <span class="retire-tal-dia" style="color: rgb(0,166,80);">Retire grátis a partir de amanhã</span>
                    <span> em uma agência Mercado Livre</span>
                    <span style="font-size: 14px; color: gray;"><br>Comprando dentro das próximas</span>
                    <span style="font-size: 14px;">16h 57min</span>
                </div>

                                    <?php
                    // Verifica se a coluna 'chegara_dia' no banco é 1, e exibe a mensagem
                    if ($chegara_dia == 1) {
                        echo '<span class="data-entrega">Chegará entre dia 6 e 11/fev</span>';
                    }

                    // Verifica se a coluna 'retire_dia' no banco é 1, e exibe a mensagem
                    if ($retire_dia == 1) {
                        echo '<span class="data-entrega-rapida">Chegará entre sexta-feira e quarta-feira 5/fev</span>';
                    }
                    ?>


                <div class="container-estoque-disponivel">
                    <span class="estoque-disponivel">Estoque disponível</span><span style="color: grey; font-size: 14px;"><br>Armazenado e enviado pelo</span><span style="font-size: 14PX; color: rgb(0, 166, 80);"> Envio FULL</span>
                </div>

                <!--container botoes-->
                <div class="botoes-comprar">
                    <div class="buttons-menu-carrinho">
                        <a href="#" class="btn-entre" style="color: white; background-color: rgb(52, 132, 250);">Entre</a>
                        <a href="#" class="btn-crie-sua-conta" style="color: rgb(52, 132, 250); background-color: white; border: 1px solid rgb(52, 132, 250);">Crie sua conta</a>
                    </div>
                </div>
                <!--fim container botoes-->


                <!--area informaçoes da loja -->
                <div class="container-informacoes-da-loja">

                    <div class="informacoes-da-loja"><!--aqui vai o nome da loja novamente-->
                        <div><span style="font-size: 14px;">Vendido por</span><span class="none-da-loja" style="color:  rgb(52, 132, 250); font-size: 14px;"><?php echo $nome_loja; ?></span></div>
                        <div style="display: flex; gap: 10px; align-items: center;"><span style="font-size: 14px;">MercadoLíder</span><div style="width: 1px; height: 15px; background-color: grey;"></div><span style="font-size: 14px;"><?php echo '+' . $quantidade_vendas_concluidas . ' vendas'; ?></span></div>
                        
                    </div>
                    <!--fim informaçoes da loja-->
                    <div class="garantia-container">
                        <div class="garantia1">
                            <div class="icon-back"><i class="material-icons">keyboard_return</i></div>
                            <div class="texto-garantia"><span style="color: rgb(52, 132, 250); font-size: 14px; ">Devolução gratís.</span><span style="font-size: 14px; color: grey;">Você tem 30 dias a partir da data de recebimento.</span></div>
                        </div>
                        <div class="garantia2">
                            <div class="protecao"><i class="material-icons">verified_user</i></div>
                            <div class="protecao"><span style="color:rgb(52, 132, 250) ; font-size: 14px;">Compra garantida</span><span style="font-size: 14px; color: grey;">, receba o produto que está esperando ou devolvemos o dinheiro.</span></div>
                        </div>
                        <div class="garantia3">
                            <div class="medalha"><i class="material-icons">workspace_premium</i></div>
                            <div class="texto-medalha"><span style="color: gray; font-size: 14px;">90 dias de garantia da fábrica.</span></div>
                        </div>
                    </div>

                </div>
            </div>

            <!--Perfil do vendedor -->
            <div class="container-vendedor">
                <div class="container-foto-nome-vendeor">
                    <div class="container-foto-nome">
                        <div class="foto-nome"><img src="<?php echo $foto_loja; ?>" alt="Foto-loja"></div><!--aqui vai a foto da loja-->
                        <div class="nome-vendedor"><span class="nome-do-vendedor"><strong><?php echo $nome_loja; ?></strong> <!--aqui o nome-->
                            <div><span style="font-size: 14px;">+<?php echo $quantidade_produtos_loja; ?></span> <span style="color: grey; font-size: 14px;">Produtos</span></div>
                        </span></div>
                    </div>
                    <div class="botao-seguir">
                        <a href="#" class="seguir">Seguir</a>
                    </div>
                </div>
                <div class="container-vendas-feitas-etc">
                    <div class="medalha">
                        <span style="color:rgb(0, 166, 80) ;font-size: 14px;">MercadoLíder gold</span>
                        <span style="font-size: 14px; color: grey;">É um dos melhores do site</span>
                    </div>
                    <div class="arcoiris">
                        <div class="cor1" style="background-color: #FDE2E5; width: 60px; height: 4px;"></div>
                        <div class="cor2" style="background-color: #FFEBE1; width: 60px; height: 4px;"></div>
                        <div class="cor3" style="background-color: #FFFCD9; width: 60px; height: 4px;"></div>
                        <div class="cor4" style="background-color: #F3FADE; width: 60px; height: 4px;"></div>
                        <div class="cor5" style="background-color: #00A650; width: 60px; height: 4px;"></div>
                    </div>
                    <div class="container-quantidade-vendas"><!--CONTAINER DAS VENDAS FEITAS ATENDIMENTO ETC...-->
                        <div class="venda1">
                            <p style="font-size: 14px;"><?php echo '+' . $quantidade_vendas_concluidas . ' vendas'; ?></p>
                            <p style="font-size: 12px;  color: gray;">Vendas concluidas</p>
                        </div>
                        <div class="venda1">
                            <div class="mensagem-perfil"><img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive-v2.svg" alt=""></div>
                            <p style="font-size: 12px; color: gray;">Oferece bom <br>atendimento</p>
                        </div>
                        <div class="venda1">
                            <div class="mensagem-perfil"> <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive-v2.svg" alt=""></div>
                            <p style="font-size: 12px; color: gray;">Entregas os <br>produtos dentro <br>prazo</p>
                            
                        </div>
                    </div>
                        <div style="display: flex; align-items:center; justify-content: center; width: 100%; height: 100%;">
                            <div class="botao-vender-ir-para-pagina-vendedor">
                                <span>Ir para a página do vendedor</span>
                            </div>
                        </div>
                </div>
                
            </div>
            <!-- area metodo de pagamento -->
             <div class="container-metodo-pagamento">
                <div style="padding: 20px; border-bottom: 1px solid grey;">
                    <h2 style="font-size: 16px;font-weight: 500;">Devolução grátis</h2>
                    
                    <p style="font-size: 12px;color: grey; margin-top: 15px;">Você tem 30 dias a partir do recebimento do produto para devolvê-lo, não importa o motivo!</p>
                    <p style="font-size: 12px; color:rgb(52, 132, 250);margin-top: 15px;">Ver mais sobre devoluções</p>
                </div>
                <div class="meios-pagamento">
                    <h2 style="font-size: 16px;font-weight: 500;">Meios de pagamento</h2>
                    <h3 style="font-size: 14px;font-weight: 500;margin-top: 20px;">Linha de Crédito</h3>
                    <div style="margin-top: 10px;"><img src="https://http2.mlstatic.com/storage/logos-api-admin/b4534650-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="mercado-pago logo"></div>
                    <h3 style="font-size: 14px; font-weight: 500;margin-top: 20px;">Cartões de crédito</h3>
                    <p style="font-size: 13px; color: grey;">Pague em até 12x!</p>
                    <div style="margin-top: 10px;"><img src="https://http2.mlstatic.com/storage/logos-api-admin/ddf23a60-f3bd-11eb-a186-1134488bf456-m.svg" alt="cartao-de-credito">
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/37f7b160-6278-11ec-ae75-df2bef173be2-m.svg" alt="elo">
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="visa">
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="">
                    <h3 style="font-size: 14px;font-weight: 500;margin-top: 20px;">Cartões de débito</h3>
                    <div style="display: flex; gap: 10px;"><img src="https://http2.mlstatic.com/storage/logos-api-admin/1e7db140-6f0b-11ec-813c-8542a9aff8ea-m.svg" alt="">
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/d2407420-f3bd-11eb-8e0d-6f4af49bf82e-m.svg" alt="">
                    </div>
                    <h3 style="font-size: 14px;font-weight: 500;margin-top: 20px;">Pix</h3>
                    <div> <img src="https://http2.mlstatic.com/storage/logos-api-admin/f99fcca0-f3bd-11eb-9984-b7076edb0bb7-m.svg" alt="pix"></div>
                    <h3 style="font-size: 14px;font-weight: 500; margin-top: 20px;">Boleto bancário</h3>
                    <div><img src="https://http2.mlstatic.com/storage/logos-api-admin/00174300-571e-11e8-8364-bff51f08d440-m.svg" alt=""></div>
                    <p style="color: rgb(52, 132, 250);font-size: 12px; margin-top: 20px;">Confira outros meios de pagamento</p>
                    </div>
                    
                </div>
                
             </div>
             
        </div>
        
    
    </div>
    <div id="anuncioid">
        <div></div>
        <div style="display: flex; gap:10px; align-items: center; margin-top: 10px;">
            <span style="font-size: 14px;">Anúncio <strong>#2768768796</strong></span>
            <div style="width: 1px; height: 70%; background-color: grey;"></div>
            <span style="font-size: 14px; color:rgb(52, 132, 250) ;">Denunciar</span>
        </div>
    </div>

    <div class="container-quem-comprou-tambem-viu">
       <h2 style="font-weight: 500; font-size: 24px;">Quem comprou este produto também comprou</h2> 

    </div>

    <div class="container-anuncio-oralb">
        <div style="width: 480px;height: 100%;"><img src="https://http2.mlstatic.com/D_NQ_893137-MLA81125461917_122024-OO.jpg" alt=""></div>
        <div style="width: 185px; height: 100%; display: flex; align-items: center; justify-content:center;"> <div style="width: 120px;height: 85px; background-color: white; border-radius: 10px;display: flex; align-items: center;justify-content: center;padding:20px 10px;"><img src="https://http2.mlstatic.com/D_NQ_990854-MLA81125490501_122024-OO.jpg" alt=""></div></div>
        <div style="width: 520px;height: 100%; display: flex;flex-direction: column; justify-content: center;">
            <span style="margin-bottom: 10px;font-size: 14px;">Oral-B</span>
            <span style="margin-bottom:5px;font-size: 26px;">SUA SAÚDE</span>
            <span style="font-size: 26px;">BUSCA RADIANTE</span>
            <span style="margin-top: 10px; font-size: 14px;">APROVEITE JÁ</span>
        </div>
    </div>
    <div class="container-produtos-mais-procurados">
        <h3 style="font-weight: 500;">Produtos mais Procurados</h3>
        <div class="item-list">
            <span>Apple Watch</span> -
            <span>Ar Condicionado</span> - 
            <span>Ar Condicionado Inverter</span> - 
            <span>Bicicletas</span> - 
            <span>Cafeteira</span> - 
            <span>Carros Novos</span> - 
            <span>Carros Usados</span> - 
            <span>Computador</span> - 
            <span>Fogão 4 Bocas</span> - 
            <span>Fone De Ouvido Bluetooth</span> - 
            <span>Freezer Vertical</span> - 
            <span>Geladeira Frost Free</span> - 
            <span>Guarda Roupa Casal</span> - 
            <span>Guarda Roupa Solteiro</span> - 
            <span>iPad</span> - 
            <span>iPhone</span> - 
            <span>iPhone 8 Plus</span> - 
            <span>iPhone 11</span> - 
            <span>iPhone 13</span> - 
            <span>iPhone 13 Pro Max</span> - 
            <span>iPhone 14</span> - 
            <span>iPhone 14 Pro</span> - 
            <span>iPhone 14 Pro Max</span> - 
            <span>iPhone 15</span> - 
            <span>iPhone 16</span> - 
            <span>iPhone 16 Plus</span> - 
            <span>iPhone 16 Pro</span> - 
            <span>iPhone 16 Pro Max</span> - 
            <span>JBL</span> - 
            <span>Microondas</span> - 
            <span>Monitor</span> - 
            <span>Motorola</span> - 
            <span>Nintendo Switch</span> - 
            <span>Notebook</span> - 
            <span>Notebook Dell</span> - 
            <span>Painel Para TV</span> - 
            <span>Penteadeira</span> - 
            <span>Poco X5 Pro</span> - 
            <span>PS4</span> - 
            <span>PS5</span> - 
            <span>Redmi Note 12</span> - 
            <span>S22 Ultra</span> - 
            <span>Samsung A54</span> - 
            <span>Samsung S23</span> - 
            <span>Smartwatch</span> - 
            <span>Tablets Samsung</span> - 
            <span>Tênis Masculino</span> - 
            <span>Tênis Feminino</span> - 
            <span>TV 32 Polegadas</span> - 
            <span>TV 50 4K</span> - 
            <span>TV 50 Polegadas</span> - 
            <span>Ventilador</span> - 
            <span>Xbox</span> - 
            <span>Xiaomi</span>.
        </div>
        
        <h3 style="font-weight: 500; font-size: 14px; margin-top: 20px;">Pesquise produto por letra inicial</h3>
        
        <div class="alphabet-list">
            <span>A</span> -
            <span>B</span> - 
            <span>C</span> - 
            <span>D</span> - 
            <span>E</span> - 
            <span>F</span> - 
            <span>G</span> - 
            <span>H</span> - 
            <span>I</span> - 
            <span>J</span> - 
            <span>K</span> - 
            <span>L</span> - 
            <span>M</span> - 
            <span>N</span> - 
            <span>O</span> - 
            <span>P</span> - 
            <span>Q</span> - 
            <span>R</span> - 
            <span>S</span> - 
            <span>T</span> - 
            <span>U</span> - 
            <span>V</span> - 
            <span>W</span> - 
            <span>X</span> - 
            <span>Y</span> - 
            <span>Z</span>
        </div>
    </div>
    
<!--footer vem aqui -->    
</div>
<div class="container-nav-piloticas">
    <div style="width: 150px;height: 25px; background-color: white; border-top-left-radius: 5px;border-top-right-radius: 5px; display: flex;align-items: center;justify-content: center; border-top: 1px solid #F3F3F3; border-left: 1px solid #F3F3F3 ;border-right: 1px solid #F3F3F3 ; border-bottom: 1px solid white;">
      <span style="font-size: 12px; color: grey;">Mais informações</span>
      <a class="material-icons chevron-toggle" href="#" style="color: grey;">keyboard_arrow_up</a>
    </div>
  </div>
  
<div class="details-info" style="display: none;">
    <div class="footer-section">
        <div class="footer-column">
          <h3>Sobre o</h3>
          <ul>
            <li>Mercado Livre</li>
            <li>Investor relations</li>
            <li>Tendências</li>
            <li>Sustentabilidade</li>
            <li>Blog</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Outros sites</h3>
          <ul>
            <li>Desenvolvedores</li>
            <li>Mercado Pago</li>
            <li>Envios</li>
            <li>Mercado Shops</li>
            <li>Mercado Ads</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Contato</h3>
          <ul>
            <li>Comprar</li>
            <li>Vender</li>
            <li>Solução de problemas</li>
            <li>Segurança</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Redes sociais</h3>
          <ul>
            <li>X</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Minhas contas</h3>
          <ul>
            <li>Entre</li>
            <li>Vender</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Assinaturas</h3>
          <ul>
            <li>Meli+</li>
            <li>Disney+</li>
            <li>Deezer Premium</li>
            <li>Max</li>
            <li>Paramount+</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Temporadas</h3>
          <ul>
            <li>Dia do consumidor</li>
            <li>Dia das mães</li>
            <li>Black Friday</li>
            <li>Descontaço</li>
          </ul>
        </div>
      </div>
      
  </div>
</div>
<footer>
    <div class="container-politicas">
        <a href="#">Trabalhe conosco</a>
  <a href="#">Termos e condições</a>
  <a href="#">Promoções</a>
  <a href="#">Como cuidamos da sua privacidade</a>
  <a href="#">Acessibilidade</a>
  <a href="#">Contato</a>
  <a href="#">Informações sobre seguros</a>
  <a href="#">Programa de Afiliados</a>
  <a href="#">Black Friday</a>
    </div>
    <div class="container-informacoes-loja">
        <span>Copyright © 1999-2025 Ebazar.com.br LTDA.</span>
        <span>CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.</span>
    </div>
</footer>



</main>


