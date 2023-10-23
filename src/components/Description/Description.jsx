import React from 'react';
import './Description.css';

import LogoBleu from '../../assets/profil-max.png'

function Description() {
    return (
        <div className='description'>
            <div className='image-intro'>
                <div className='contour-bleu'></div>
                <img src={LogoBleu} alt="Maxime DREUX" className='image-profil' />
                <div className='contour-noir'></div>
            </div>
            <div className='intro'>
                <h1>DREUX</h1>
                <h2>Maxime</h2>
                <h4>Intégrateur Web - Développeur Front-End</h4>
                <p>Passioné par le web, je suis devenu intégrateur web</p>
                <div className='lien-intro'>
                    <div className='linkedin'>
                        <a href="https://linkedin.com/in/maxime-dreux">LINKEDIN</a>
                    </div>
                    <div className='github'>
                        <a href="https://github.com/Maxms17">GITHUB</a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description