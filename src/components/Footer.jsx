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

    }
    return (
        <footer className={style.layout2}>
            <h2>VibeChecks</h2>
            <section style={styleSect}>
                <article>
                    <ul>
                        <a href="#facebook">
                            <li><FaFacebook /></li>
                        </a>
                        <a href="#google">
                            <li> <FaGooglePlus /></li>
                        </a>
                        <a href="#twitter">
                            <li><AiFillTwitterCircle /></li>
                        </a>
                        <a href="#instagram">
                            <li><TiSocialInstagram /></li>
                        </a>
                    </ul>
                </article>
                <article>
                    <ul>
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
                <aside>
                    
                    <div>
                        <form action="">
                            <label htmlFor="email">Enter your email:</label>
                            <input type="email" id="email"/>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <p>&#169; 2024 VibeChecks. All rights reserved.</p>
                </aside>

            </section>


        </footer>

    );
}

export default Footer