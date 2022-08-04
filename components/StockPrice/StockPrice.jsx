import React  from 'react';
import {  useEffect, useState } from 'react';
import styles from './StockPrice.module.css';


function StockPrice() {

    const[stockPrice, setStockPrice] = useState([]);

    const fetchStockPrice = async () => {

        const check = localStorage.getItem('stockPrice');
        if(check){
          // Pulling it back
          setStockPrice(JSON.parse(check));
        }else{
          const api = await fetch(`https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&format=JSON&apikey=ef6d325096324b31b500fe5987ab162d`
            );
          const data = await api.json();
          setStockPrice(data.values);
       
          console.log(data.values);
        }
        
    };

    useEffect(() => {
      fetchStockPrice();
    }, []);

  return (
  <div className={styles.listContainer}>
    <div className={styles.stockcontainer}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Stock Price</h2>
      </div>

      <div className={styles.listHeader}>
        <div className={styles.datetimeHeader}>Date time</div>
        <div className={styles.openHeader}>Open</div>
        <div className={styles.closeHeader}>Close</div>
      </div>
       
      {stockPrice?.map((item) => {
        
        return(
          <ul className={styles.stockPriceList} key={item.id}>
            <li className={styles.stockPriceListItem}>
              <div className={styles.listDatetime}>{item.datetime}</div>
              <div className={styles.listOpen}>{item.open}</div>
              <div className={styles.listClose}>{item.close}</div>
            </li>
          </ul>
        )
      })}
      
    </div>
  </div>
  );
}





export default StockPrice;