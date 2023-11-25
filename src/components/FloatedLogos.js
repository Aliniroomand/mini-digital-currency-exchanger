import React from 'react';
//images
 import coin1 from '../images/coin1.png'
 import coin2 from '../images/coin2.png'
 import coin3 from '../images/coin3.png'
 import coin4 from '../images/coin4.png'
 import coin5 from '../images/coin5.png'
 //style
 import styles from '../styles/FloatedLogos.module.css'
const FloatedLogos = () => {
    return (
        <div className={styles.container}>
            <img className={styles.coin1} src={coin1} alt="coinLogo"/>
            <img className={styles.coin2} src={coin2} alt="coinLogo"/>
            <img className={styles.coin3} src={coin3} alt="coinLogo"/>
            <img className={styles.coin4} src={coin4} alt="coinLogo"/>
            <img className={styles.coin5} src={coin5} alt="coinLogo"/>
            <img className={styles.coin12} src={coin1} alt="coinLogo"/>
            <img className={styles.coin22} src={coin2} alt="coinLogo"/>
            <img className={styles.coin32} src={coin3} alt="coinLogo"/>
            <img className={styles.coin42} src={coin4} alt="coinLogo"/>
            <img className={styles.coin52} src={coin5} alt="coinLogo"/>

        </div>
    );
};

export default FloatedLogos;