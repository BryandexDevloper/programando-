import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const porta = process.env.PORT || 3001;
const token = process.env.GITHUB_TOKEN;
const endpoint = "https://models.github.ai/inference";
const model = "gpt-4o-mini";

// ROTA CHAT com contexto
app.post("/chat", async (req, res) => {
  const { mensagens, contexto } = req.body;

  if (!mensagens || !Array.isArray(mensagens)) {
    return res.status(400).json({ erro: "Envie mensagens como array!" });
  }

  // Monta o histórico completo (contexto + nova mensagem)
  const historicoCompleto = [
    {
      role: "system",
      content: "Você é um assistente prestativo que ajuda profissionais e clientes a se conectarem."
    },
    ...(contexto || []), // contexto vindo do localStorage
    ...mensagens // nova mensagem do usuário
  ];

  try {
    const client = ModelClient(endpoint, new AzureKeyCredential(token));

    const response = await client.path("/chat/completions").post({
      body: {
        messages: historicoCompleto,
        temperature: 0.7,
        top_p: 1.0,
        max_tokens: 500,
        model
      }
    });

    if (isUnexpected(response)) {
      return res.status(500).json({ erro: "Erro na IA", detalhes: response.body });
    }

    const respostaIA = response.body.choices[0].message.content;
    res.json({ resposta: respostaIA });
  } catch (erro) {
    console.error("Erro ao chamar IA:", erro);
    res.status(500).json({ erro: "Erro ao processar solicitação" });
  }
});

app.listen(porta, () => console.log(`✅ Servidor rodando na porta ${porta}`));