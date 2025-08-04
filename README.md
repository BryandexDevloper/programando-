

<h1>Hello Word</h1>

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmR1ZXdoYnQ5bm9kOGVtaWc3bGF6Mzh4bjhhaHR1dDQ3YWYzaTYxYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/guNXesWtLfqOfnWwmx/200.webp" alt="sigma_boy" style="display:flex;">

<img src="https://i.gifer.com/origin/45/458058f8240e1b0bf821323dd10c47fd_w200.webp" style="width:100%;height:150px;">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/BryandexDevloper/programando-/output/github-contribution-grid-snake-dark.svg" />  
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/BryandexDevloper/programando-/output/github-contribution-grid-snake.svg" />
  <img alt="GitHub Snake" src="https://raw.githubusercontent.com/BryandexDevloper/programando-/output/github-contribution-grid-snake.svg" />
</picture>







# 📧 API de Envio de E-mails BryanDex

Uma API simples e eficiente para envio de e-mails usando diferentes provedores SMTP.

## 🚀 Características

- ✅ Suporte a múltiplos provedores SMTP (Gmail, Hotmail, Yahoo)
- ✅ Envio de e-mails em HTML
- ✅ API REST simples e intuitiva
- ✅ Respostas em JSON
- ✅ Fácil integração

## 📋 Pré-requisitos

- Node.js
- npm ou yarn
- Conta de e-mail válida no provedor escolhido

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd email-api-bryandex
```

2. Instale as dependências:
```bash
npm install
```

3. Execute a aplicação:
```bash
npm start
```

A API estará disponível em `http://localhost:3000`

## 📡 Uso da API

### Base URL
```
http://<seu-dominio-ou-ip>:3000
```

### Endpoint Principal

#### `POST /enviar_mail`

Envia um e-mail usando as configurações SMTP fornecidas.

### 📝 Parâmetros da Requisição

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `service` | string | ✅ | Provedor SMTP (`"gmail"`, `"hotmail"`, `"yahoo"`) |
| `email` | string | ✅ | E-mail remetente |
| `password` | string | ✅ | Senha ou token de app |
| `to` | string | ✅ | E-mail destinatário |
| `subject` | string | ✅ | Assunto do e-mail |
| `html` | string | ✅ | Conteúdo HTML do e-mail |
| `email_user` | string | ✅ | Destinatário (normalmente igual ao `to`) |

### 📄 Exemplo de Requisição

#### cURL
```bash
curl -X POST http://localhost:3000/enviar_mail \
  -H "Content-Type: application/json" \
  -d '{
    "service": "gmail",
    "email": "seu.email@gmail.com",
    "password": "sua_senha_ou_token",
    "to": "destinatario@example.com",
    "subject": "Teste de envio",
    "html": "<h1>Olá, este é um teste!</h1>",
    "email_user": "destinatario@example.com"
  }'
```

#### JavaScript (Fetch)
```javascript
const response = await fetch('http://localhost:3000/enviar_mail', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    service: 'gmail',
    email: 'seu.email@gmail.com',
    password: 'sua_senha_ou_token',
    to: 'destinatario@example.com',
    subject: 'Teste de envio',
    html: '<h1>Olá, este é um teste!</h1>',
    email_user: 'destinatario@example.com'
  })
});

const result = await response.json();
console.log(result);
```

#### Python (requests)
```python
import requests

data = {
    "service": "gmail",
    "email": "seu.email@gmail.com",
    "password": "sua_senha_ou_token",
    "to": "destinatario@example.com",
    "subject": "Teste de envio",
    "html": "<h1>Olá, este é um teste!</h1>",
    "email_user": "destinatario@example.com"
}

response = requests.post('http://localhost:3000/enviar_mail', json=data)
print(response.json())
```

### 📊 Respostas da API

#### ✅ Sucesso (200)
```json
{
  "mensagem": "Email enviado com sucesso"
}
```

#### ❌ Dados Incompletos (400)
```json
{
  "mensagem": "Ainda falta dados importantes para o envio do email"
}
```

#### ❌ Erro no Envio (500)
```json
{
  "mensagem": "Erro ao enviar email",
  "erro": "Mensagem de erro detalhada"
}
```

## ⚙️ Configuração de Provedores

### Gmail
- Use um **App Password** em vez da senha normal
- Ative a verificação em duas etapas
- Gere uma senha de app específica

### Hotmail/Outlook
- Pode usar a senha normal ou App Password
- Verifique as configurações de segurança

### Yahoo
- Requer App Password
- Ative a verificação em duas etapas

## ⚠️ Considerações de Segurança

> **⚠️ IMPORTANTE**: Esta API não possui autenticação. Para uso em produção, considere:

- ✅ Implementar autenticação via API Key
- ✅ Adicionar rate limiting
- ✅ Validação de entrada mais rigorosa
- ✅ Logs de auditoria
- ✅ HTTPS obrigatório
- ✅ Variáveis de ambiente para credenciais

## 🔒 Configuração Segura para Produção

Exemplo de configuração com variáveis de ambiente:

```javascript
// .env
SMTP_SERVICE=gmail
SMTP_EMAIL=seu.email@gmail.com
SMTP_PASSWORD=sua_senha_ou_token
API_KEY=sua_chave_secreta
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- 🐛 Reporte bugs através das [Issues](../../issues)
- 💡 Sugestões são bem-vindas!
- 📧 Contato: [seu-email@example.com]

---

**Desenvolvido por BryanDex** 🚀
