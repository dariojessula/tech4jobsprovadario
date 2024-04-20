import React from 'react';
import { Link } from 'react-router-dom';
//criar uma barra de navegação com Inicio e Sobre
// exportar
const Navbar = () => {
return (
<nav>
<ul>
<li><Link to="/">Inicio</Link></li>
<li><Link to="/sobre">Sobre</Link></li>
</ul>
</nav>
);};

export default Navbar;
