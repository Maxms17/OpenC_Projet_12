import React from 'react';
import experienceData from '../../data_experience.json';
import ExperienceItem from "../../components/ExperienceItem/ExperienceItem";

import './Experience.css';

function Experience() {
    const cssClasses = ['p-experience', 'i-experience'];

    return (
        <div className="experience-title">
            <h2>Mes Expériences</h2>
            <div className="experience">
                {experienceData.map((experience, index) => (
                    <div key={experience.id} className={cssClasses[index % cssClasses.length]}>
                        <ExperienceItem experience={experience} />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Experience;
