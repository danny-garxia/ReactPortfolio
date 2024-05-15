import React, {useState} from 'react';
import { getImageURL } from '../../utils';

import styles from "./Navbar.module.css";


export default function Navbar() {
    const [openNav, setOpenNav] = useState('');

  return (
    <nav className={styles.navbar}>
    {/* Display the title */}
    {window.innerWidth > 830 && (

    <h1 className={styles.title}> Welcome </h1>
    )}
    
    <div className={styles.menu}>
        {/* Conditionally render the image button based on screen width */}
        {window.innerWidth < 830 && (
            <img
                className={styles.menuBtn}
                src={openNav ? getImageURL("nav/closeIcon.png") : getImageURL("nav/menuIcon.png")}
                alt="menu-button"
                onClick={() => setOpenNav(!openNav)}
            />
        )}

        {/* Menu items */}
        <ul className={`${styles.menuItems} ${openNav && styles.openNav}`} onClick={() => setOpenNav(false)}>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
    </div>
</nav>
);
};


