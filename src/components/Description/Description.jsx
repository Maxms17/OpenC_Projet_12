import React from 'react';
import './Description.css';

import LogoBleu from '../../assets/logo-bleu.png'

function Description() {
    return (
        <div className='description'>
            <div className='intro'>
                <h1>DREUX</h1>
                <h2>Maxime</h2>
                <h4>Intégrateur Web - Développeur Front-End</h4>
                <p>Passioné par le web, je suis devenu intégrateur web</p>
                <div className='lien-intro'>
                    <div className='linkedin'>
                        <p>LinkedIn</p>
                    </div>
                    <div className='github'>
                        <p>GITHUB</p>  
                    </div>
                </div>
            </div>
            <div className='logo-intro'>
                <img src={LogoBleu} alt="Logo Bleu" className='image-intro' />
            </div>
        </div>
    )
}

export default Description