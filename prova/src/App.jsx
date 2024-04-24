import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio'; 
import Asteroid from './Asteroid'; 
import Sobre from './Sobre'; 
import Navbar from './Navbar'; 
import './App.css'; 

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
