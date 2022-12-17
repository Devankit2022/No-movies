import img from '../../assets/not-found.jpg';
import { imageBaseURL } from '../../constants';
import style from './style.module.css';

const SearchItem = ({ title, image, release_date }) => {
    return (
        <div className={style.searchDiv}>
            <img
                style={{ height: '100%', width: '50px' }}
                src={image ? `${imageBaseURL}/${image}` : img}
                alt=" "
            />
            <div style={{ marginLeft: '20px' }}>
                <p style={{ fontSize: '17px', marginBottom: '4px' }}>{title}</p>
                <p style={{ fontSize: '12px', color: '#b8b8be' }}>
                    {release_date}
                </p>
            </div>
        </div>
    );
};

export default SearchItem;
