/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Not in us - const {onRequest} = require("firebase-functions/v2/https");
// Not in us - const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const { Configuration, OpenAIApi } = require("openai");

// Configura tu clave de OpenAI
const configuration = new Configuration({
  apiKey: functions.config().openai.key, // o directamente: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

// Función de perfilamiento con IA
exports.generateProfileSuggestions = functions.https.onCall(async (data, context) => {
  const { nombre, carrera, cursos, grupos, proyectos } = data;

  if (!nombre || !carrera) {
    throw new functions.https.HttpsError("invalid-argument", "Faltan campos obligatorios.");
  }

  const prompt = `
Actúa como un orientador profesional. Analiza el siguiente perfil de un estudiante y sugiere 3 recomendaciones personalizadas para fortalecer su perfil profesional:

Nombre: ${nombre}
Carrera: ${carrera}
Cursos / Certificaciones: ${cursos}
Grupos / Clubes: ${grupos}
Proyectos: ${proyectos}

Redacta las recomendaciones de forma clara y motivadora.
`;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
      temperature: 0.7,
    });

    const suggestions = response.data.choices[0].message.content;
    return { suggestions };
  } catch (error) {
    console.error("Error con OpenAI:", error);
    throw new functions.https.HttpsError("internal", "Error al generar sugerencias.");
  }
});