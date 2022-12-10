import React from 'react';
import style from '../css/Content.module.css';
import CardShow from './CardShow';

const Latest = (props) => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div>
                    <p className={style.p}>{props.container}</p>
                    <hr className={style.hr} style={{ width: props.hr }} />
                </div>
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
};

export default Latest;
