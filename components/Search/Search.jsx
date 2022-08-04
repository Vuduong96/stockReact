import React, {useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";

function Search() {

    const[input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

  return (
    <FormStyle  onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </div>
    </FormStyle>
   
  )
}

const FormStyle = styled.form`
    margin:1rem 20rem;
    
    div{
        width:100%;
        position:relative;
        margin-bottom: 2rem;
    }
    input{
        outline:white;
        background: linear-gradient(40deg, #5a5757,black);
        font-size: 1rem;
        color:white;
        padding:0.5rem 3rem;
        border:2px solid white;;
        border-radius: 2rem;
        width: 100%;
        align-items: left;
        justify-content: left;
    }
    svg{
        position:absolute;
        top:50%;
        left:0%;
        transform: translate(100%, -50%);
        color:white;
        margin-bottom:1rem;
    }

`;

export default Search;