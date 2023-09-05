import { useState, useEffect } from 'react';
import styles from './SideBar.module.css';
import Image from 'next/image';
import { MenuOutlined } from '@ant-design/icons';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setScrolling(true);
        setNavbarBackground('white');
      } else {
        setScrolling(false);
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.sidebar} ${expanded ? styles.expanded : ''} ${scrolling ? styles.scrolling : ''}`}>
      <div style={{ backgroundColor: navbarBackground, height: '100%', boxShadow: '-5px 0 10px rgba(255, 0, 0, 0.1)' }}>
        <Image src="https://www.teknorix.com/wp-content/uploads/2019/01/teknorix-logo.svg" width="180" height="42" />

        <nav className={`${styles.nav} ${expanded ? styles.expanded : ''}`}>
          <div className={styles.hamburgerIcon} onClick={toggleExpanded}>
            <MenuOutlined />
          </div>
          {expanded && (
            <>
              <a href="#about">ABOUT US</a>
              <a href="#services">SERVICES</a>
              <a href="#products">PRODUCTS</a>
              <a href="#careers">CAREERS</a>
              <a href="#contact">CONTACT</a>
              <div className={styles.socialMediaContainer}></div>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
