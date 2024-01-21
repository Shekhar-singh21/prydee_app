import React from 'react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div style={{marginTop:'-2rem'}}>

        <p>Mobile No - 9076181862</p>
        <p style={{marginTop:'-8px'}}>Email - Shelarketan0045@gmail.com</p>
       
        </div>
        <div>
        <p>Location - 501 balaji apartment, above shree krishna hospital <br /> Near axis bank, Regency sarvam , Titwala (E) <br />
        Kalyan ,Thane, Maharashtra
        
        </p>
        <p>© 2024 Prydee. All rights reserved.</p>

        </div>
        <ul className={styles.links}>
          <li>
            <a href="#">
              <FaFacebook size={22} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={22} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub size={22} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
