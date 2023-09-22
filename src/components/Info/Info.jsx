import React from 'react';

import './Info.css'

const Info = ({ projet }) => {

  return (
    <div className='conteneur'>

      <div className='info_gauche'>

        <div className='tilte'>
          <h1>{projet.title}</h1>
          <p>{projet.lien}</p>
        </div>
       
        <div className='tag'>
          {Array.isArray(projet.tags) ? (
            projet.tags.map((tag, index) => (
              <div className='tag_name' key={index}>
                <p>{tag}</p>
              </div>
            ))
          ) : (
            <div className='tag_name'>
              <p>{projet.tags}</p>
            </div>
          )}
        </div>

      </div>

      <div className='info_droite'>

        <div className='host'>
          <p>{projet.host.name}</p>
        </div>

      </div>

    </div>
  );
};

export default Info;