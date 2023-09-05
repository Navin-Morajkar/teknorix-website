import { useState, useEffect } from 'react';
import styles from './SideBar.module.css';  
import { Button, Drawer, Space } from 'antd'; 
import { MenuOutlined } from '@ant-design/icons';
// import SocialMedia from '../socialMedia/socialMedia';
import Image from 'next/image'; 
const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showAboutHeading, setShowAboutHeading] = useState(true); // State for controlling visibility of the heading
  const [navbarBackground, setNavbarBackground] = useState('transparent'); // State for navbar background color 
  const [showAboutList, setShowAboutList] = useState(false); // State for controlling the visibility of the list 
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDefaultDrawer = () => {
    setSize('default');
    setOpen(true);
  };
  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
      
     <div className={styles.imageAndButtonContainer}>
          <div className={styles.imageContainer}>
            <Image src="https://www.teknorix.com/wp-content/uploads/2019/01/teknorix-logo.svg" width="180" height="42" />
          </div>
          <div className={styles.buttonContainer}>
            <Space>
              {/* Use the hamburger icon as a button */}
              <Button type="primary" onClick={showLargeDrawer}>
                <MenuOutlined />
              </Button>
            </Space>
          </div>
        </div>
      
      
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
         
          <Drawer
  title={` `} 

  placement="left"
  size={size}
  width={1250}
  onClose={onClose}
  open={open}
  closeIcon={null} // Remove the default close button
  extra={
    <Space>
      <Button onClick={onClose}>
        X
      </Button>
    </Space>
  }
>

</Drawer>
      </nav>
    </div>
    </div>
  );
};

export default Sidebar;
