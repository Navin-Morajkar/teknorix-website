import React from 'react';
import styles from '../ImageCard/ImageCard.module.css'; // Import your CSS module here

const ImageCard = () => {
  return (
    <div className={styles.imageCard}>
      <img src="/images/image1.jpg" alt="Card Background" className={styles.backgroundImage} />
      <div className={styles.textContainer}> 
      <div className={styles.cardText}>
        <h2 >Lisbon Protugal</h2>  
        <h3 >Lisbon Protugal</h3> 
        <p >Rua Ramalho Ortigão, nº 8, 1º Dtº 1070 230 Lisboa</p>
        <p >sales@teknorix.com</p>  
        </div>
      </div>
    </div>
  );
};

export default ImageCard;