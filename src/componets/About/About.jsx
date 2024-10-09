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
        <p className={styles.aboutDesc}>I Am A Former Google Intern. I Received My Associate's In Computer Science At MT.
         San Jacinto Community College And My Bachelor's In Computer Science From California State Fullerton University. 
          I've Completed Cybersecurity Courses, Web Development And App Development coursed. Giving Me Experience As A Full
          Stack Developer. 
        </p>
    </div>
    
</section> 
  )
}
