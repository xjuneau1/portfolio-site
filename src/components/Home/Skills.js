import React from 'react';
import "./skills.css"
import skills from "../../data/skills.json"
function Skills() {
    const {frontend, backend, other, languages} = skills
    return ( 
        <div className="skills-container">
        <h2>Skills</h2>
        <div className="skill-cards-container">
          <div className="skill-card">
            <h3>Frontend Technologies</h3>
            <ul>
            {frontend.map((skill, index)=> <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className="skill-card">
            <h3>Backend Technologies</h3>
            <ul>
              {backend.map((skill, index)=><li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className='skill-card'>
            <h3>Programming Languages</h3>
            <ul>
              {languages.map((lang, index)=> <li key={index}>{lang}</li>)}
            </ul>
          </div>
          <div className='skill-card'>
            <h3>Libraries and Tools</h3>
            <ul>
              {other.map((skill, index)=> <li key={index}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
     );
}

export default Skills;