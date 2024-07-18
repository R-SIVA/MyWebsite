import { useState,useEffect } from 'react'
import {  getSkills } from '../api';
function Skills() {
  
    const [examples, setExamples] = useState([]);

    useEffect(() => {
        getSkills().then(response => {
            setExamples(response.data);
        });
    }, []);

  return (
    <div id="section-skills">
      <h2>Skills</h2>
      <ul>
                {examples.map(example => (
                    <li key={example.id}>{example.skill}: {example.domain.domain_name}</li>
                ))}
            </ul>
    </div>
  )
}

export default Skills;
