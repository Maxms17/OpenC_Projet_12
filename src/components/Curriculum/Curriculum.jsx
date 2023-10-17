import React from 'react';
import './Curriculum.css';

import LogoBleu from '../../assets/logo-bleu.png'

function Curriculum() {
    return (
        <div className='curriculum'>
            <div className='container-titre'>
                <div className='titre'>
                    <div className='titre-bleu'>
                        <h2>CURRICULUM VITAE</h2>
                    </div>
                    <div className='titre-noir'>
                        <h2>CURRICULUM VITAE</h2>
                    </div>
                </div>
                <div className='logo-bleu'>
                    <img src={LogoBleu} alt="Logo Bleu" className='image' />
                </div>
            </div>
            <div className='text'>
                <p>
                    text en dessous du cv
                </p>
            </div>
            <div className='container-bleu'>
                <h1>Maxime DREUX</h1>
                <h2>Je suis intégrateur web, developpeur front-end</h2>
                <p>Je suis a la recherche d'un poste, bonne connaissace de Reacy, Javascript et de la plupart des frameworks Web</p>
                <div>
                    <h3>GitHub</h3>
                    <h3>Linkedin</h3>
                    <h3>E-mail</h3>
                </div>
                <h2>Expérience</h2>
                <div>
                    <h2>Je suis intégrateur web, developpeur front-end</h2>
                    <p>Je suis a la recherche d'un poste, bonne connaissace de Reacy, Javascript et de la plupart des frameworks Web</p>
                </div>
                <div>
                    <h2>Je suis intégrateur web, developpeur front-end</h2>
                    <p>Je suis a la recherche d'un poste, bonne connaissace de Reacy, Javascript et de la plupart des frameworks Web</p>
                </div>
                <h2>Education</h2>
                <div>
                    <h2>Je suis intégrateur web, developpeur front-end</h2>
                    <p>Je suis a la recherche d'un poste, bonne connaissace de Reacy, Javascript et de la plupart des frameworks Web</p>
                </div>
                <h2>Compétences</h2>
                <div>
                    <h2>Je suis intégrateur web, developpeur front-end</h2>
                    <p>Je suis a la recherche d'un poste, bonne connaissace de Reacy, Javascript et de la plupart des frameworks Web</p>
                </div>
            </div>
        </div>
    )
}

export default Curriculum