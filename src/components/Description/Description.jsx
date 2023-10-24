import React from 'react';
import './Description.css';

import LogoBleu from '../../assets/profil-max.png'

import LogoLink from '../../assets/linkedin_icon.svg';
import LogoGit from '../../assets/github_icon.svg';
import LogoInsta from '../../assets/instagram_icon.svg';

function Description() {
    return (
        <div className='description'>
            <div className='image-intro'>
                <div className='contour-bleu'></div>
                <div className='contour-noir'></div>
                <img src={LogoBleu} alt="Maxime DREUX" className='image-profil' />
            </div>
            <div className='intro'>
                <h1>DREUX</h1>
                <h2>Maxime</h2>
                <h4>Intégrateur Web - Développeur Front-End</h4>
                <p>Passioné par le web, je suis devenu intégrateur web</p>
                <div className='lien-intro'>
                    <a className='a-link' href="https://linkedin.com/in/maxime-dreux">
                        <div className='linkedin'>
                            <img src={LogoLink} alt="Linkedin" className='image-res' />
                            LINKEDIN
                        </div>
                    </a>
                    <a className='a-git' href="https://github.com/Maxms17">
                        <div className='github'>
                            <img src={LogoGit} alt="Github" className='image-res' />
                            GITHUB
                        </div>
                    </a> 
                    <a className='a-insta' href="https://www.instagram.com/maxime.d7">
                        <div className='instagram'>
                            <img src={LogoInsta} alt="Instagram" className='image-res' />
                            INSTAGRAM
                        </div>
                    </a>  
                </div>
            </div>
        </div>
    )
}

export default Description