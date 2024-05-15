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
        <p className={styles.aboutDesc}>I Am A Former Google Intern, That Recivced My Assoiciates In Computer Science At MT.
         San Jacinto Community College And My Bachleors In Computer Science From California State Fullerton University. 
         Since A Child I've Always Been Intrested In Joining The Tech Industry. I Have Experience As A Full Stack Developer, 
         With Main Intrests In APP/WEB Development. 
        </p>
    </div>
    
</section> 
  )
}
