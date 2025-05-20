const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { OpenAI } = require("openai");
require("dotenv").config();

admin.initializeApp();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.getAIProfile = functions.https.onRequest(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "No se proporcionó un prompt." });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4", // o "gpt-3.5-turbo"
      messages: [
        { role: "system", content: "Eres un orientador académico experto en transformación digital." },
        { role: "user", content: prompt },
      ],
    });

    const result = completion.choices[0].message.content;

    res.status(200).json({ result });
  } catch (error) {
    console.error("❌ Error al generar respuesta:", error.message || error);
    res.status(500).json({ error: "Error al generar respuesta." });
  }
});