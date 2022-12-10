import React from 'react';
import Layout from './Layout';
import img from '../../assets/batman.jpeg';
import style from '../css/Card.module.css';
import { BsDot } from 'react-icons/bs';

export default function Box() {
    return (
        <div>
            <Layout>
                <img className={style.img} src={img} alt="no image" />
            </Layout>
            <p>Batman</p>
            <div className={style.details}>
                <div className={style.details_container}>
                    <span>2022</span>
                    <BsDot size={20} className={style.dot} />
                    <span>161 min</span>
                </div>
                <span className={style.movie}>Movie</span>
            </div>
        </div>
    );
}
