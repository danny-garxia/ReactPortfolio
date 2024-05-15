import React, { useState, useEffect } from 'react';
import styles from "./Projects.module.css"
import { getImageURL } from '../../utils'

export default function Projects({ username }) {
     
    // State to hold the fetched projects
    const [projects, setProjects] = useState([]);
  
    // Fetch projects from GitHub API when component mounts or username changes
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          // Fetch projects from GitHub API
          const response = await fetch(`https://api.github.com/users/${username}/repos`);
          if (!response.ok) {
            throw new Error('Failed to fetch GitHub projects');
          }
          const data = await response.json();
          setProjects(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchProjects();
    }, [username]);
  
    return (
        // Projects section
        <section id = 'Projects'>
      <div>
        {/* Projects title */}
      <h1 className={styles.title}> 
        GitHub Projects</h1>
        <div className={styles.projectGrid}>
        {/* Map through projects and display each project */}
            {projects.map(project => (
          <div key={project.id} className={styles.project}>
             {/* Project name */}
             <h3>{project.name}</h3>
            {/* Project description */}
            <p className={styles.decrip}>{project.description}</p>
            {/* Project language */}
            <div className={styles.language}>{project.language}</div>
            {/* Project owner avatar */}
                <img src={project.owner.avatar_url} alt="Project Owner" className={styles.avatar} />
                 {/* Link to view project on GitHub */}
                <a className={styles.gitLink} href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
        ))}
      </div>
    </div>

      </section>
    );
  }