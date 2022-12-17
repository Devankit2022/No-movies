import style from './style.module.css';
import { HiSearch } from 'react-icons/hi';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function SearchBar({ query, setQuery }) {
    return (
        <div className={style.searchBar}>
            <button className={style.button}>
                <HiSearch size={25} color="black" />
            </button>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={style.input}
                type="text"
                placeholder="Enter your keywords..."
            />
            <button className={style.right}>
                <AiOutlineArrowRight size={30} />
            </button>
        </div>
    );
}
