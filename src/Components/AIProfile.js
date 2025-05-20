import React, { useEffect, useState } from "react";
import { functions } from "../firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";

const IAProfile = ({ userId }) => {
  const [profileData, setProfileData] = useState(null);
  const [suggestions, setSuggestions] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 1. Cargar datos del usuario desde Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      const db = getFirestore();
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setProfileData(userSnap.data());
      } else {
        console.log("No se encontró el usuario");
      }
    };

    if (userId) fetchUserData();
  }, [userId]);

  // 🔹 2. Llamar a la función de OpenAI
  const generateSuggestions = async () => {
    if (!profileData) return;

    setLoading(true);
    try {
      const generateProfileSuggestions = httpsCallable(functions, "generateProfileSuggestions");
      const result = await generateProfileSuggestions({
        nombre: profileData.userName || "Usuario",
        carrera: profileData.Career || "",
        cursos: profileData.Certifications || [],
        grupos: profileData["Student_Groups/Clubs"] || "",
        proyectos: profileData.Projects || [],
      });

      setSuggestions(result.data.suggestions);
    } catch (error) {
      console.error("Error al generar sugerencias:", error);
      setSuggestions("Hubo un error al generar recomendaciones.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 3. Renderizado
  return (
    <div>
      <h2>Perfil del Usuario</h2>
      {!profileData ? (
        <p>Cargando perfil...</p>
      ) : (
        <>
          <pre>{JSON.stringify(profileData, null, 2)}</pre>
          <button onClick={generateSuggestions} disabled={loading}>
            {loading ? "Generando..." : "Obtener recomendaciones con IA"}
          </button>
          {suggestions && (
            <div>
              <h3>Recomendaciones:</h3>
              <p>{suggestions}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default IAProfile;