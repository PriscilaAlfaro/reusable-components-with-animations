import React from 'react';
import styled from 'styled-components';
import Lottie from "react-lottie";
import animationData from "../../lotties/work-desk";

const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: black;
    justify-content: center;
`

const FooterText = styled.p`
    width: 100%;
    display: flex;
    margin: 50px 0;
    color: white;
    justify-content: center;

`

const Footer = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <FooterContainer>
            <Lottie options={defaultOptions} height={100} width={100} />
            <FooterText> @All rights reserved | Created by Priscila Alfaro | Stockholm 2021</FooterText>
        </FooterContainer>
    );
}

export default Footer;
