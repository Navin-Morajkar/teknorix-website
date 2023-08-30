import { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.sidebar} ${expanded ? styles.expanded : ''} ${scrolling ? styles.scrolling : ''}`}>
      <div className={`${styles.burgerIcon} ${scrolling ? styles.scrolling : ''}`} onClick={toggleExpanded}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.text} ${scrolling ? styles.scrolling : ''}`}>Some Text Here</div>
      <nav className={`${styles.nav} ${expanded ? styles.expanded : ''}`}>
        <a href="#about">ABOUT US</a>
        <a href="#services">SERVICES</a>
        <a href="#products">PRODUCTS</a>
        <a href="#careers">CAREERS</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </div>
  );
};

export default Sidebar;
