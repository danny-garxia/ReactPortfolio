import React, {useState} from 'react';
import { getImageURL } from '../../utils';

import styles from "./Navbar.module.css";


export default function Navbar() {
  return (
  <nav className={styles.navbar}>
    <a className ={styles.title} href="/"> Portfolio</a>
    <div className={styles.menu}>

        <img className={styles.menuBtn} src={getImageURL("nav/menuIcon.png")}
        alt ="menu-button"
        />

        <ul className={styles.menuItems}>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contat</a>
            </li>
        </ul>
    </div>
   </nav>
   );
};
