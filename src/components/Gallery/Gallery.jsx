import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

import Data from '../../data.json';

function Gallery() {

    return (
      <div className="Gallery">
        <p>Portfolio</p>
        <div className="my-Gallery">
        {Data.map((data) => (
          <Link to={`/Projet/${data.id}`} className="carte" key={data.id}>
            <div className="image-container" style={{ backgroundImage: `url(${data.cover})` }}>
                <p>{data.title}</p>
            </div>
          </Link>
        ))}
        </div>
      </div>
    )
}

export default Gallery
