import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import { useParams } from "react-router-dom";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import styles from './LineChart/LineChart.module.css';
import Moment from 'moment';
import styled from 'styled-components';
import StockTable from "./StockTable";




Chart.register(CategoryScale);


function LineChart() {


    const[stockData, setStockData] = useState([]);
    let params = useParams();

    const getStockData = async (symbol) => {
        const api = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&format=JSON&apikey=ef6d325096324b31b500fe5987ab162d`
        );
      const fetcheddata = await api.json();
      setStockData(fetcheddata.values);
      //console.log(fetcheddata.values);
    };

    useEffect(() => {
        getStockData(params.symbol);
    }, [params.symbol]);

    Moment.locale('en');


    const mapped_data = {
        labels: stockData?.map(item => Moment(item.datetime).format('LLLL')),
        datasets: [
        {
            label:"Open Price",
            data: stockData?.map(item => item.open),
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label:"Closing Price",
            data: stockData?.map(item => item.close),
            fill: true,
            borderColor: "#742774"
        }
    ]
    };


    return( 
    <div className={styles.mainContainer}> 
    <Card className={styles.graph} >
        <Line data={mapped_data}  />
    </Card>
    <Card>
        <StockTable />
    </Card>
    </div>
    );
}


const Card = styled.div`
  height: 20rem;
  display: flex;
  margin-left:9rem;
  margin-top:2rem;
`;

export default LineChart;