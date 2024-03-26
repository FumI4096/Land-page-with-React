import { IoIosMenu, IoIosClose } from "react-icons/io";
import React, { useState, useEffect } from "react";
import style from 'styled-components';

const Nav = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [showTabs, setShowTabs] = useState(viewportWidth >= 1024);
    const [showBurger, setShowBurger] = useState(viewportWidth <= 1024);
    const [showClose, setShowClose] = useState(false);

    const handleResize = () => {
        const width = window.innerWidth;
        setViewportWidth(width);
        setShowTabs(width >= 1024);
        setShowBurger(width <= 1024);
        setShowClose(width > 1024);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const PressBurger = () => {
        setShowTabs(!showTabs);
        setShowBurger(showTabs);
        setShowClose(true);
    }

    const PressClose = () => {
        setShowTabs(false);
        setShowBurger(true);
        setShowClose(false); 
    }

    const StyleBurger = style(IoIosMenu)`
        color: white;
        font-size: 2.5rem;
        display: ${props => (props.showBurger ? 'block' : 'none')};
        cursor: pointer;
    `;

    const CloseButton = style(IoIosClose)`
        color: white;   
        font-size: 3rem;
        display: none;
        cursor: pointer;

        @media only screen and (max-width: 1024px){
            display:  ${(!showTabs) ? 'none' : 'block'};
        }
    `;

    const StyleTabs = style.ul `
        list-style: none;
        display: ${props => (props.showTabs ? 'flex' : 'none')};
        padding: 0;
        height: 100%;
        
        @media only screen and (max-width: 1024px){
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
        }
    `;

    const styleTitle = {
        marginRight: 'auto',
        color: '#fff',
    };

    const StyleLinks = style.a`
        padding: 0 30px;
        text-decoration: none;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${styleTitle.color};
        font-size: 1.1rem;
        height: 100%;

        @media only screen and (max-width: 1024px){
            margin: 0;
            width: 100%;
            padding: 50px 0;
            font-size: 1.4rem;
            background-color: rgba(0, 0, 0, 0.45);

            &:hover{
                background-color: rgba(0, 0, 0, 0.6);
            }
            &:active{
                background-color: rgba(0, 0, 0, 0.7);
            }
        }
    `;

    const styleNav = {
        padding: "var(--nav-padding)",
        height: "70px",
        display: "flex",
        alignItems: "center",
        position: 'relative',
        width: "100%",
        zIndex: "100",
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    }

    return(
        <>
            <nav style={styleNav}>
                <h2 style={styleTitle}>VibeChecks</h2>
                <StyleTabs showTabs={showTabs}>
                    <StyleLinks href="#home">
                        <li>Home</li>
                    </StyleLinks>
                    <StyleLinks href="#about">
                        <li>About</li>
                    </StyleLinks>
                    <StyleLinks href="#contact">
                        <li>Contact</li>
                    </StyleLinks>
                </StyleTabs>
                <StyleBurger showBurger={showBurger} onClick={PressBurger}></StyleBurger>
                <CloseButton showClose={showClose} onClick={PressClose}></CloseButton>
            </nav>
        </>

    );
}

export default Nav 