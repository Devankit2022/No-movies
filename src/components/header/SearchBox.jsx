import style from './style.module.css';
import SearchBar from './SearchBar';
import SearchViewer from './SearchViewer';
import { useEffect, useState } from 'react';
import { searchURL } from '../../constants';
import axios from 'axios';

export default function SearchBox() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        if (query) {
            (async function () {
                const { data } = await axios.get(searchURL, {
                    params: {
                        query: query,
                    },
                });
                setData(data.results);
            })();
            setShowSearch(true);
        } else {
            setShowSearch(false);
        }
    }, [query]);
    return (
        <div className={style.searchBox}>
            <p className={style.h1}>Find Movies, TV shows and more</p>
            <SearchBar query={query} setQuery={setQuery} />
            <p className={style.h3}>NoMovies - Watch TV Shows Online</p>
            <p className={style.p}>
                nomovies.at - nomovies, nomovies tv shows, no movies, nomovies
                streaming, nomovies online
            </p>
            <p className={style.p}>
                Please help us by sharing this site with your friends. Thanks!
            </p>
            {showSearch && <SearchViewer data={data} />}
        </div>
    );
}
