import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

import LogoBleu from '../../assets/logo-bleu.png'

import Data from '../../data.json';

function Gallery() {

  // État pour gérer la catégorie de tri (par défaut, "Tous" pour afficher tous les projets)
  const [category, setCategory] = useState('Tous');

  // Fonction pour changer la catégorie de tri
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  // Filtrer les projets en fonction de la catégorie sélectionnée
  const filteredData = category === 'Tous' ? Data : Data.filter((project) => project.categorie === category);


    return (
      <div className="Gallery">
        <div className='titre'>
          <div className='titre-bleu-P'>
            <h2>PORTFOLIO</h2>
          </div>
          <div className='titre-noir-P'>
            <h2>PORTFOLIO</h2>
          </div>
        </div>
        <div className='container-text-portfolio'>
          <div className='logo-bleu-droite'>
              <img src={LogoBleu} alt="Logo Bleu" className='image-P' />
          </div>
        </div>

        <div className='trie'>
          <button onClick={() => handleCategoryChange('Tous')}>Tous</button>
          <button onClick={() => handleCategoryChange('HtmlCss')}>HTML & CSS</button>
          <button onClick={() => handleCategoryChange('JavaScript')}>JavaScript</button>
          <button onClick={() => handleCategoryChange('React')}>React</button>
          <button onClick={() => handleCategoryChange('Débogage')}>Débogage</button>
          <button onClick={() => handleCategoryChange('Référencement')}>Référencement</button>
        </div>

        <div className="my-Gallery">
          {filteredData.map((data) => (
            <Link to={`/Projet/${data.id}`} className="carte" key={data.id}>
              <div className="image-container" style={{ backgroundImage: `url(${data.cover})` }}></div>
              <div className="tilte-container">
                <p>{data.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
}

export default Gallery
