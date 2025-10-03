function notificacao_boas_vindas_html({nome, email, dataCadastro, logo}) {
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bem-vindo ao CodePonto</title>
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
            padding: 50px 30px;
            text-align: center;
            color: white;
            position: relative;
            border-bottom: 2px solid #3DD5FA;
        }
        
        .logo-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
        }
        
        .logo-image {
            width: 120px;
            height: 60px;
            object-fit: cover;
        }
        
        .logo {
            font-size: 36px;
            font-weight: 700;
            letter-spacing: -0.5px;
            color: #3DD5FA;
        }
        
        .welcome-badge {
            display: inline-block;
            background: linear-gradient(135deg, #3DD5FA 0%, #054D8A 100%);
            color: #01070F;
            padding: 10px 24px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 12px rgba(61, 213, 250, 0.4);
            margin-top: 10px;
        }
        
        .content {
            padding: 45px 35px;
            background-color: #01070F;
        }
        
        .welcome-title {
            font-size: 32px;
            color: #3DD5FA;
            margin-bottom: 15px;
            font-weight: 700;
            text-align: center;
            letter-spacing: -0.5px;
        }
        
        .welcome-subtitle {
            font-size: 18px;
            color: #ffffff;
            margin-bottom: 35px;
            line-height: 1.7;
            text-align: center;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            opacity: 0.9;
        }
        
        .user-info {
            background-color: #01315B;
            border: 2px solid #054D8A;
            border-radius: 20px;
            padding: 30px;
            margin: 35px 0;
            text-align: center;
        }
        
        .user-info h3 {
            font-size: 20px;
            color: #3DD5FA;
            margin-bottom: 20px;
            font-weight: 700;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 20px;
        }
        
        .info-item {
            background: linear-gradient(135deg, #01070F 0%, #01315B 100%);
            padding: 15px;
            border-radius: 12px;
            border: 1px solid #054D8A;
        }
        
        .info-label {
            font-size: 13px;
            color: #3DD5FA;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        
        .info-value {
            font-size: 16px;
            color: #ffffff;
            font-weight: 500;
        }
        
        .features-section {
            background: linear-gradient(135deg, #01315B 0%, #054D8A 100%);
            border: 2px solid #3DD5FA;
            border-radius: 20px;
            padding: 35px 30px;
            margin: 35px 0;
        }
        
        .features-section h3 {
            color: #3DD5FA;
            margin-bottom: 25px;
            font-size: 20px;
            font-weight: 700;
            text-align: center;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }
        
        .feature-card {
            background-color: rgba(1, 7, 15, 0.5);
            padding: 20px;
            border-radius: 15px;
            border: 1px solid #054D8A;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(61, 213, 250, 0.2);
        }
        
        .feature-icon {
            font-size: 32px;
            margin-bottom: 12px;
        }
        
        .feature-title {
            font-size: 18px;
            color: #3DD5FA;
            font-weight: 700;
            margin-bottom: 8px;
        }
        
        .feature-description {
            font-size: 14px;
            color: #ffffff;
            line-height: 1.6;
            opacity: 0.9;
        }
        
        .cta-section {
            text-align: center;
            margin: 40px 0;
            padding: 35px 25px;
            background: linear-gradient(135deg, #01315B 0%, #054D8A 100%);
            border-radius: 20px;
            border: 2px solid #3DD5FA;
        }
        
        .cta-section h3 {
            color: #3DD5FA;
            font-size: 22px;
            margin-bottom: 15px;
            font-weight: 700;
        }
        
        .cta-section p {
            color: #ffffff;
            font-size: 15px;
            margin-bottom: 25px;
            opacity: 0.9;
        }
        
        .cta-button {
            display: inline-block;
            background-color: #3DD5FA !important;
            color: #01070F !important;
            padding: 16px 40px;
            text-decoration: none !important;
            border-radius: 30px;
            font-weight: 700;
            font-size: 16px;
            text-align: center;
            letter-spacing: 0.5px;
            margin: 8px;
            transition: all 0.3s ease;
            box-shadow: 0 6px 20px rgba(61, 213, 250, 0.3);
            border: 2px solid #3DD5FA;
        }
        
        .cta-button:hover {
            box-shadow: 0 8px 25px rgba(61, 213, 250, 0.5);
            transform: translateY(-2px);
        }
        
        .cta-button-secondary {
            background-color: transparent !important;
            color: #3DD5FA !important;
            border: 2px solid #3DD5FA;
        }
        
        .help-section {
            background: linear-gradient(135deg, #01315B 0%, #054D8A 100%);
            border-left: 6px solid #3DD5FA;
            border-radius: 0 20px 20px 0;
            padding: 25px 30px;
            margin: 35px 0;
        }
        
        .help-section h4 {
            color: #3DD5FA;
            margin-bottom: 12px;
            font-size: 18px;
            font-weight: 700;
        }
        
        .help-section p {
            color: #ffffff;
            font-size: 15px;
            line-height: 1.7;
            font-weight: 400;
            opacity: 0.9;
            margin-bottom: 15px;
        }
        
        .help-links {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 15px;
        }
        
        .help-link {
            color: #3DD5FA;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            padding: 8px 16px;
            border: 1px solid #3DD5FA;
            border-radius: 20px;
            transition: all 0.3s ease;
        }
        
        .help-link:hover {
            background-color: #3DD5FA;
            color: #01070F;
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
        
        .social-links {
            margin: 20px 0;
        }
        
        .social-links a {
            display: inline-block;
            margin: 0 15px;
            color: #3DD5FA;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            transition: color 0.3s ease;
        }
        
        .social-links a:hover {
            color: #054D8A;
        }
        
        .divider {
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #054D8A 50%, transparent 100%);
            margin: 35px 0;
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
                padding: 35px 20px;
            }
            
            .logo {
                font-size: 28px;
            }
            
            .welcome-badge {
                font-size: 12px;
                padding: 8px 18px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .welcome-title {
                font-size: 26px;
            }
            
            .welcome-subtitle {
                font-size: 16px;
            }
            
            .user-info {
                padding: 25px 20px;
            }
            
            .features-section {
                padding: 30px 20px;
            }
            
            .cta-section {
                padding: 30px 20px;
            }
            
            .cta-button {
                display: block !important;
                width: 90%;
                max-width: 280px;
                margin: 10px auto !important;
                padding: 14px 24px;
                font-size: 15px;
            }
            
            .help-section {
                padding: 20px;
            }
            
            .help-links {
                flex-direction: column;
            }
            
            .help-link {
                text-align: center;
            }
            
            .footer {
                padding: 25px 20px;
            }
        }
        
        @media (max-width: 480px) {
            .header {
                padding: 30px 15px;
            }
            
            .logo-image {
                width: 50px;
                height: 50px;
            }
            
            .logo {
                font-size: 24px;
            }
            
            .welcome-title {
                font-size: 22px;
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
            <div class="welcome-badge">🎉 Conta Criada com Sucesso</div>
        </div>
        
        <div class="content">
            <h1 class="welcome-title">Bem-vindo(a), ${nome}! 🚀</h1>
            <p class="welcome-subtitle">
                Estamos muito felizes em ter você conosco! Sua conta foi criada com sucesso 
                e você já pode começar a aproveitar todas as funcionalidades da nossa plataforma.
            </p>
            
            <div class="user-info">
                <h3>📋 Informações da Sua Conta</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">👤 Nome</div>
                        <div class="info-value">${nome}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">📧 Email</div>
                        <div class="info-value">${email}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">📅 Data de Cadastro</div>
                        <div class="info-value">${dataCadastro}</div>
                    </div>
                </div>
            </div>
            
            <div class="features-section">
                <h3>✨ O que você pode fazer agora</h3>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🔌</div>
                        <div class="feature-title">Acesse nossas APIs</div>
                        <div class="feature-description">
                            Integre facilmente nossas APIs RESTful em seus projetos 
                            com documentação completa e exemplos práticos.
                        </div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <div class="feature-title">Dashboard Completo</div>
                        <div class="feature-description">
                            Monitore suas requisições, analise métricas em tempo real 
                            e gerencie seus projetos de forma eficiente.
                        </div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🔐</div>
                        <div class="feature-title">Segurança Avançada</div>
                        <div class="feature-description">
                            Suas APIs protegidas com autenticação JWT, rate limiting 
                            e criptografia de ponta a ponta.
                        </div>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">💬</div>
                        <div class="feature-title">Suporte Dedicado</div>
                        <div class="feature-description">
                            Nossa equipe está pronta para ajudar você a tirar o máximo 
                            proveito da plataforma. Entre em contato quando precisar!
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="cta-section">
                <h3>🎯 Pronto para começar?</h3>
                <p>Acesse agora sua conta e explore todas as funcionalidades disponíveis!</p>
                <a href="#" class="cta-button">Acessar Plataforma</a>
                <a href="#" class="cta-button cta-button-secondary">Ver Documentação</a>
            </div>
            
            <div class="divider"></div>
            
            <div class="help-section">
                <h4>🆘 Precisa de ajuda?</h4>
                <p>
                    Estamos aqui para ajudar! Confira nossa base de conhecimento 
                    ou entre em contato com nosso suporte sempre que precisar.
                </p>
                <div class="help-links">
                    <a href="#" class="help-link">📚 Central de Ajuda</a>
                    <a href="#" class="help-link">📖 Documentação</a>
                    <a href="#" class="help-link">💬 Falar com Suporte</a>
                </div>
            </div>
            
            <div class="help-section">
                <h4>💡 Dica de segurança</h4>
                <p>
                    Para manter sua conta segura, recomendamos ativar a autenticação 
                    em dois fatores e utilizar uma senha forte e única. Nunca compartilhe 
                    suas credenciais de acesso com terceiros.
                </p>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2024 CodePonto. Todos os direitos reservados.</p>
            <p>Soluções em APIs e Desenvolvimento Web</p>
            
            <div class="social-links">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
            
            <div class="divider"></div>
            
            <p style="font-size: 12px; opacity: 0.6;">
                Você está recebendo este email porque criou uma conta no CodePonto.<br>
                Se você não criou esta conta, por favor entre em contato conosco imediatamente.
            </p>
        </div>
    </div>
</body>
</html>
`;
}

module.exports = notificacao_boas_vindas_html;