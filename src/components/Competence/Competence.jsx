import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCog, faTools} from '@fortawesome/free-solid-svg-icons';

import './Competence.css';

import LogoReact from '../../assets/react.svg';
import LogoHtml from '../../assets/html.svg';
import LogoCss from '../../assets/css.svg';
import LogoJS from '../../assets/javascript.svg';

import LogoNode from '../../assets/nodejs.svg';
import LogoSql from '../../assets/mysql.svg';
import LogoMongo from '../../assets/mongodb.svg';

import LogoPaypal from '../../assets/paypal.svg';
import LogoGit from '../../assets/git.svg';
import LogoGithub from '../../assets/github_icon.svg';

import LogoJquery from '../../assets/Jquery.svg';
import LogoType from '../../assets/Typescript.svg';
import LogoSass from '../../assets/Sass.svg';
import LogoNext from '../../assets/Next.js.svg';

function Competence() {
  return (
    <div className='competence'>
      <h1>Mes Compétences</h1>

      <div className='End'>
        <div className='front-tilte'>
          <h2>FRONT-END</h2>
          <div className='front'>
            <div className='col-gauche'>
              <div className='contenaire-Comp'>
                  <img src={LogoReact} alt="Logo React" className='image-Comp-end' />
                  <p>REACT</p>
              </div>
            </div>
            <div className='col-milieu'>
              <div className='contenaire-Comp'>
                    <img src={LogoHtml} alt="Logo HTML" className='image-Comp-end' />
                    <p>HTML</p>
              </div>
              <div className='contenaire-Comp'>
                    <img src={LogoCss} alt="Logo CSS" className='image-Comp-end' />
                    <p>CSS</p>
              </div>
            </div>
            <div className='col-droite'>
              <div className='contenaire-Comp'>
                    <img src={LogoJS} alt="Logo JavaScript" className='image-Comp-end' />
                    <p>JAVASCRIPT</p>
              </div>
            </div>
          </div>
        </div>
        <div className='back-tilte'>
          <h2>BACK-END</h2>
          <div className='back'>
            <div className='col-gauche'>
              <div className='contenaire-Comp'>
                  <img src={LogoNode} alt="Logo Node.js" className='image-Comp-end' />
                  <p>NODE.JS</p>
              </div>
            </div>
            <div className='col-milieu'>
              <div className='contenaire-Comp'>
                  <img src={LogoMongo} alt="Logo MongoDB" className='image-Comp-end' />
                  <p>MONGODB </p>
              </div>
            </div>
            <div className='col-droite'>
              <div className='contenaire-Comp'>
                <img src={LogoSql} alt="Logo MySQL" className='image-Comp-end' />
                <p>MYSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='trait-blanc'>

      </div>

      <div className='travaille'>
        <div className='Comp-icon-tilte'>
          <FontAwesomeIcon icon={faBriefcase} className="icone"/>
          <h2>J'ai pu travailler avec</h2>
        </div>
        <div className='Comp-icon'>
          <div className='contenaire-Comp'>
            <img src={LogoType} alt="Logo TypeScript" className='image-Comp' />
            <p>TYPESCRIPT</p>
          </div>
          <div className='contenaire-Comp'>
            <img src={LogoJquery} alt="Logo Jquery" className='image-Comp' />
            <p>JQUERY</p>
          </div>
          <div className='contenaire-Comp'>
            <img src={LogoNext} alt="Logo Next.js" className='image-Comp' />
            <p>NEXT.JS</p>
          </div>
          <div className='contenaire-Comp'>
            <img src={LogoSass} alt="Logo Sass" className='image-Comp' />
            <p>SASS</p>
          </div> 
        </div>
      </div>
      <div className='services'>
        <div className='Comp-icon-tilte'>
          <FontAwesomeIcon icon={faCog} className="icone"/>
          <h2>J'ai utilisé ces services</h2>
        </div>
        <div className='Comp-icon'>
          <div className='contenaire-Comp'>
            <img src={LogoPaypal} alt="Logo Paypal" className='image-Comp' />
            <p>PAYPAL</p>
          </div>
        </div>
      </div>
      <div className='outils'>
        <div className='Comp-icon-tilte'>
          <FontAwesomeIcon icon={faTools} className="icone"/>
          <h2>Les outils que j'utilise</h2>
        </div>
        <div className='Comp-icon'>
          <div className='contenaire-Comp'>
            <img src={LogoGit} alt="Logo Git" className='image-Comp' />
            <p>GIT</p>
          </div>
          <div className='contenaire-Comp'>
            <img src={LogoGithub} alt="Logo GitHub" className='image-Comp' />
            <p>GITHUB</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Competence;