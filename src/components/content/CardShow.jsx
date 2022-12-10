import React, { useState } from 'react';
import CardOnHover from './CardOnHover';
import Card from './Card';
import style from '../css/CardShow.module.css';

export default function CardShow() {
    const [show, setshow] = useState(false);
    const handleHover = () => {
        setshow((state) => !state);
    };
    return (
        <div className={style.container}>
            <div
                className={style.card}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                <Card />
            </div>
            <div
                className={style.card_on_hover}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                {show && <CardOnHover />}
            </div>
        </div>
    );
}
