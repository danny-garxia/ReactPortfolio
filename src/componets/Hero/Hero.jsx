import React from 'react'
import { getImageURL } from '../../utils'
import styles from "./hero.module.css"
export default function Hero() {
  return (
<section className={styles.container} id="Home">
<div className={styles.content} >
    <h1 className={styles.title}> 
        Danny's Tech Stack
    </h1>
</div>
<img src={getImageURL("hero/heroImage.png")}className={styles.heroImg}alt= "Danny's Profile Pic"/>
{/*add design to header */}
<div className={styles.topBlur}/>
<div className={styles.bottomBlur}/>


</section> 
)
}
