import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio'; // Renomeado de HomePage
import Asteroid from './Asteroid'; // Renomeado de AsteroidPage
import Sobre from './Sobre'; // Renomeado de AboutPage
import Navbar from './Navbar'; // Certifique-se de que este arquivo também esteja atualizado para usar os novos caminhos
import './App.css'; // Certifique-se de que o CSS está correto e carregado

// criar rotas entre as paginas 

function App() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Inicio />} />
<Route path="/asteroide/:id" element={<Asteroid />} />
<Route path="/sobre" element={<Sobre />} />
</Routes>
</Router>
);}

export default App;
