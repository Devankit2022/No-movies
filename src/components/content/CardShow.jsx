import { useState } from 'react';
import CardOnHover from './CardOnHover';
import Card from './Card';
import style from './CardShow.module.css';
import { Link } from 'react-router-dom';

export default function CardShow(props) {
    const [show, setshow] = useState(false);
    const handleHover = () => {
        setshow((state) => !state);
    };
    return (
        <div className={style.container}>
            <div
                className={style.card}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                <Card
                    image={props.image}
                    title={props.title}
                    releaseDate={props.releaseDate}
                    type={props.type}
                />
            </div>
            <div
                className={style.card_on_hover}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                {show && (
                    <Link to={`/about/${props.type}/${props.id}`}>
                        <CardOnHover />
                    </Link>
                )}
            </div>
        </div>
    );
}
