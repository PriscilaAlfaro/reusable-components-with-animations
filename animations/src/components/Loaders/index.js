import React from 'react';
import styled from 'styled-components/macro';
import LoaderCircle from '../LoaderCircle';
import LoaderLineRed from '../LoaderLineRed';
import LoaderPurpleCircle from '../LoaderPurpleCircle';
import LoaderThreeDots from '../LoaderThreeDots';


const LoaderContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    background-color: wheat;
    margin: 1rem auto;
    flex-wrap: wrap;
`

const Loaders = () => {

    return (
        <LoaderContainer>
           <LoaderPurpleCircle/>
           <LoaderLineRed/>
           <LoaderThreeDots/>
           <LoaderCircle/>
        </LoaderContainer>
    );
}

export default Loaders;
