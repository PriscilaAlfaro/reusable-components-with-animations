import React from 'react';
import styled from 'styled-components';
import Lottie from "react-lottie";
import animationData from "../../lotties/congratulation-success-batch.json";

const CongratsText= styled.h1`
    display: flex;
    margin: 0 auto;
    color: red;
    justify-content: center;
`

const Congrats = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <CongratsText>Congratulations!</CongratsText>
        <Lottie options={defaultOptions} height={400} width={400} />
        </>
  );
}


export default Congrats;