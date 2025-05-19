import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// Convierte un string CSV en array, descartando "NA" o valores vacíos
function parseCsvField(field) {
  if (typeof field !== "string") return [];
  return field
    .split(",")
    .map(s => s.trim())
    .filter(s => s && s.toUpperCase() !== "NA");
}

function analyzeOneProfile(data) {
  const suggestions = [];

  // Normaliza los campos a array
  const certs = parseCsvField(data.Certifications);
  const projects = parseCsvField(data.Projects);
  const clubs = parseCsvField(data["Student_Groups/Clubs"]);

  const studyArea = (data["Study Area"] || "").toLowerCase();
  const career = (data.Career || "").toLowerCase();

  // Sugerencia 1: Cloud Engineer
  if (
    certs.some(c => c.toLowerCase().includes("azure")) ||
    certs.some(c => c.toLowerCase().includes("cloud")) ||
    studyArea.includes("cloud")
  ) {
    suggestions.push({
      title: "Cloud Engineer",
      description:
        "Basado en tus certificaciones de Azure/Cloud y tu área de estudio.",
    });
  }

  // Sugerencia 2: Data Scientist
  if (
    certs.some(c => c.toLowerCase().includes("data")) ||
    projects.some(p => p.toLowerCase().includes("datathon")) ||
    studyArea.includes("data")
  ) {
    suggestions.push({
      title: "Data Scientist",
      description:
        "Tu experiencia en Data Science y participación en Datathons te califica.",
    });
  }

  // Sugerencia 3: Project Manager
  if (
    clubs.some(club => club.toLowerCase().includes("presidencia")) ||
    career.includes("transformación digital") ||
    career.includes("itd")
  ) {
    suggestions.push({
      title: "Project Manager",
      description:
        "Tienes experiencia en grupos estudiantiles/proyectos, ideal para gestión.",
    });
  }

  // Si no hay sugerencias, devuelve un placeholder
  if (suggestions.length === 0) {
    suggestions.push({
      title: "Explora más opciones",
      description:
        "No se encontraron coincidencias fuertes; podrías indagar áreas nuevas.",
    });
  }

  return suggestions;
}

export async function fetchAndAnalyzeProfiles() {
  const snap = await getDocs(collection(db, "users"));
  const results = snap.docs.map(doc => {
    const data = doc.data();
    return {
      nombre: data.userName || data.Nombre || "Usuario",
      yearGraduated: data.yearGraduated || data.anioEgreso || "N/A",
      career: data.Career || "N/A",
      // sugerencias IA
      suggestions: analyzeOneProfile(data),
    };
  });
  return results;
}
