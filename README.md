

<h1>Hello Word</h1>

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmR1ZXdoYnQ5bm9kOGVtaWc3bGF6Mzh4bjhhaHR1dDQ3YWYzaTYxYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/guNXesWtLfqOfnWwmx/200.webp" alt="sigma_boy" style="display:flex;">

<img src="https://i.gifer.com/origin/45/458058f8240e1b0bf821323dd10c47fd_w200.webp" style="width:100%;height:150px;">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/BryandexDevloper/programando-/output/github-contribution-grid-snake-dark.svg" />  
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/BryandexDevloper/programando-/output/github-contribution-grid-snake.svg" />
  <img alt="GitHub Snake" src="https://raw.githubusercontent.com/BryandexDevloper/programando-/output/github-contribution-grid-snake.svg" />
</picture>





# 📧 API de Envio de E-mails BryanDex

Uma API REST simples e eficiente para envio de e-mails usando diferentes provedores SMTP. **Pronta para uso!**

## 🌐 URL da API
```
https://api-envio-email-bryandex.onrender.com
```

## 🌐 Site da API

```
https://chipper-empanada-0d677c.netlify.app/#api

```

## 🚀 Características

- ✅ **API totalmente online** - Sem necessidade de instalação
- ✅ Suporte a múltiplos provedores SMTP (Gmail, Hotmail, Yahoo)
- ✅ Envio de e-mails em HTML
- ✅ Respostas em JSON
- ✅ Fácil integração em qualquer linguagem
- ✅ SSL/HTTPS habilitado

## 📡 Como Usar

### Endpoint Principal

#### `POST /enviar_mail`

**URL Completa:** `https://api-envio-email-bryandex.onrender.com/enviar_mail`

### 📋 Parâmetros Obrigatórios (JSON)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `service` | string | Provedor SMTP: `"gmail"`, `"hotmail"`, `"yahoo"` |
| `email` | string | Seu e-mail remetente |
| `password` | string | Senha ou token de app do seu e-mail |
| `to` | string | E-mail do destinatário |
| `subject` | string | Assunto do e-mail |
| `html` | string | Conteúdo HTML do e-mail |
| `email_user` | string | E-mail do destinatário (mesmo que `to`) |

## 💻 Exemplos Práticos

### 🔧 cURL (Terminal)
```bash
curl -X POST https://api-envio-email-bryandex.onrender.com/enviar_mail \
  -H "Content-Type: application/json" \
  -d '{
    "service": "gmail",
    "email": "seu.email@gmail.com",
    "password": "sua_senha_ou_token",
    "to": "destinatario@example.com",
    "subject": "Teste de API",
    "html": "<h1>Olá! Este e-mail foi enviado via API 🚀</h1><p>Funcionou perfeitamente!</p>",
    "email_user": "destinatario@example.com"
  }'
```

### 🟨 JavaScript (Frontend/Node.js)
```javascript
async function enviarEmail() {
  try {
    const response = await fetch('https://api-envio-email-bryandex.onrender.com/enviar_mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service: 'gmail',
        email: 'seu.email@gmail.com',
        password: 'sua_senha_ou_token',
        to: 'destinatario@example.com',
        subject: 'E-mail via JavaScript',
        html: '<h2>Olá!</h2><p>Este e-mail foi enviado usando JavaScript 💻</p>',
        email_user: 'destinatario@example.com'
      })
    });

    const resultado = await response.json();
    console.log('✅ Resultado:', resultado);
  } catch (error) {
    console.error('❌ Erro:', error);
  }
}

// Chamar a função
enviarEmail();
```

### 🐍 Python
```python
import requests
import json

def enviar_email():
    url = 'https://api-envio-email-bryandex.onrender.com/enviar_mail'
    
    dados = {
        "service": "gmail",
        "email": "seu.email@gmail.com",
        "password": "sua_senha_ou_token",
        "to": "destinatario@example.com",
        "subject": "E-mail via Python",
        "html": "<h2>Olá!</h2><p>Este e-mail foi enviado usando Python 🐍</p>",
        "email_user": "destinatario@example.com"
    }
    
    try:
        response = requests.post(url, json=dados)
        resultado = response.json()
        print("✅ Resultado:", resultado)
    except Exception as error:
        print("❌ Erro:", error)

# Chamar a função
enviar_email()
```

