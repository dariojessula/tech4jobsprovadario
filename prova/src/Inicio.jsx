import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//1 criar a constante de inicio. 
//2 Depois criar a data obedecendo o formato da API yyyy-mmm-dd
//3 Requisão da A API precisa ter no URL a data de hoje e minha chave 
//4 Criar a chave API 
//5 Pegar o retorno do que pede na prova e colocar em card. 
//6 exportar 

//1
const Inicio = () => {
  const [asteroids, setAsteroids] = useState([]);
  //4
  const API_KEY = "GDf6R16niyFcnCxNnJcKVOExhIUiS80zcxpCPmnC";

  useEffect(() => {
  //2
    const DataHoje = new Date().toISOString().slice(0, 10); 

    async function fetchData() {
    //3
      const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${DataHoje}&end_date=${DataHoje}&api_key=${API_KEY}`);
    const data = await res.json();
    setAsteroids(data.near_earth_objects[DataHoje]); 
    }

    fetchData();
  }, []);

  //5
  return (
    <div className="container">
    <h1 className="titulo">Asteroides Próximos da Terra</h1>
    <div className="corpo">
    {asteroids.map(asteroid => (
    <div key={asteroid.id} className="card">
    <h2 className="card-title">{asteroid.name}</h2>
    <p className={`card-text ${asteroid.is_potentially_hazardous_asteroid ? 'card-danger' : 'card-success'}`}>
    {asteroid.is_potentially_hazardous_asteroid ? 'Perigoso: Sim' : 'Perigoso: Não'}
    </p>
    <p className="card-text">Diâmetro Máximo: {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</p>
    <Link to={`/asteroide/${asteroid.id}`} className="card-link">Ver detalhes</Link>
    </div>
    ))}
    </div>
    </div>
  );};
//6
export default Inicio;
