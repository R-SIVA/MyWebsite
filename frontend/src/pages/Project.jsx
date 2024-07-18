import { useState,useEffect } from 'react'
import { getSkills } from '../api';
function Projects() {
  
    const [examples, setExamples] = useState([]);

    useEffect(() => {
        getSkills().then(response => {
            setExamples(response.data);
        });
    }, []);

  return (
    <div id="section-projects">
      <h2>Projects</h2>
      <ul>
        <h3>Web Development</h3>
        <li>Timesheet</li>
        <li>Portfolio</li>
        
      </ul>
      <h2>Examples</h2>
      <ul>
                {examples.map(example => (
                    <li key={example.id}>{example.name}: {example.description}</li>
                ))}
            </ul>
    </div>
  )
}

export default Projects;
