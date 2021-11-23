import React from 'react';
import styled from 'styled-components/macro';

const HeaderContainer = styled.header`
    width: 100%;
    height: 300px;
    color: #FFFFFF;
    display: flex;
    background: black;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    @media (min-width: 768px){
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
    }
}


    
`
const HeaderTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-shadow: 0px 2px 2px #FFF5D1;
    font-size: 2rem;
    margin: 0 auto;

    @media (min-width: 768px){
        font-size: 3rem;
    }

    @media (min-width: 992px) {
        font-size: 4rem;
    }
`

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Header</HeaderTitle>
            <HeaderTitle>SubHeader</HeaderTitle>
        </HeaderContainer>
    );
}

export default Header;
