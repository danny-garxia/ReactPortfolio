import React from 'react'
import styles from "./About.module.css"
import { getImageURL } from '../../utils'
export default function About() {
  return (
<section className={styles.container} id="About">
<img src={getImageURL("about/Presentation.jpg")}className={styles.aboutImg}alt= "Danny's Goo Pic"/>
    <div className={styles.content} >
            
         {/* Titke */}

       <h1 className={styles.title}> About Danny Garcia</h1>
          
          {/* Description */}
        <p className={styles.aboutDesc}>
          I Am A Former Google Intern With A Solid Foundation In Computer Science, 
          Having Earned My Associate's Degree From Mt. San Jacinto Community College And
          My Bachelor's Degree From California State University, Fullerton. My Academic Journey 
          Has Equipped Me With Comprehensive Knowledge In Various Areas, Including Cybersecurity,
          Computer Networking, Network Security, Web Development, And App Development. This Diverse 
          Skill Set Has Not Only Made Me A Proficient Full-Stack Developer But Also Provided Me With Essential
          Expertise In Fundamental Security Practices. I Am Passionate About Leveraging Technology To Create Innovative
          Solutions And Continuously Expanding My Technical Abilities.
        </p>
    </div>
    
</section> 
  )
}
