import React from 'react'
import styles from "./Programs.module.css"
import { getImageURL } from '../../utils'
export default function Programs() {
  return (
<section className={styles.container} id="Programs">
<h1 className={styles.title}> Programing Langues I Have Worked With</h1>

{/* Create row of programimg langaues Ive worked with */}
<div className={styles.row}> 
        <div className ={styles.coumn}>
            <img src={getImageURL("skills/react.png")}className={styles.aboutImg}alt= "React Logo Pic"/>
        </div>
        <div className ={styles.coumn}>
            <img src={getImageURL("skills/c++.png")}className={styles.aboutImg}alt= "c++ Logo Pic"/>
        </div>
        <div className ={styles.coumn}>
            <img src={getImageURL("skills/html.png")}className={styles.aboutImg}alt= "Html Logo Pic"/>
        </div>
        <div className ={styles.coumn}>
            <img src={getImageURL("skills/node.png")}className={styles.aboutImg}alt= "Node Logo Pic"/>
        </div>
        <div className ={styles.coumn}>
            <img src={getImageURL("skills/python.png")}className={styles.aboutImg}alt= "Python Logo Pic"/>
        </div>
      
    </div>
       
    </section> 
     )
}
