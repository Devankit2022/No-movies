import logo from '../../assets/logo.png';
import style from './style.module.css';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className={style.nav}>
            <img className={style.logo} src={logo} alt="Logo" />
            <div>
                <ul className={style.ul}>
                    <li className={style.li}>
                        <Link to="/" className={style.link}>
                            HOME
                        </Link>
                    </li>
                    <li className={style.li}>
                        <Link to="/Movies" className={style.link}>
                            MOVIES
                        </Link>
                    </li>
                    <li className={style.li}>
                        <Link to="/TvShows" className={style.link}>
                            TV SHOWS
                        </Link>
                    </li>
                    <li className={style.li}>
                        <Link to="/TopIMBD" className={style.link}>
                            TOP IMDB
                        </Link>
                    </li>
                    <li className={style.li}>
                        <Link to="/Contact" className={style.link}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
            <button className={style.login}>
                <BiUserCircle size={30} />
                <span style={{ marginLeft: '7px' }}>
                    <Link className={style.sign} to="/SignIn">
                        Login/ Register
                    </Link>
                </span>
            </button>
        </div>
    );
}
