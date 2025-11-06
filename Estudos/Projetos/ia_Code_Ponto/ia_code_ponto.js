import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // aceita JSON no body

const porta = process.env.PORT || 3001;
const token = process.env.GITHUB_TOKEN;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1-mini";

// ROTA CHAT
app.post("/chat", async (req, res) => {
  const mensagens = req.body.mensagens;

  if (!mensagens || !Array.isArray(mensagens)) {
    return res.status(400).json({ erro: "Envie mensagens como array!" });
  }

  const client = ModelClient(endpoint, new AzureKeyCredential(token));

  const response = await client.path("/chat/completions").post({
    body: {
      messages: mensagens,
      temperature: 1.0,
      top_p: 1.0,
      model
    }
  });

  if (isUnexpected(response)) {
    return res.status(500).json({ erro: "Erro na IA", detalhes: response.body });
  }

  const respostaIA = response.body.choices[0].message.content;
  res.json({ resposta: respostaIA });
});

app.listen(porta, () => console.log(`✅ Servidor rodando em ${porta}`));
