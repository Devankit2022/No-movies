import React from 'react';
import style from '../css/Content.module.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import { FiList } from 'react-icons/fi';
import { BsGraphUp } from 'react-icons/bs';
import CardShow from './CardShow';

export default function Content() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div>
                    <p className={style.p}>Recommended</p>
                    <hr className={style.hr} />
                </div>
                <ul className={style.ul}>
                    <li className={style.li}>
                        <button className={`${style.button} ${style.movies}`}>
                            <AiFillPlayCircle color="white" />
                            Movies
                        </button>
                    </li>
                    <li className={style.li}>
                        <button className={style.button}>
                            <FiList />
                            TV Shows
                        </button>
                    </li>
                    <li className={style.li}>
                        <button className={style.button}>
                            <BsGraphUp />
                            Trending
                        </button>
                    </li>
                </ul>
            </div>
            <div className={style.cards}>
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
            </div>
        </div>
    );
}
