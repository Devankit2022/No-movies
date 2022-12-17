import style from './style.module.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import { FiList } from 'react-icons/fi';
import { BsGraphUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Option() {
    return (
        <ul className={style.ul}>
            <li className={style.li}>
                <button className={`${style.button} ${style.movies}`}>
                    <AiFillPlayCircle color="white" />
                    <Link to="/Movies" className={style.link}>
                        Movies
                    </Link>
                </button>
            </li>
            <li className={style.li}>
                <button className={style.button}>
                    <FiList />
                    <Link to="/TvShows" className={style.link}>
                        TV Shows
                    </Link>
                </button>
            </li>
            <li className={style.li}>
                <button className={style.button}>
                    <BsGraphUp />
                    <Link to="/Trending" className={style.link}>
                        Trending
                    </Link>
                </button>
            </li>
        </ul>
    );
}
