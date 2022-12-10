import React from 'react';
import logo from '../../assets/logo.png';
import style from '../css/Navbar.module.css';
import { BiUserCircle } from 'react-icons/bi';

export default function Navbar() {
    return (
        <div className={style.nav}>
            <img className={style.logo} src={logo} alt="Logo" />
            <div>
                <ul className={style.ul}>
                    <li className={style.li}>HOME</li>
                    <li className={style.li}>GENRE</li>
                    <li className={style.li}>COUNTRY</li>
                    <li className={style.li}>MOVIES</li>
                    <li className={style.li}>TV SHOWS</li>
                    <li className={style.li}>TOP IMDB</li>
                </ul>
            </div>
            <button className={style.login}>
                <BiUserCircle size={30} />
                <span style={{ marginLeft: '7px' }}>Login/ Register</span>
            </button>
        </div>
    );
}
