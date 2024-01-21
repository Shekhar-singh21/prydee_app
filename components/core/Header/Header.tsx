import Link from 'next/link';
import React from 'react';

import DesktopMenu from '../DesktopMenu';
import MobileMenu from '../MobileMenu';

import styles from './Header.module.css';
import Image from 'next/image'; 
import img1 from '../../../public/logo_pd.png'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.headerWrapper}>
          <Link href="/">
            <a className={styles.siteTitle}>
              <p>Prydee</p>
              
                {/* <Image 
                  src={img1} 
                  className={styles.logo}  
                  alt="not found" 
                  width={100} 
                  height={50} 
                  layout="responsive"
                /> */}
            </a>
          </Link>
          <div className={styles.headerRight}>
            <DesktopMenu />
            <MobileMenu />
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
