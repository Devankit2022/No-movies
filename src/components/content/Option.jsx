import style from './style.module.css';
import { AiFillPlayCircle } from 'react-icons/ai';
import { FiList } from 'react-icons/fi';
import { BsGraphUp } from 'react-icons/bs';

export default function Option() {
    return (
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
    );
}
