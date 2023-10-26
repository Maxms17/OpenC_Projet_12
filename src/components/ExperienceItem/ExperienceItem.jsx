import React from 'react';

import './ExperienceItem.css'

function ExperienceItem({ experience }) {
    return (
        <div className="experience-item">
          <h3>{experience.entreprise}</h3>
          <p>{experience.titre}</p>
          <p>{experience.dateDebut} - {experience.dateFin}</p>
          <p>{experience.description}</p>
          <p>{experience.tag.join(', ')}</p>
        </div>
      );
}

export default ExperienceItem;
