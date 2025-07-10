<h1>Hello Word</h1>

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmR1ZXdoYnQ5bm9kOGVtaWc3bGF6Mzh4bjhhaHR1dDQ3YWYzaTYxYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/guNXesWtLfqOfnWwmx/200.webp" alt="sigma_boy">




<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Cobrinha GitHub API</title>
  <style>
    body {
      background: #0d1117;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: sans-serif;
    }

    .github-grid {
      display: grid;
      grid-template-columns: repeat(53, 12px); /* 53 semanas */
      grid-template-rows: repeat(7, 12px);
      gap: 3px;
    }

    .commit {
      width: 12px;
      height: 12px;
      background-color: #161b22;
      border-radius: 2px;
      transition: background 0.2s;
    }

    .commit.active {
      background-color: #2ea043;
    }

    .snake {
      background-color: #58a6ff !important;
    }
  </style>
</head>
<body>
  <div class="github-grid" id="grid"></div>

  <script>
    const token = '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'
   
    const repo = 'BryandexDeveloper/programando';

    const grid = document.getElementById('grid');
    const dias = [];
    const hoje = new Date();
    const diasDoAno = 365;

    for (let i = diasDoAno; i >= 0; i--) {
      const dia = new Date(hoje);
      dia.setDate(hoje.getDate() - i);
      dias.push({
        data: dia.toISOString().split('T')[0],
        commit: false,
      });
    }

    function montarGrid() {
      dias.forEach((dia) => {
        const div = document.createElement('div');
        div.classList.add('commit');
        if (dia.commit) div.classList.add('active');
        grid.appendChild(div);
      });
    }

    async function buscarCommits() {
      const commits = [];
      const hojeISO = hoje.toISOString();
      const anoAtras = new Date(hoje);
      anoAtras.setDate(hoje.getDate() - diasDoAno);
      const anoAtrasISO = anoAtras.toISOString();

      const url = `https://api.github.com/repos/${repo}/commits?since=${anoAtrasISO}&until=${hojeISO}&per_page=100`;

      let pagina = 1;
      let temMais = true;

      while (temMais) {
        const res = await fetch(`${url}&page=${pagina}`, {
          headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github+json',
          },
        });

        const dados = await res.json();
        if (dados.length === 0 || dados.message) break;

        commits.push(...dados);
        pagina++;
        if (dados.length < 100) temMais = false;
      }

      // Marca os dias com commit
      commits.forEach((commit) => {
        const data = commit.commit.author.date.split('T')[0];
        const dia = dias.find((d) => d.data === data);
        if (dia) dia.commit = true;
      });

      montarGrid();
      iniciarCobrinha();
    }

    function iniciarCobrinha() {
      const quadrados = document.querySelectorAll('.commit');
      let index = 0;
      setInterval(() => {
        quadrados.forEach((q) => q.classList.remove('snake'));

        if (quadrados[index]) {
          quadrados[index].classList.add('snake');
          if (quadrados[index].classList.contains('active')) {
            quadrados[index].classList.remove('active');
          }
        }

        index++;
        if (index >= quadrados.length) index = 0;
      }, 100);
    }

    buscarCommits();
  </script>
</body>
</html>
