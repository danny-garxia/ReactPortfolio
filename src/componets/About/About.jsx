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
         I am a former Google intern with a strong foundation in computer science, holding an 
          associate's degree from Mt. San Jacinto Community College 
          and a bachelor's degree from California State University, Fullerton. 
          My academic journey has provided me with comprehensive knowledge in cybersecurity, 
          computer networking, network security, web development, and app development. 
          This diverse skill set has shaped me into a proficient full-stack developer while
          equipping me with essential expertise in fundamental security practices.
          I am passionate about leveraging technology to develop innovative solutions and 
          continuously expanding my technical abilities.
        </p>
    </div>
    
</section> 
  )
}
