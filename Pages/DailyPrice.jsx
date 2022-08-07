import React, { useState, useEffect } from 'react';
import {Line, Bar} from 'react-chartjs-2';
import { useParams } from "react-router-dom";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import styles from './LineChart/LineChart.module.css';
import Moment from 'moment';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





Chart.register(CategoryScale);


function DailyPrice() {


    const[dailyData, setDailyData] = useState([]);

    const {symbol, interval} = useParams();

    const getStockData = async (symbol, interval) => {
        const api = await fetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&format=JSON&apikey=ef6d325096324b31b500fe5987ab162d`
        );
      const fetcheddata = await api.json();
      setDailyData(fetcheddata.values);
      console.log(fetcheddata.values);

    };

    useEffect(() => {
        getStockData(symbol, interval);
    }, [symbol, interval]);

    Moment.locale('en');

    
    const mapped_data = {
        labels: dailyData?.reverse().map(item => Moment(item.datetime).format('MM-DD-YYYY')),
        datasets: [
        {
            label:"Open Price",
            data: dailyData?.reverse().map(item => item.open),
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label:"Closing Price",
            data: dailyData?.reverse().map(item => item.close),
            fill: true,
            borderColor: "#742774"
        }
    ]
    };

    const barData = {
        labels: dailyData?.reverse().map(item => Moment(item.datetime).format('MM-DD-YYYY')),
        datasets: [
            {
                type:'line',
                label:"Open Price",
                data: dailyData?.reverse().map(item => item.open),
                fill: true,
                borderColor: "white"
            },
            {
                type: 'line',
                label:"Closing Price",
                data: dailyData?.reverse().map(item => item.close),
                fill: true,
                borderColor: "yellow"
            },
            {
                label:"High",
                data: dailyData?.reverse().map(item => item.high),
                fill: true,
                backgroundColor: "rgba(#742774,0.2)",
                borderColor: "rgba(#742774,1)"
            },
            {
                label:"Low",
                data: dailyData?.reverse().map(item => item.low),
                fill: true,
                backgroundColor: "rgba(222,15,234,0.2)",
                borderColor: "aqua"
            }
    ]
    };

    const volume_data = {
        labels: dailyData?.reverse().map(item => Moment(item.datetime).format('MM-DD-YYYY')),
        datasets: [
        {
            label:"Volume",
            data: dailyData?.reverse().map(item => item.volume),
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "blue"
        }
    ]
    };
    


    return( 
    <div>
    <List>
        <SLink to={'/daily/'+symbol+'/'+ interval}>
            <h4>Daily</h4>
        </SLink>
        <SLink to={'/weekly/'+symbol+'/1week'}>
            <h4>Weekly</h4>
        </SLink>
        <SLink to={'/monthly/'+symbol+'/1month'}>
            <h4>Monthly</h4>
        </SLink>
    </List>
    <div className={styles.mainContainer}> 
    <Card className={styles.graph} >
        <Line className={styles.graph1} data={mapped_data}  />
    </Card>
    <Card>
        <TableContainer component={Paper}>
        
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Date Time</TableCell>
                <TableCell align="right">Open ($)</TableCell>
                <TableCell align="right">Close ($)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {dailyData?.map((item) => (
                <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {item.datetime}
                </TableCell>
                <TableCell align="right">{item.open}</TableCell>
                <TableCell align="right">{item.close}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </Card>
    </div>
   
    <Card className={styles.graph}>
        <Bar className={styles.graph2} data={barData} />
    </Card>
    
    <Card className={styles.graph}>
        <Line className={styles.graph3} data={volume_data}  />
    </Card>
    </div>
    
    );
}


const Card = styled.div`
  height: 20rem;
  display: flex;
  margin-left:2rem;
  margin-top:2rem;
`;


const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    margin-right: 5rem;
    text-decoration:none;
    background: linear-gradient(35deg,
        #494949, #313131);
    width: 5rem;
    height: 3rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color:white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        svg{
            color:white;
        }
        h4{
            color:white;
        }
    }
`;

export default DailyPrice;