import React from 'react';
import experienceData from '../../data_experience.json';
import ExperienceItem from "../../components/ExperienceItem/ExperienceItem"
import './Experience.css'

function Experience() {
    return (
        <div className="experience">
            {experienceData.map((experience) => (
                <ExperienceItem key={experience.id} experience={experience} />
            ))}
        </div>
    );
}

export default Experience;


  