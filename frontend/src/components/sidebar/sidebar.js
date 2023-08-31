import { useState, useEffect } from 'react';
import styles from './sidebar.module.css'; 
// import SocialMedia from '../socialMedia/socialMedia';
import Image from 'next/image'; 
const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showAboutHeading, setShowAboutHeading] = useState(true); // State for controlling visibility of the heading
  const [navbarBackground, setNavbarBackground] = useState('transparent'); // State for navbar background color 
  const [showAboutList, setShowAboutList] = useState(false); // State for controlling the visibility of the list
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setScrolling(true);
        setShowAboutList(true);
        setShowAboutHeading(false);
        setNavbarBackground('white');
      } else {
        setScrolling(false);
        setShowAboutList(false);
        setShowAboutHeading(true);
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
    <div className={`${styles.sidebar} ${expanded ? styles.expanded : ''} ${scrolling ? styles.scrolling : ''}`} >
      {/* <div className={`${styles.burgerIcon} ${scrolling ? styles.scrolling : ''}`} onClick={toggleExpanded}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>  */} 
     <div style={{ backgroundColor: navbarBackground, height: '100%', boxShadow: '-5px 0 10px rgba(255, 0, 0, 0.1)' }}>
      
        <Image src="https://www.teknorix.com/wp-content/uploads/2019/01/teknorix-logo.svg" width="180" height="42"/>
      
      
      <div className={`${styles.text} ${scrolling ? styles.scrolling : ''}`}>Some Text Here</div>
      <nav className={`${styles.nav} ${expanded ? styles.expanded : ''}`} > 
    
    
      <a href="#about">ABOUT US</a>
          {showAboutList && (
            <ul>
              <li>About Us</li>
              <li>Process</li>
              <li>Technologies</li>
              <li>Our Works</li>
            </ul>
          )}
        
        <a href="#services">SERVICES</a>
        <a href="#products">PRODUCTS</a>
        <a href="#careers">CAREERS</a>
        <a href="#contact">CONTACT</a> 
        {showAboutHeading && <h1>ABOUT US</h1>}
        <div className={styles.socialMediaContainer}>
            {/* <SocialMedia /> */}
          </div>
      </nav>
    </div>
    </div>
  );
};

export default Sidebar;
