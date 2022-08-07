import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={'/stock/1min'}>
            <h4>1 min</h4>
        </SLink>
        <SLink to={'/stock/5min'}>
            <h4>5 mins</h4>
        </SLink>
        <SLink to={'/stock/1day'}>
            <h4>1 day</h4>
        </SLink>
    </List>
  )
}


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

export default Category