import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
   
const Asteroid = () => {

const { id } = useParams();
const [asteroid, setAsteroid] = useState(null);

const API_KEY = "GDf6R16niyFcnCxNnJcKVOExhIUiS80zcxpCPmnC";

  useEffect(() => {
  async function fetchData() {
 try {
 const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`);
 const data = await res.json();
  setAsteroid(data);
  
} catch (error) {
  console.error("Erro ao buscar os dados do asteroide");
  }}

  fetchData();
  }, [id]);

  if (!asteroid) {
    return <p>Carregando...</p>;
  }

  return (
 <div className="container">
 <h1 className="titulo">Detalhes do Asteroide</h1>
 <div className="corpo">
 <h2 className="card-title">{asteroid.name}</h2>
 <p className="card-text"> Potencialmente Perigoso: {asteroid.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}</p>
 <p className="card-text">Diâmetro Máximo Estimado: {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</p>
 <p className="card-text"> Velocidade Relativa: {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>
 <p className="card-text">Magnitude Absoluta: {asteroid.absolute_magnitude_h}</p>
  </div></div>
  );};

export default Asteroid;
