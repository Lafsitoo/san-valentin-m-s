import { useState, useEffect } from "react";
import App from "./App"; // Importamos App.jsx
import "./LoadingScreen.css"; // Asegúrate de tener el archivo CSS en la misma carpeta
import Heart from "./assets/heart.svg";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Después de 3 segundos, mostramos App
    }, 3000); // 3 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <img src={Heart} alt="heart" className="heart" />
        </div>
      ) : (
        <App /> // Mostrar el componente App después de 3 segundos
      )}
    </>
  );
};

export default LoadingScreen;
