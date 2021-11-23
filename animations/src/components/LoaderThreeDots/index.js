import React from 'react';
import styled from 'styled-components/macro';
import Lottie from "react-lottie";
import animationData from "../../lotties/loading-three-color-dots";


const LoaderContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: black;
`

const LoaderThreeDots = () => {
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}
        
    return (
        <LoaderContainer>
        <Lottie options={defaultOptions} height={200} width={200} />
        </LoaderContainer>
    );
}

export default LoaderThreeDots;
