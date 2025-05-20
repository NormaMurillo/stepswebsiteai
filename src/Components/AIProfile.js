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
        nombre: profileData.nombre,
        carrera: profileData.carrera,
        cursos: profileData.cursos || [],
        grupos: profileData.grupos || "",
        proyectos: profileData.proyectos || [],
      });

      setSuggestions(result.data.suggestions);
    } catch (error) {
      console.error("Error al generar sugerencias:", error);
      setSuggestions("Hubo un error al generar recomendaciones.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Perfil del Usuario</h2>
      {profileData ? (
        <>
          <p><strong>Nombre:</strong> {profileData.nombre}</p>
          <p><strong>Carrera:</strong> {profileData.carrera}</p>
          <p><strong>Cursos:</strong> {(profileData.cursos || []).join(", ")}</p>
          <p><strong>Grupos:</strong> {profileData.grupos}</p>
          <p><strong>Proyectos:</strong> {(profileData.proyectos || []).join(", ")}</p>

          <button onClick={generateSuggestions} disabled={loading}>
            {loading ? "Generando..." : "Obtener recomendaciones de IA"}
          </button>

          {suggestions && (
            <div style={{ marginTop: "1rem" }}>
              <h3>Recomendaciones de IA</h3>
              <pre>{suggestions}</pre>
            </div>
          )}
        </>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  );
};

export default IAProfile;
