import React from 'react';
import style from '../css/AboutUs.module.css';

export default function AboutUs() {
    return (
        <div className={style.container}>
            <p className={style.h1}>About Us</p>
            <p className={style.para}>
                <b>Nomovies</b> is free streaming website with zero ads, it
                allows you <b>watch movies online free</b> ,
                <b>watch tv shows </b>
                online in high quality for free. You can also download full
                series from <b>Nomovies</b> and watch it later if you want.
            </p>
            <p className={style.para2}>
                This site does not store any files on our server, we only linked
                to the media which is hosted on 3rd party services.
            </p>
        </div>
    );
}
