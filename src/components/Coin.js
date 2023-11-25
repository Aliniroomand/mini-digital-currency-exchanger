import React, { useState } from 'react';

//styles
import styles from '../styles/Coin.module.css'
//image
import coin from '../images/coin.png'

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
const[clicked,setClicked]= useState(false);
const setActiving = () => {
  setClicked(true)
} 
const setClosing = () => {
  setClicked(false)
  console.log(clicked);
} 
  return (
    <>
      <div onClick={setActiving} className={styles.container}>
        <div className={styles.titles}>
          <img src={coin} className={styles.CoinLogo} alt='coin'/>
          <img onClick={setActiving} className={styles.image} src={image} alt="name" />
          <span onClick={setActiving} className={styles.name}>{name}</span>
        </div>
        {clicked &&
        <div className={styles.explains}>
            <img src={coin} className={styles.CoinLogo_explain} alt='coin'/>
            <img  className={styles.image_explain} src={image} alt="name" />
            <span className={styles.name_explain}>Name : {name}</span>
            <span className={styles.symbol}>Symbol:{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>Current Price :${price.toLocaleString()}</span>
            <span className={priceChange>0 ? styles.greenPriceChange : styles.redPriceChange}>Price Change :{priceChange}</span>
            <span className={styles.marketCap}>Market Cap :${marketCap.toLocaleString()}</span>
          </div>
        }
            <button onClick={()=>{setClicked(false)}} className={styles.closeButton}>close</button>
      </div>
    </>
  );
};

export default Coin;