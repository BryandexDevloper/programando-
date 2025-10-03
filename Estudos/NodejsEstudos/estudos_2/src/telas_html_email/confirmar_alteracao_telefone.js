function confirmar_alteracao_telefone_html(codigo){
    return `
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alteração de Telefone - Bryandex Developer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            line-height: 1.6;
            color: #333;
        }
        
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #3483fa, #1e88e5);
            padding: 30px 20px;
            text-align: center;
            color: white;
        }
        
        .logo {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .header-text {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 30px;
            text-align: center;
        }
        
        .welcome-title {
            font-size: 24px;
            color: #333;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        .welcome-text {
            font-size: 16px;
            color: #666;
            margin-bottom: 30px;
            line-height: 1.5;
        }
        
        .code-section {
            background-color: #f8f9fa;
            border: 2px dashed #3483fa;
            border-radius: 12px;
            padding: 30px 20px;
            margin: 30px 0;
        }
        
        .code-label {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .verification-code {
            font-size: 36px;
            font-weight: bold;
            color: #3483fa;
            letter-spacing: 8px;
            font-family: 'Courier New', monospace;
            margin: 15px 0;
        }
        
        .code-validity {
            font-size: 13px;
            color: #999;
            margin-top: 15px;
        }
        
        .instructions {
            background-color: #e3f2fd;
            border-left: 4px solid #3483fa;
            padding: 20px;
            margin: 25px 0;
            text-align: left;
            border-radius: 0 8px 8px 0;
        }
        
        .instructions h3 {
            color: #1976d2;
            font-size: 16px;
            margin-bottom: 10px;
        }
        
        .instructions p {
            font-size: 14px;
            color: #555;
            line-height: 1.5;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #3483fa, #1e88e5);
            color: white;
            padding: 15px 40px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 16px;
            margin: 20px 0;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(52, 131, 250, 0.3);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(52, 131, 250, 0.4);
        }
        
        .security-note {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
        }
        
        .security-note h4 {
            color: #856404;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            font-size: 14px;
        }
        
        .security-note p {
            color: #6c5500;
            font-size: 13px;
            line-height: 1.4;
        }
        
        .footer {
            background-color: #f8f9fa;
            padding: 25px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }
        
        .footer p {
            font-size: 12px;
            color: #999;
            margin-bottom: 10px;
        }
        
        .social-links {
            margin: 15px 0;
        }
        
        .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #3483fa;
            text-decoration: none;
            font-size: 12px;
        }
        
        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, #e0e0e0, transparent);
            margin: 30px 0;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 0;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .verification-code {
                font-size: 28px;
                letter-spacing: 4px;
            }
            
            .welcome-title {
                font-size: 22px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">Bryandex Developer</div>
            <div class="header-text">Comércio Online - Sua plataforma de vendas digital</div>
        </div>
        
        <div class="content">
            <h1 class="welcome-title">Alteração de Telefone</h1>
            <p class="welcome-text">
                Olá! Recebemos uma solicitação para alterar o número de telefone associado à sua conta na Bryandex Developer. 
                Para garantir a segurança, precisamos verificar sua identidade.
            </p>
            
            <div class="code-section">
                <div class="code-label">Seu código de verificação</div>
                <div class="verification-code">${codigo}</div>
                <div class="code-validity">Este código expira em 10 minutos</div>
            </div>
            
            <div class="instructions">
                <h3>🔐 Como usar seu código:</h3>
                <p>1. Volte para a tela de alteração de telefone na Bryandex Developer<br>
                2. Digite o código de 6 dígitos no campo indicado<br>
                3. Clique em "Confirmar" para atualizar seu número de telefone</p>
            </div>
            
            <div class="divider"></div>
            
            <div class="security-note">
                <h4>🛡️ Dica de Segurança</h4>
                <p>Nunca compartilhe este código com outras pessoas. Nossa equipe jamais solicitará seu código por telefone, email ou mensagem. Se você não solicitou esta alteração, ignore este email.</p>
            </div>
        </div>
        
        <div class="footer">
            <p>Este email foi enviado para você porque alguém tentou alterar o número de telefone associado a esta conta.</p>
            <p>Se você não fez esta solicitação, pode ignorar este email com segurança.</p>
            
            <div class="social-links">
                <a href="#">Central de Ajuda</a> |
                <a href="#">Política de Privacidade</a> |
                <a href="#">Termos de Uso</a>
            </div>
            
            <p style="margin-top: 20px; font-size: 11px; color: #bbb;">
                © 2025 Bryandex Developer. Todos os direitos reservados.<br>
                Este é um email automático,não responda a esta mensagem.
            </p>
        </div>
    </div>
</body>
</html>`
}


module.exports = {confirmar_alteracao_telefone_html}