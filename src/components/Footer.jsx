import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import style from '../styles/style.module.css'

const Footer = () => {

    const styleSect = {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '2px solid black',
        flexWrap: 'wrap',
    }

    const styleFooterHeader = {
        fontSize: '2rem',
        marginBottom: '2rem',
    }

    const layoutFootSect = {
        height: '200px',
        width: '400px',
    }
    return (
        <footer className={style.styleFooter}>
            <h2 style={styleFooterHeader}>VibeChecks</h2>
            <section style={styleSect}>
                <article style={layoutFootSect}>
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
                <article style={layoutFootSect}>
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
                <aside style={layoutFootSect}>
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