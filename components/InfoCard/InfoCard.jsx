import React, {useEffect, useState} from 'react';
import styles from './InfoCard.module.css';

function InfoCard() {
    const[info, setInfo] = useState([]);

    const fetchInfo= async () => {

     
        const api = await fetch(`https://api.twelvedata.com/eod?symbol=AAPL&apikey=ef6d325096324b31b500fe5987ab162d`
            );
        const data = await api.json();
        setInfo(data);
    };

    useEffect(() => {
        fetchInfo();
    }, []);

  return (
   <div className={styles.infoCard}>
        <h1 className={styles.header}>End of Day Price</h1>
        <div>
            <p className={styles.paragraph}>Exchange: {info.exchange}</p>
            <p className={styles.paragraph}>Currency: {info.currency}</p>
            <p className={styles.paragraph}>Date time: {info.datetime}</p>
            <p className={styles.paragraph}>Close Price: {info.close}</p>
        </div>
   </div>
   
  );
};

export default InfoCard;