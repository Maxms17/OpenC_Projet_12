import React from 'react';

function ExperienceItem({ experience }) {
    return (
        <div className="experience-item">
            <h3>{experience.entreprise}</h3>
            <p>{experience.poste}</p>
            <p>{experience.dateDebut} - {experience.dateFin}</p>
            <p>{experience.description}</p>
        </div>
    );
}

export default ExperienceItem;