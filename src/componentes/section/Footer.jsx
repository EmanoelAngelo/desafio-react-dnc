import { FaInstagram, FaLinkedin, FaGithub, FaFigma } from "react-icons/fa";
import styles from './Footer.module.css';

import React from 'react';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.contact}>
                <h1>Meu contato:</h1>
                <p>96 9 9199-5236</p>
            </div>
            <div className={styles.email}>
                <h1>Email:</h1>
                <p>emanumacapa@gmail.com</p>
            </div>
            <ul className={styles.socialLinks}>
            <li ><a href='https://www.linkedin.com/in/emanoelangelo/'><FaGithub size={45} className={styles.github}/></a></li>

                <li><a href='https://www.linkedin.com/in/emanoelangelo/'><FaLinkedin size={50} className={styles.linkedin}/></a></li>
                <li ><a href='https://www.figma.com'><FaFigma size={45} className={styles.figma}/></a></li>
            </ul>
        </div>
    );
}

export default Footer;
