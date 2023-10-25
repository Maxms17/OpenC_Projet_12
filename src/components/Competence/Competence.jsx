import React from 'react';

import './Competence.css';

function Competence() {
  return (
    <div className='competence'>
      <h1>Mes Compétences</h1>
      <div className='End'>
        <div className='front'>
          <h2>FRONT-END</h2>
          <p>HTML 5, CSS 3, JAVASCRIPT</p>
        </div>
        <div className='back'>
          <h2>BACK-END</h2>
          <p>NODE.JS, MONGODB, MYSQL</p>
        </div>
      </div>
      <div className='travaille'>
        <h2>J'ai pu travailler avec</h2>
        <p>TYPESCRIPT, REACT, JQUERY, NEXT.JS</p>
      </div>
      <div className='services'>
        <h2>J'ai utilisé ces services</h2>
        <p>PAYPAL</p>
      </div>
      <div className='outils'>
        <h2>Les outils que j'utilise</h2>
        <p>GIT, GITHUB, SASS</p>
      </div>
    </div>
  );
}

export default Competence;