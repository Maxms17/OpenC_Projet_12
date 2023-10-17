import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

import LogoBleu from '../../assets/logo-bleu.png'

import Data from '../../data.json';

function Gallery() {

    return (
      <div className="Gallery">
        <div className='titre'>
          <div className='titre-bleu'>
            <h2>PORTFOLIO</h2>
          </div>
          <div className='titre-noir'>
            <h2>PORTFOLIO</h2>
          </div>
        </div>
        <div className='container-text-portfolio'>
          <div className='logo-bleu-droite'>
              <img src={LogoBleu} alt="Logo Bleu" className='image' />
          </div>
        </div>
        
        <div className="my-Gallery">
        {Data.map((data) => (
          <Link to={`/Projet/${data.id}`} className="carte" key={data.id}>
            <div className="image-container" style={{ backgroundImage: `url(${data.cover})` }}>
            </div>
            <p>{data.title}</p>
          </Link>
        ))}
        </div>
      </div>
    )
}

export default Gallery
