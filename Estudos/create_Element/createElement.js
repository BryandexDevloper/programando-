const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const cursus = ['html', 'css', 'php', 'javascript', 'react', 'msql', 'wordpress'];

cursus.map((res, indice) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("class", "curso");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.innerHTML = res;

  // Criar o botão lixeira (img)
  const btn_lixeira = document.createElement("img");
  btn_lixeira.setAttribute("src", "https://th.bing.com/th/id/OIP.997382cQo3wb62yxkxHeFAHaHa?w=164&h=180&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3");
  btn_lixeira.setAttribute("class", "imagen");
  btn_lixeira.style.width = "20px"; // opcional: tamanho da lixeira
  btn_lixeira.style.cursor = "pointer"; // cursor de clique

  // Evento de clique no botão de lixeira
  btn_lixeira.addEventListener("click", (evt) => {
    evt.stopPropagation(); // impede que o clique afete o div pai
    caixa1.removeChild(novoElemento);
    console.log("Removido:", res);
  });

  // Adiciona a lixeira dentro do div
  novoElemento.appendChild(btn_lixeira);

  // Evento no div (opcional, para fins de aprendizado)
  novoElemento.addEventListener("click", (evt) => {
    console.log("Clicou no curso:", res);
    // Aqui você pode mover ou fazer outra coisa
  });

  // Adiciona o elemento final na caixa
  caixa1.appendChild(novoElemento);
});
