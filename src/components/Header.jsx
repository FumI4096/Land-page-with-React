import React from "react";
import Nav from './Nav';
import style from '../styles/style.module.css';
import styled from 'styled-components';

const Header = () => {
    const styleQuote = {
        fontFamily: 'Edu NSW ACT Foundation',
        color: '#fff',
        zIndex: '5',
        fontSize: 'clamp(2.7rem, 3.5vw, 5rem)',
    };

    const ContainerQuote = styled.div `
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    return(
        <>
            <header className={style.layout}>
                <Nav />
                <ContainerQuote>
                    <h1 style={styleQuote}>Satisfaction at best</h1>
                </ContainerQuote>
            </header>
        </>
    );
}

export default Header