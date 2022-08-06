import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import styles from './StockTable/StockTable.module.css';



function StockTable() {

const[stockTable, setStockTable] = useState([]);

    const fetchStockPrice = async () => {

        const api = await fetch(`https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&format=JSON&apikey=ef6d325096324b31b500fe5987ab162d`
            );
        const data = await api.json();
         setStockTable(data.values);
       
        console.log(data.values);
        
    };

    useEffect(() => {
      fetchStockPrice();
    }, []);





  return (
    <TableContainer component={Paper}>
       
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow className={styles.Tableheaders}>
            <TableCell>Date Time</TableCell>
            <TableCell align="right">Open ($)</TableCell>
            <TableCell align="right">Close ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockTable?.map((item) => (
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

  );


}



export default StockTable;