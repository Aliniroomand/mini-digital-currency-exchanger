import React, { useState } from 'react';

//styles
import styles from '../styles/Coin.module.css'
//image
import coin from '../images/coin.png'

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {

  return (
    <>
      <div className={styles.container}>
          <div className={styles.titles}>
            <img src={coin} className={styles.CoinLogo} alt='coin'/>
            <img className={styles.image} src={image} alt="name" />
            <span className={styles.name}>{name}</span>
          </div>

          <div className={styles.explains}>
            <span className={styles.symbol}>Symbol:{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>Current Price :${price.toLocaleString()}</span>
            <span className={priceChange>0 ? styles.greenPriceChange : styles.redPriceChange}>Price Change :{priceChange}</span>
            <span className={styles.marketCap}>Market Cap :${marketCap.toLocaleString()}</span>
          </div>

      </div>
    </>
  );
};

export default Coin;