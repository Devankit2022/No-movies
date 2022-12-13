import AboutUs from './AboutUs';
import CopyRight from './CopyRight';
import Links from './Links';
import style from './style.module.css';

export default function index() {
    return (
        <div>
            <div className={style.conatiner1}>
                <Links />
                <AboutUs />
            </div>
            <CopyRight />
        </div>
    );
}
