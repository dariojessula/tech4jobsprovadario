import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//1 criar contate asteroid
//2 criar constante API_KEY
//3 Criar Parametros de asteroid e ID
//4 Colocar ID e Chave na URL 
//5 Criar uma opção de erro 
//6 Buscar data
//7 retorno com as respostas das perguntas da prova 
//8 exportar 

//1   
const Asteroid = () => {
//3
const { id } = useParams();
const [asteroid, setAsteroid] = useState(null);
//2
const API_KEY = "GDf6R16niyFcnCxNnJcKVOExhIUiS80zcxpCPmnC";
//6
  useEffect(() => {
  async function fetchData() {
 try {
 const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`);
 const data = await res.json();
  setAsteroid(data);
//5  
} catch (error) {
  console.error("Erro ao buscar os dados do asteroide");
  }}

  fetchData();
  }, [id]);

  if (!asteroid) {
    return <p>Carregando...</p>;
  }
//7
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
//8
export default Asteroid;
