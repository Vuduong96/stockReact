import React  from 'react';
import {  useEffect, useState } from 'react';
import styles from './StockPrice/StockPrice.module.css';
import Moment from 'moment';


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

    Moment.locale('en');

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
              <div className={styles.listDatetime}>{Moment(item.datetime).format('LLLL')}</div>
              <div className={styles.listOpen}>{Math.round(item.open*1000)/1000}</div>
              <div className={styles.listClose}>{Math.round(item.close*1000)/1000}</div>
            </li>
          </ul>
        )
      })}
      
    </div>
  </div>
  );
}





export default StockPrice;