### 🔷 PHP
```php
<?php
$url = 'https://api-envio-email-bryandex.onrender.com/enviar_mail';

$dados = array(
    'service' => 'gmail',
    'email' => 'seu.email@gmail.com',
    'password' => 'sua_senha_ou_token',
    'to' => 'destinatario@example.com',
    'subject' => 'E-mail via PHP',
    'html' => '<h2>Olá!</h2><p>Este e-mail foi enviado usando PHP 🚀</p>',
    'email_user' => 'destinatario@example.com'
);

$options = array(
    'http' => array(
        'header' => "Content-type: application/json\r\n",
        'method' => 'POST',
        'content' => json_encode($dados)
    )
);

$context = stream_context_create($options);
$resultado = file_get_contents($url, false, $context);

echo "✅ Resultado: " . $resultado;
?>
```

## 📊 Respostas da API

### ✅ **Sucesso** (Status 200)
```json
{
  "mensagem": "Email enviado com sucesso"
}
```

### ❌ **Dados Incompletos** (Status 400)
```json
{
  "mensagem": "Ainda falta dados importantes para o envio do email"
}
```

### ❌ **Erro no Envio** (Status 500)
```json
{
  "mensagem": "Erro ao enviar email",
  "erro": "Detalhes do erro específico"
}
```

## ⚙️ Configuração de Provedores

### 📧 **Gmail**
1. Ative a **verificação em duas etapas**
2. Gere uma **Senha de App**:
   - Conta Google → Segurança → Senhas de app
   - Escolha "App personalizado"
   - Use essa senha no campo `password`

### 📧 **Hotmail/Outlook**
- Pode usar senha normal ou App Password
- Para maior segurança, use App Password

### 📧 **Yahoo**
1. Ative a **verificação em duas etapas**
2. Gere uma **Senha de App**
3. Use a senha gerada no campo `password`

## 🎯 Exemplo de E-mail HTML Avançado

```javascript
const htmlAvancado = `
<!DOCTYPE html>
<html>
<head>
    <style>
        .container { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .button { background: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Bem-vindo!</h1>
        </div>
        <div class="content">
            <h2>Olá, [Nome]!</h2>
            <p>Este é um exemplo de e-mail enviado através da API BryanDex.</p>
            <a href="https://example.com" class="button">Clique Aqui</a>
            <p>Obrigado por usar nossa API!</p>
        </div>
    </div>
</body>
</html>
`;
```

## ⚠️ **Limitações e Considerações**

- 🔄 **Cold Start**: Primeira requisição pode levar alguns segundos (API hiberna após inatividade)
- 🔒 **Segurança**: Não armazene credenciais em código público
- 📧 **Limite**: Respeite os limites do seu provedor de e-mail
- 🌐 **CORS**: API permite requisições de qualquer origem

## 🆘 **Resolução de Problemas**

### **Erro: "Invalid login"**
- ✅ Verifique se está usando App Password (não a senha normal)
- ✅ Confirme se o serviço está correto (`gmail`, `hotmail`, `yahoo`)

### **Erro: "Connection timeout"**
- ✅ Aguarde alguns segundos (cold start)
- ✅ Tente novamente em alguns instantes

### **API não responde**
- ✅ Verifique se a URL está correta
- ✅ Aguarde o "wake up" da aplicação (até 30s na primeira requisição)

## 🔗 **Links Úteis**

- 🔐 [Como gerar App Password no Gmail](https://support.google.com/accounts/answer/185833)
- 🔐 [Como gerar App Password no Yahoo](https://help.yahoo.com/kb/generate-manage-third-party-passwords-sln15241.html)
- 📧 [Teste sua API online](https://hoppscotch.io/)

## 📞 **Suporte**

- 🐛 Encontrou um bug? [Reporte aqui](../../issues)
- 💡 Sugestões são bem-vindas!
- 📧 Dúvidas? Entre em contato!

---

**🚀 Desenvolvido por BryanDex** | **⭐ Se ajudou, deixe uma estrela!**

**Desenvolvido por BryanDex** 🚀
