import React from "react";
import Nav from './Nav';
import style from '../styles/style.module.css';

const Header = () => {
    const styleQuote = {
        fontFamily: 'Edu NSW ACT Foundation',
        color: '#fff',
        zIndex: '5',
        fontSize: '5rem',
    };
    return(
        <>
            <Nav />
            <header className={style.layout}>
                <h1 style={styleQuote}>Satisfaction at best</h1>
            </header>
        </>
    );
}

export default Header