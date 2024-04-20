import React from 'react';
import MinhaImagem from './assets/dv.jpeg';
//1 Criar const sobre
//2 Colocar titulo Sobre Dario Victor 
//3 Colocar Imagem
//4 Escreve um texto sobre mim 
// 5 exportar

//1
const Sobre = () => {
//2/3/4
  return (
  <div className="container">   
  <h1 className="titulo">Sobre Dario Victor</h1>
  <div className="corpo">
  <img src={MinhaImagem} alt="Dario Victor" className="imagem-perfil" />
  <p className="Sobre-texto">
   Meu nome é Dario e eu venho fazendo essa transição de carreira há 6 meses, onde eu deixei de ser gerente 
   administrativo de uma empresa de material médico para estudar infraestrutura na cloud. Enquanto eu estudava
   AWS, comecei o curso de FrontEnd na Tech4me e também comecei um curso de programação Solidity. Espero que em 
   breve comece a trabalhar na área!
  </p>
  </div>
  </div>
  );};
//5
export default Sobre;
