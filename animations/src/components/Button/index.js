import React, { useState }  from 'react';
import styled from 'styled-components';


const BigButton = styled.button`
    width: 200px;
    height: 60px;
    border: 4px solid #005D25;
    box-sizing: border-box;
    border-radius: 50px;
    margin: 20px auto;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
     -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
    color: #005D25;
    background: #FFFFF;

    &:hover { 
        background: #005E25;
        color: white !important;
    }

    &:disabled {
        color: rgba(0, 94, 37, 0.5);
        background: rgba(0, 94, 37, 0.25);
        pointer-events: none;
    }
`


const Button = ({  buttonText }) => {
    const [disable, setDisable] = useState(false);

    const handleDisable = () => {
        setDisable(true)
    }

    return (
        <BigButton disabled={disable} onClick={()=>handleDisable()}>{buttonText}</BigButton>
    );
}

export default Button;
