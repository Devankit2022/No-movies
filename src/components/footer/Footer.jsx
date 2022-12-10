import React from 'react';
import AboutUs from './AboutUs';
import Links from './Links';
import style from '../css/Footer.module.css';

const Footer = () => {
    return (
        <div>
            <div className={style.conatiner1}>
                <Links />
                <AboutUs />
            </div>
            <div className={style.conatiner2}>
                <span>&copy; 2022 No Movies</span>
            </div>
        </div>
    );
};

export default Footer;
