function notificacao_verificacao_html({
    nome,
    tipoAlteracao, // 'email', 'senha', 'telefone'
    codigoVerificacao,
    novoValor, // novo email, novo telefone (opcional para senha)
    dataExpiracao, // quando o código expira
    logo
}) {
    // Configurações baseadas no tipo de alteração
    const configs = {
        email: {
            icone: '📧',
            titulo: 'Verificação de Email',
            descricao: 'Você solicitou a alteração do email da sua conta',
            detalhe: `Novo email: ${novoValor}`,
            cor: '#3DD5FA'
        },
        senha: {
            icone: '🔐',
            titulo: 'Redefinição de Senha',
            descricao: 'Você solicitou a alteração da senha da sua conta',
            detalhe: 'Por segurança, não exibimos informações sobre a nova senha',
            cor: '#FF6B6B'
        },
        telefone: {
            icone: '📱',
            titulo: 'Verificação de Telefone',
            descricao: 'Você solicitou a alteração do telefone da sua conta',
            detalhe: `Novo telefone: ${novoValor}`,
            cor: '#4ECDC4'
        }
    };

    const config = configs[tipoAlteracao] || configs.email;

    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.titulo} - CodePonto</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background-color: #001227;
            line-height: 1.6;
            color: #ffffff;
            padding: 20px 0;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #01070F;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(61, 213, 250, 0.1);
            border: 1px solid #054D8A;
        }
        
        .header {
            background: linear-gradient(135deg, #01315B 0%, #054D8A 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
            position: relative;
            border-bottom: 2px solid ${config.cor};
        }
        
        .logo-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .logo-image {
            width: 120px;
            height: 60px;
            object-fit: cover;
        }
        
        .logo {
            font-size: 32px;
            font-weight: 700;
            letter-spacing: -0.5px;
            color: #3DD5FA;
        }
        
        .header-badge {
            display: inline-block;
            background: linear-gradient(135deg, ${config.cor} 0%, #054D8A 100%);
            color: #01070F;
            padding: 10px 24px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 12px rgba(61, 213, 250, 0.4);
        }
        
        .content {
            padding: 45px 35px;
            background-color: #01070F;
        }
        
        .title {
            font-size: 28px;
            color: ${config.cor};
            margin-bottom: 15px;
            font-weight: 700;
            text-align: center;
            letter-spacing: -0.5px;
        }
        
        .subtitle {
            font-size: 16px;
            color: #ffffff;
            margin-bottom: 30px;
            line-height: 1.7;
            text-align: center;
            opacity: 0.9;
        }
        
        .greeting {
            font-size: 18px;
            color: #3DD5FA;
            margin-bottom: 20px;
            font-weight: 600;
        }
        
        .code-section {
            background: linear-gradient(135deg, #01315B 0%, #054D8A 100%);
            border: 3px solid ${config.cor};
            border-radius: 20px;
            padding: 35px 30px;
            margin: 30px 0;
            text-align: center;
        }
        
        .code-label {
            font-size: 14px;
            color: ${config.cor};
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 15px;
        }
        
        .verification-code {
            font-size: 48px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: 8px;
            margin: 20px 0;
            text-align: center;
            font-family: 'Courier New', monospace;
            background: linear-gradient(135deg, ${config.cor} 0%, #ffffff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            padding: 15px;
            border: 2px dashed ${config.cor};
            border-radius: 15px;
            background-color: rgba(1, 7, 15, 0.5);
        }
        
        .code-expiration {
            font-size: 13px;
            color: #ffffff;
            margin-top: 15px;
            opacity: 0.8;
        }
        
        .info-box {
            background-color: #01315B;
            border-left: 6px solid ${config.cor};
            border-radius: 0 15px 15px 0;
            padding: 25px;
            margin: 30px 0;
        }
        
        .info-box h3 {
            color: ${config.cor};
            font-size: 18px;
            margin-bottom: 12px;
            font-weight: 700;
        }
        
        .info-box p {
            color: #ffffff;
            font-size: 15px;
            line-height: 1.7;
            opacity: 0.9;
            margin-bottom: 10px;
        }
        
        .detail-value {
            color: ${config.cor};
            font-weight: 600;
            font-family: 'Courier New', monospace;
        }
        
        .warning-section {
            background: linear-gradient(135deg, #3D1515 0%, #5A1F1F 100%);
            border: 2px solid #FF6B6B;
            border-radius: 20px;
            padding: 25px;
            margin: 30px 0;
        }
        
        .warning-section h3 {
            color: #FF6B6B;
            font-size: 18px;
            margin-bottom: 12px;
            font-weight: 700;
        }
        
        .warning-section p {
            color: #ffffff;
            font-size: 14px;
            line-height: 1.7;
            opacity: 0.95;
        }
        
        .warning-section ul {
            margin: 15px 0 0 20px;
            color: #ffffff;
            opacity: 0.9;
        }
        
        .warning-section li {
            margin-bottom: 8px;
            font-size: 14px;
        }
        
        .steps-section {
            background: linear-gradient(135deg, #01315B 0%, #054D8A 100%);
            border-radius: 20px;
            padding: 30px;
            margin: 30px 0;
        }
        
        .steps-section h3 {
            color: ${config.cor};
            font-size: 18px;
            margin-bottom: 20px;
            font-weight: 700;
            text-align: center;
        }
        
        .step {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            align-items: flex-start;
        }
        
        .step-number {
            background: ${config.cor};
            color: #01070F;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 16px;
            flex-shrink: 0;
        }
        
        .step-content {
            flex: 1;
        }
        
        .step-title {
            color: #ffffff;
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .step-description {
            color: #ffffff;
            font-size: 14px;
            opacity: 0.8;
            line-height: 1.6;
        }
        
        .cta-button {
            display: inline-block;
            background-color: ${config.cor} !important;
            color: #01070F !important;
            padding: 16px 40px;
            text-decoration: none !important;
            border-radius: 30px;
            font-weight: 700;
            font-size: 16px;
            text-align: center;
            letter-spacing: 0.5px;
            margin: 20px auto;
            transition: all 0.3s ease;
            box-shadow: 0 6px 20px rgba(61, 213, 250, 0.3);
            border: 2px solid ${config.cor};
        }
        
        .cta-button:hover {
            box-shadow: 0 8px 25px rgba(61, 213, 250, 0.5);
            transform: translateY(-2px);
        }
        
        .button-container {
            text-align: center;
            margin: 30px 0;
        }
        
        .footer {
            background: linear-gradient(135deg, #01070F 0%, #001227 100%);
            padding: 35px 30px;
            text-align: center;
            border-top: 1px solid #054D8A;
        }
        
        .footer p {
            font-size: 13px;
            color: #ffffff;
            margin-bottom: 12px;
            line-height: 1.5;
            opacity: 0.7;
        }
        
        .divider {
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #054D8A 50%, transparent 100%);
            margin: 30px 0;
            border-radius: 1px;
        }
        
        @media (max-width: 640px) {
            body {
                padding: 10px;
            }
            
            .email-container {
                margin: 0;
                border-radius: 15px;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .logo {
                font-size: 26px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .title {
                font-size: 24px;
            }
            
            .verification-code {
                font-size: 36px;
                letter-spacing: 4px;
            }
            
            .code-section {
                padding: 25px 20px;
            }
            
            .info-box {
                padding: 20px;
            }
            
            .warning-section {
                padding: 20px;
            }
            
            .steps-section {
                padding: 25px 20px;
            }
            
            .cta-button {
                display: block;
                width: 90%;
                max-width: 280px;
                margin: 20px auto;
                padding: 14px 24px;
                font-size: 15px;
            }
        }
        
        @media (max-width: 480px) {
            .header {
                padding: 25px 15px;
            }
            
            .logo-image {
                width: 50px;
                height: 50px;
            }
            
            .logo {
                font-size: 22px;
            }
            
            .title {
                font-size: 20px;
            }
            
            .verification-code {
                font-size: 32px;
                letter-spacing: 3px;
            }
            
            .content {
                padding: 25px 15px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo-container">
                <img src="${logo}" alt="CodePonto Logo" class="logo-image" />
                <div class="logo">CodePonto</div>
            </div>
            <div class="header-badge">${config.icone} ${config.titulo}</div>
        </div>
        
        <div class="content">
            <p class="greeting">Olá, ${nome}!</p>
            
            <h1 class="title">${config.descricao}</h1>
            <p class="subtitle">
                Use o código de verificação abaixo para confirmar esta alteração.
            </p>
            
            <div class="code-section">
                <div class="code-label">Seu Código de Verificação</div>
                <div class="verification-code">${codigoVerificacao}</div>
                <div class="code-expiration">
                    ⏰ Este código expira em: <strong>${dataExpiracao}</strong>
                </div>
            </div>
            
            <div class="info-box">
                <h3>📋 Detalhes da Alteração</h3>
                <p>${config.detalhe}</p>
                <p style="margin-top: 15px;">
                    Para confirmar esta alteração, insira o código de verificação na plataforma.
                </p>
            </div>
            
            <div class="steps-section">
                <h3>Como usar o código</h3>
                
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <div class="step-title">Acesse a plataforma</div>
                        <div class="step-description">
                            Entre na área de verificação no CodePonto
                        </div>
                    </div>
                </div>
                
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <div class="step-title">Insira o código</div>
                        <div class="step-description">
                            Digite o código de 6 dígitos mostrado acima
                        </div>
                    </div>
                </div>
                
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <div class="step-title">Confirme a alteração</div>
                        <div class="step-description">
                            Sua ${tipoAlteracao === 'senha' ? 'senha' : tipoAlteracao === 'email' ? 'email' : 'telefone'} será atualizado(a) automaticamente
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="button-container">
                <a href="#" class="cta-button">Verificar Agora</a>
            </div>
            
            <div class="warning-section">
                <h3>⚠️ Atenção - Segurança</h3>
                <p><strong>Você não solicitou esta alteração?</strong></p>
                <p>Se você não reconhece esta atividade, tome as seguintes ações imediatamente:</p>
                <ul>
                    <li>NÃO utilize o código de verificação acima</li>
                    <li>Altere sua senha imediatamente</li>
                    <li>Entre em contato com nosso suporte</li>
                    <li>Revise as atividades recentes da sua conta</li>
                </ul>
            </div>
            
            <div class="info-box">
                <h3>💡 Dicas de Segurança</h3>
                <p>
                    • Nunca compartilhe seus códigos de verificação com ninguém<br>
                    • Nossa equipe NUNCA solicitará códigos por telefone ou email<br>
                    • Sempre verifique o remetente dos emails de verificação<br>
                    • Use senhas fortes e únicas para sua conta
                </p>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2024 CodePonto. Todos os direitos reservados.</p>
            <p>Soluções em APIs e Desenvolvimento Web</p>
            
            <div class="divider"></div>
            
            <p style="font-size: 12px; opacity: 0.6;">
                Você está recebendo este email porque uma alteração foi solicitada na sua conta.<br>
                Se você não solicitou esta alteração, entre em contato conosco imediatamente.
            </p>
        </div>
    </div>
</body>
</html>
`;
}

module.exports = notificacao_verificacao_html;