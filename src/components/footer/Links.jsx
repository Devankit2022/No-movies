import React from 'react';
import style from '../css/Links.module.css';

export default function Links() {
    return (
        <div className={style.main_main_conatiner}>
            <p className={style.h1}>Links</p>
            <div className={style.main_container}>
                <div className={style.container}>
                    <p className={style.p}>Movies</p>
                    <p className={style.p}>TV-Shows</p>
                    <p className={style.p}>Most Viewed</p>
                    <p className={style.p}>Top IMDb</p>
                </div>
                <div className={style.container}>
                    <p className={style.p}>Action</p>
                    <p className={style.p}>Horror</p>
                    <p className={style.p}>Sci-Fi</p>
                    <p className={style.p}>Thriller</p>
                    <p className={style.p}>Anime</p>
                </div>
                <div className={style.container}>
                    <p className={style.p}>Contact</p>
                    <p className={style.p}>Request</p>
                    <p className={style.p}>Donate</p>
                </div>
            </div>
        </div>
    );
}
