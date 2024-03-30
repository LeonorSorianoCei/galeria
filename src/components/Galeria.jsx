import React, { useState, useEffect } from 'react';
import './Galeria.css';

const Galeria = () => {
  const [fotos, setFotos] = useState([]);
  const [error, setError] = useState(null);

  
const { VITE_BACKEND_URL } = import.meta.env;


  useEffect(() => {
    const obtenerFotos = async () => {
      try {
        const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${VITE_BACKEND_URL}&tags=naturaleza&format=json&nojsoncallback=1`);
        if (!response.ok) {
          throw new Error('Error al obtener las fotos');
        }
        const data = await response.json();
        setFotos(data.photos.photo.slice(0, 10)); 
      } catch (error) {
        setError(error.message);
      }
    };

    obtenerFotos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="galeria-container">
      <h1 className="galeria-title">Galería de Fotos de la Naturaleza</h1>
      <div className="fotos-container">
        {fotos.map((foto) => (
          <img
            key={foto.id}
            src={`https://farm${foto.farm}.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}.jpg`}
            alt={foto.title}
            className="foto-item"
          />
        ))}
      </div>
    </div>
  );
};

export default Galeria;