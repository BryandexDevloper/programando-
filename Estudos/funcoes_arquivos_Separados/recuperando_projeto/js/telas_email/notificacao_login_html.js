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
        
        .alert-title {
            font-size: 24px;
            color: #d63031;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        .alert-text {
            font-size: 16px;
            color: #666;
            margin-bottom: 30px;
            line-height: 1.5;
        }
        
        .login-details {
            background-color: #f8f9fa;
            border: 2px dashed #3483fa;
            border-radius: 12px;
            padding: 30px 20px;
            margin: 30px 0;
            text-align: left;
        }
        
        .details-title {
            font-size: 16px;
            color: #333;
            margin-bottom: 20px;
            text-align: center;
            font-weight: 600;
        }
        
        .detail-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #e9ecef;
        }
        
        .detail-item:last-child {
            border-bottom: none;
        }
        
        .detail-label {
            font-weight: 600;
            color: #555;
            font-size: 14px;
        }
        
        .detail-value {
            color: #333;
            font-size: 14px;
            text-align: right;
            max-width: 60%;
        }
        
        .security-actions {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
            text-align: left;
        }
        
        .security-actions h3 {
            color: #856404;
            margin-bottom: 15px;
            font-size: 16px;
        }
        
        .action-list {
            list-style: none;
            padding: 0;
        }
        
        .action-list li {
            color: #6c5500;
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
        }
        
        .action-list li::before {
            content: "•";
            color: #3483fa;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        
        .cta-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin: 30px 0;
            flex-wrap: wrap;
        }
        
        .cta-button {
            display: inline-block;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.3s ease;
            min-width: 140px;
            text-align: center;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #3483fa, #1e88e5);
            box-shadow: 0 4px 15px rgba(52, 131, 250, 0.3);
        }
        
        .btn-danger {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
        }
        
        .security-note {
            background-color: #e3f2fd;
            border-left: 4px solid #3483fa;
            padding: 20px;
            margin: 25px 0;
            text-align: left;
            border-radius: 0 8px 8px 0;
        }
        
        .security-note h4 {
            color: #1976d2;
            margin-bottom: 10px;
            font-size: 14px;
        }
        
        .security-note p {
            color: #1565c0;
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
        
        .status-badge {
            display: inline-block;
            background: #28a745;
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 600;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 0;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .alert-title {
                font-size: 20px;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .cta-button {
                width: 100%;
                max-width: 250px;
            }
            
            .detail-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
            }
            
            .detail-value {
                max-width: 100%;
                text-align: left;
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
                
                <div class="detail-item">
                    <span class="detail-label">📅 Data e Hora:</span>
                    <span class="detail-value">${hora}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">🌐 Endereço IP:</span>
                    <span class="detail-value">${ip}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">📱 Dispositivo:</span>
                    <span class="detail-value">${dispositivo} - ${sistema}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">🌍 Localização:</span>
                    <span class="detail-value">${cidade}, ${estado} - ${pais}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">🔍 Navegador:</span>
                    <span class="detail-value">${Navegador}</span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">✅ Status:</span>
                    <span class="detail-value"><span class="status-badge">Login Autorizado</span></span>
                </div>
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