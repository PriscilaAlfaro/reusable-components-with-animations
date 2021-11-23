import React from 'react';
import styled from 'styled-components/macro';
import Button from '../Button';
import Lottie from "react-lottie";
import animationData from "../../lotties/website-error-404-animation.json";

const NotFoundContainer = styled.footer`
    width: 100%;
    heigth: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: center;
`

const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <NotFoundContainer>
            <Lottie options={defaultOptions} maxHeight={500} maxWidth={500} />
            <Button buttonText="Back"/>
        </NotFoundContainer>
    );
}

export default NotFound;
