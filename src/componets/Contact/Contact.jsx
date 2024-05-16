import React from 'react'
import ReactDOM from 'react-dom';
import { getImageURL } from '../../utils'
import styles from "./Contact.module.css"

// import icons
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
document.head.appendChild(fontAwesomeLink);



export default function Contact() {
  return (
<footer className={styles.container} id ="Contact">
<div className={styles.text}>
    {/* Header */}
  <h2>Contact</h2>  
  <p>Reach Out To Work With Me!</p>
</div>
{/* Setting up icons and linking them */}
<ul className={styles.links} >
    <li className={styles.link}>
    <a href="tel:9517868890">
        <i className="fa fa-phone" style={{ fontSize: '48px', color: 'white' }}></i>
        (951)-786-8890</a>
    </li>
    
    <li className={styles.link}>
    <a href='mailto:daniel@gmail.com'>
        <i className="fa fa-envelope" style={{ fontSize: '48px', color: 'white' }}></i>
        daniel@gmail.com  </a>
    </li>

    <li className={styles.link}>
    <a href="https://github.com/danny-garxia/">
        <img src={getImageURL("contact/githubIcon.png")} alt="GitHub Icon" />
        https://github.com/danny-garxia/
      </a>
      
    </li>
      

</ul>
</footer>  
)
}
