import Layout from './Layout';
import style from './CardShow.module.css';

export default function Card(props) {
    function printTitle(str) {
        return str?.length > 16 ? str.substring(0, 17).concat('...') : str;
    }
    return (
        <div>
            <Layout>
                <img className={style.img} src={props.image} alt="not found" />
            </Layout>
            <p style={{ marginLeft: 3 }}>{printTitle(props.title)}</p>
            <div className={style.details}>
                <div className={style.details_container}>
                    <span>{props.releaseDate}</span>
                </div>
                <span className={style.movie}>{props.type}</span>
            </div>
        </div>
    );
}
