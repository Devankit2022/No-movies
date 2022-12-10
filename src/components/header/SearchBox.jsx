import React from 'react';
import SearchBar from './SearchBar';
import style from '../css/SearchBox.module.css';

export default function SearchBox() {
    return (
        <div className={style.searchBox}>
            <p className={style.h1}>Find Movies, TV shows and more</p>
            <SearchBar />
            <p className={style.h3}>NoMovies - Watch TV Shows Online</p>
            <p className={style.p}>
                nomovies.at - nomovies, nomovies tv shows, no movies, nomovies
                streaming, nomovies online
            </p>
            <p className={style.p}>
                Please help us by sharing this site with your friends. Thanks!
            </p>
        </div>
    );
}
