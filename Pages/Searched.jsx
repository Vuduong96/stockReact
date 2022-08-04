import React from 'react';
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from 'styled-components';


function Searched() {

    const[searchedSymbol, setSearchedSymbol] = useState([]);
    let params = useParams();

    const getSearched = async(symbol) => {
        const res = await fetch(
            `https://api.twelvedata.com/stocks?symbol=${symbol}`
        );

        const stockRes = await res.json();

        setSearchedSymbol(stockRes.data);
    };
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

  return (
    <Grid>
        {searchedSymbol?.map((searchedstock) => {
            return(
                <Card key={searchedstock.id}>
                    <Link to={'/stock/' + searchedstock.id}>
                    <h4>{searchedstock.name}</h4>
                    <p>{searchedstock.currency}</p>
                    <p>{searchedstock.exchange}</p>
                    <p>{searchedstock.country}</p>
                    <p>{searchedstock.type}</p>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap:3rem;
  background-color: black;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 0 20px;
  justify-content: center;
  margin: 0 20px;
  margin-top:1rem;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
  }
  h4 { 
    text-align: center;
    padding: 0.5rem;
    color: var(--infoCard-text-clor );
  }
  p {
    font-size: 1rem;
    color: var(--infoCard-text-clor );

  }
`;

export default Searched;