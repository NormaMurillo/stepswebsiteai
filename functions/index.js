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

const {onCall} = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
const {Configuration, OpenAIApi} = require("openai");

// ✅ Usamos functions.config() en lugar de process.env
const configuration = new Configuration({
  apiKey: functions.config().openai.key,
});

const openai = new OpenAIApi(configuration);

exports.generateProfileSuggestions = onCall(async (request) => {
  const {nombre, carrera, cursos, grupos, proyectos} = request.data;

  const prompt = `
Eres un asistente de orientación profesional. Basado en el siguiente perfil:

- Nombre: ${nombre}
- Carrera: ${carrera}
- Cursos/certificaciones: ${cursos.join(", ")}
- Grupos estudiantiles: ${grupos}
- Proyectos: ${proyectos.join(", ")}

Sugiere tres rutas profesionales posibles y una recomendación adicional 
personalizada.
`;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: prompt}],
    });

    return {
      suggestions: completion.data.choices[0].message.content,
    };
  } catch (error) {
    console.error("Error calling OpenAI:", error.message);
    throw new functions.https.HttpsError(
        "internal",
        "OpenAI call failed, try again later.",
    );
  }
});

