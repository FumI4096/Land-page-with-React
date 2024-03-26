import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import style from '../styles/style.module.css';
import styled from 'styled-components';

const Footer = () => {

    const FooterHeader = styled.h2 `
        font-size: 2rem;
        margin-bottom: 2rem;

        @media only screen and (max-width: 1011px){
            text-align: center;
        }
    `;

    return (
        <footer className={style.styleFooter}>
            <FooterHeader>VibeChecks</FooterHeader>
            <section className={style.styleSect}>
                <article className={style.layoutFootSect}>
                    <ul className={style.iconLayout}>
                        <li>
                            <a href="#facebook"><FaFacebook /></a>
                        </li>
                        <li>
                            <a href="#google"><FaGooglePlus /></a>
                        </li>
                        <li>
                            <a href="#twitter"><AiFillTwitterCircle /></a>
                        </li>
                        <li>
                            <a href="#instagram"><TiSocialInstagram /></a>
                        </li>
                    </ul>
                </article>
                <article className={style.layoutFootSect}>
                    <ul className={style.callersLayout}>
                        <li>
                            <h2>Indonesia</h2>
                            <h3>Alethea Evergreen</h3>
                            <h4>&#43;1 &#40;555&#41; 123-4567</h4>
                            <h4>alethea@gmail.com</h4>
                        </li>
                        <li>
                            <h2>Greenland</h2>
                            <h3>Benjamin Sterling</h3>
                            <h4>&#43;1 &#40;555&#41; 987-6543</h4>
                            <h4>benjamin@gmail.com</h4>
                        </li>
                    </ul>
                </article>
                <aside className={style.layoutFootSect}>
                    <div className = {style.formLayout}>
                        <form action="">
                            <div>
                                <h2><label htmlFor="email">Contact Us</label>
                                </h2>
                            </div>
                            <div>
                                <input type="email" id="email" placeholder="Your email goes here"/>
                                <input type="submit" value="Subscribe" />
                            </div>
                        </form>
                    </div>
                </aside>
            </section>
            <section className={style.Copyright}>
                <p>&#169; 2024 VibeChecks. All rights reserved.</p>
            </section>


        </footer>

    );
}

export default Footer