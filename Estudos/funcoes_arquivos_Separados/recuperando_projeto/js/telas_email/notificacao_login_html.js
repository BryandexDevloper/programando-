function notificacao_login_html({hora,ip,dispositivo,cidade,estado,pais,Navegador,sistema}){
    return `
    
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo acesso detectado - Bryandex Developer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background-color: #f5f7fa;
            line-height: 1.6;
            color: #2c3e50;
            padding: 20px 0;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            border: 1px solid #e1e8ed;
        }
        
        .header {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
            position: relative;
        }
        
        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #e74c3c, #f39c12, #27ae60, #3498db);
        }
        
        .logo {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
        }
        
        .header-text {
            font-size: 16px;
            opacity: 0.95;
            font-weight: 400;
        }
        
        .content {
            padding: 45px 35px;
        }
        
        .alert-title {
            font-size: 28px;
            color: #e74c3c;
            margin-bottom: 20px;
            font-weight: 700;
            text-align: center;
            letter-spacing: -0.5px;
        }
        
        .alert-text {
            font-size: 16px;
            color: #5a6c7d;
            margin-bottom: 35px;
            line-height: 1.7;
            text-align: center;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .login-details {
            background-color: #f8fafe;
            border: 2px solid #3498db;
            border-radius: 12px;
            padding: 25px;
            margin: 35px 0;
        }
        
        .details-title {
            font-size: 18px;
            color: #2c3e50;
            margin-bottom: 25px;
            text-align: center;
            font-weight: 700;
        }
        
        .details-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .details-table tr {
            border-bottom: 1px solid #e8f0fe;
        }
        
        .details-table tr:last-child {
            border-bottom: none;
        }
        
        .details-table td {
            padding: 12px 8px;
            vertical-align: top;
        }
        
        .detail-label {
            font-weight: 600;
            color: #34495e;
            font-size: 15px;
            width: 40%;
            padding-right: 15px;
        }
        
        .detail-value {
            color: #2c3e50;
            font-size: 15px;
            width: 60%;
            word-wrap: break-word;
        }
        
        .security-actions {
            background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
            border: 2px solid #ffa726;
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
        }
        
        .security-actions h3 {
            color: #f57c00;
            margin-bottom: 20px;
            font-size: 18px;
            font-weight: 700;
        }
        
        .action-list {
            list-style: none;
            padding: 0;
        }
        
        .action-list li {
            color: #e65100;
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 12px;
            padding-left: 25px;
            position: relative;
            font-weight: 500;
        }
        
        .action-list li::before {
            content: "•";
            color: #f57c00;
            font-weight: bold;
            position: absolute;
            left: 0;
            font-size: 18px;
        }
        
        .cta-buttons {
            text-align: center;
            margin: 40px 0;
        }
        
        .cta-button {
            display: inline-block;
            color: white !important;
            padding: 16px 32px;
            text-decoration: none !important;
            border-radius: 50px;
            font-weight: 600;
            font-size: 16px;
            min-width: 160px;
            text-align: center;
            letter-spacing: 0.5px;
            margin: 0 10px 10px 0;
        }
        
        .btn-primary {
            background-color: #27ae60 !important;
            box-shadow: 0 6px 20px rgba(46, 204, 113, 0.3);
        }
        
        .btn-danger {
            background-color: #e74c3c !important;
            box-shadow: 0 6px 20px rgba(231, 76, 60, 0.3);
        }
        
        .security-note {
            background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
            border-left: 6px solid #2196f3;
            border-radius: 0 12px 12px 0;
            padding: 25px;
            margin: 30px 0;
        }
        
        .security-note h4 {
            color: #1565c0;
            margin-bottom: 12px;
            font-size: 16px;
            font-weight: 700;
        }
        
        .security-note p {
            color: #1976d2;
            font-size: 14px;
            line-height: 1.6;
            font-weight: 500;
        }
        
        .footer {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 35px 30px;
            text-align: center;
            border-top: 1px solid #dee2e6;
        }
        
        .footer p {
            font-size: 13px;
            color: #6c757d;
            margin-bottom: 12px;
            line-height: 1.5;
        }
        
        .social-links {
            margin: 20px 0;
        }
        
        .social-links a {
            display: inline-block;
            margin: 0 15px;
            color: #3498db;
            text-decoration: none;
            font-size: 13px;
            font-weight: 600;
            transition: color 0.3s ease;
        }
        
        .social-links a:hover {
            color: #2980b9;
        }
        
        .divider {
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #bdc3c7 50%, transparent 100%);
            margin: 35px 0;
            border-radius: 1px;
        }
        
        .status-badge {
            display: inline-block;
            background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 25px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-shadow: 0 2px 8px rgba(46, 204, 113, 0.3);
        }
        
        /* Responsividade melhorada */
        @media (max-width: 640px) {
            body {
                padding: 10px;
            }
            
            .email-container {
                margin: 0;
                border-radius: 8px;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .logo {
                font-size: 26px;
            }
            
            .header-text {
                font-size: 14px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .alert-title {
                font-size: 24px;
            }
            
            .alert-text {
                font-size: 15px;
            }
            
            .login-details {
                padding: 25px 20px;
                margin: 25px 0;
            }
            
            .details-title {
                font-size: 16px;
            }
            
            .details-table td {
                padding: 10px 5px;
                display: block;
                width: 100% !important;
            }
            
            .detail-label {
                width: 100% !important;
                padding-right: 0;
                margin-bottom: 5px;
                font-weight: 700;
            }
            
            .detail-value {
                width: 100% !important;
                padding-left: 15px;
            }
            
            .security-actions {
                padding: 25px 20px;
            }
            
            .security-actions h3 {
                font-size: 16px;
            }
            
            .action-list li {
                font-size: 14px;
            }
            
            .cta-button {
                display: block !important;
                width: 90%;
                max-width: 280px;
                margin: 10px auto !important;
                padding: 14px 24px;
                font-size: 15px;
            }
            
            .security-note {
                padding: 20px;
            }
            
            .footer {
                padding: 25px 20px;
            }
            
            .social-links a {
                margin: 0 10px;
                font-size: 12px;
            }
        }
        
        @media (max-width: 480px) {
            .header {
                padding: 25px 15px;
            }
            
            .logo {
                font-size: 22px;
            }
            
            .content {
                padding: 25px 15px;
            }
            
            .alert-title {
                font-size: 20px;
            }
            
            .login-details,
            .security-actions,
            .security-note {
                padding: 20px 15px;
            }
            
            .cta-button {
                padding: 12px 20px;
                font-size: 14px;
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
            <h1 class="alert-title">🔐 Novo acesso detectado</h1>
            <p class="alert-text">
                Detectamos um novo acesso à sua conta na Bryandex Developer. 
                Se foi você que fez login, pode ignorar este email. Caso contrário, 
                tome as medidas de segurança imediatamente.
            </p>
            
            <div class="login-details">
                <div class="details-title">📋 Detalhes do Acesso</div>
                
                <table class="details-table">
                    <tr>
                        <td class="detail-label">📅 Data e Hora:</td>
                        <td class="detail-value">${hora}</td>
                    </tr>
                    <tr>
                        <td class="detail-label">🌐 Endereço IP:</td>
                        <td class="detail-value">${ip}</td>
                    </tr>
                    <tr>
                        <td class="detail-label">📱 Dispositivo:</td>
                        <td class="detail-value">${dispositivo} - ${sistema}</td>
                    </tr>
                    <tr>
                        <td class="detail-label">🌍 Localização:</td>
                        <td class="detail-value">${cidade}, ${estado} - ${pais}</td>
                    </tr>
                    <tr>
                        <td class="detail-label">🔍 Navegador:</td>
                        <td class="detail-value">${Navegador}</td>
                    </tr>
                    <tr>
                        <td class="detail-label">✅ Status:</td>
                        <td class="detail-value"><span class="status-badge">Login Autorizado</span></td>
                    </tr>
                </table>
            </div>
            
            <div class="security-actions">
                <h3>⚠️ Se não foi você:</h3>
                <ul class="action-list">
                    <li>Clique imediatamente em "Não fui eu" abaixo</li>
                    <li>Altere sua senha o mais rápido possível</li>
                    <li>Ative a autenticação em dois fatores</li>
                    <li>Verifique outros acessos suspeitos na sua conta</li>
                    <li>Entre em contato com nosso suporte se necessário</li>
                </ul>
            </div>
            
            <div class="cta-buttons">
                <a href="#" class="cta-button btn-primary">Fui eu - Tudo OK</a>
                <a href="#" class="cta-button btn-danger">Não fui eu</a>
            </div>
            
            <div class="divider"></div>
            
            <div class="security-note">
                <h4>🛡️ Dicas de Segurança</h4>
                <p>Mantenha sua conta segura: use senhas fortes e únicas, ative a verificação em duas etapas e sempre faça logout em dispositivos compartilhados. Nunca compartilhe suas credenciais com terceiros.</p>
            </div>
        </div>
        
        <div class="footer">
            <p>Este email foi enviado automaticamente pelo sistema de segurança da Bryandex Developer.</p>
            <p>Se você não reconhece esta atividade, aja imediatamente para proteger sua conta.</p>
            
            <div class="social-links">
                <a href="#">Central de Ajuda</a> |
                <a href="#">Política de Privacidade</a> |
                <a href="#">Termos de Uso</a>
            </div>
            
            <p style="margin-top: 20px; font-size: 11px; color: #bbb;">
                © 2025 Bryandex Developer. Todos os direitos reservados.<br>
                Este é um email automático, não responda a esta mensagem.
            </p>
        </div>
    </div>
</body>
</html>

    `
}

module.exports = {notificacao_login_html} 