import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCog, faTools} from '@fortawesome/free-solid-svg-icons';

import './Competence.css';

function Competence() {
  return (
    <div className='competence'>
      <h1>Mes Compétences</h1>

      <div className='End'>
        <div className='front-tilte'>
          <h2>FRONT-END</h2>
          <div className='front'>
            <div className='col-gauche'>
              <p>REACT</p>
            </div>
            <div className='col-milieu'>
              <p>HTML / CSS </p>
            </div>
            <div className='col-droite'>
              <p>JAVASCRIPT</p>
            </div>
          </div>
        </div>
        <div className='back-tilte'>
          <h2>BACK-END</h2>
          <div className='back'>
            <div className='col-gauche'>
              <p>NODE.JS</p>
            </div>
            <div className='col-milieu'>
              <p>MONGODB </p>
            </div>
            <div className='col-droite'>
              <p>MYSQL</p>
            </div>
          </div>
        </div>
      </div>

      <div className='trait-blanc'>

      </div>

      <div className='travaille'>
        <div className='Comp-icon'>
          <FontAwesomeIcon icon={faBriefcase} className="icone"/>
          <h2>J'ai pu travailler avec</h2>
        </div>
        <div className='Comp-icon'>
          <p>TYPESCRIPT, REACT, JQUERY, NEXT.JS</p>
        </div>
      </div>
      <div className='services'>
        <div className='Comp-icon'>
          <FontAwesomeIcon icon={faCog} className="icone"/>
          <h2>J'ai utilisé ces services</h2>
        </div>
        <div className='Comp-icon'>
          <p>PAYPAL</p>
        </div>
      </div>
      <div className='outils'>
        <div className='Comp-icon'>
          <FontAwesomeIcon icon={faTools} className="icone"/>
          <h2>Les outils que j'utilise</h2>
        </div>
        <div className='Comp-icon'>
          <p>GIT, GITHUB, SASS</p>
        </div>
      </div>

    </div>
  );
}

export default Competence;