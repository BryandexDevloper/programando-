const fetch = require('node-fetch');

async function consultaCpf(cpf) {
  const response = await fetch(`https://www.receitaws.com.br/v1/cpf/${cpf}`);
  const data = await response.json();
  console.log(data);
}

consultaCpf("19219894670");