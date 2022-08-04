import React from 'react';
import {  useEffect, useState } from 'react';
import styles from "./StockInfo.module.css";


function StockInfo() {

  const[meta, setMeta] = useState([]);

  const fetchStockInfo = async () => {
    const api = await fetch(`https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&format=JSON&apikey=${process.env.API_KEY}}`
            );
    
    const data = await api.json();
    setMeta(data.meta);
  };

  useEffect(() => {
    fetchStockInfo();
  }, []);


  return (
    <div className={styles.container}>
      <h1 className={styles.header}>General Info</h1>
      <div className={styles.listItem}>
        <ul className={styles.itemList}>
          <div className={styles.currency}>Currency: {meta.currency}</div>
          <div className={styles.symbol}>Code         : {meta.symbol}</div>
        </ul>
      </div>
    </div>
  )
}

export default StockInfo