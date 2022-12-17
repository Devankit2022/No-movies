import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchIndivisualData } from '../../utils/fetchData';
import style from './style.module.css';
import { imageBaseURL } from '../../constants';

export default function About() {
    const { typeId, type } = useParams();
    const [details, SetDetails] = useState({});
    useEffect(() => {
        if (typeId && type) {
            (async function () {
                const data = await fetchIndivisualData({ typeId, type });
                SetDetails(data);
            })();
        }
    }, [typeId, type]);

    return (
        <div>
            {JSON.stringify(details) === '{}' ? (
                <h1>Loading . . .</h1>
            ) : (
                <section className={style.section}>
                    <div className={style.poster}>
                        <img
                            className={style.poster_image}
                            src={`${imageBaseURL}/${details.backdrop_path}`}
                            alt="not available"
                        />
                    </div>
                    <div className={style.view}>
                        <div className={style.info}>
                            <h1 className={style.title}>
                                {details.title ||
                                    details.original_title ||
                                    details.name ||
                                    details.original_name}
                            </h1>
                            <h2 className={style.tagline}>{details.tagline}</h2>
                            <div className={style.details}>
                                <p style={{ marginRight: '10px' }}>
                                    {details.release_date ||
                                        details.first_air_date}
                                </p>
                                |
                                <p style={{ margin: '0 10px' }}>
                                    {details.runtime
                                        ? `${details.runtime} m`
                                        : `EP${details.number_of_episodes}`}
                                </p>
                                |
                                <div
                                    className={style.genre}
                                    style={{ margin: '0 10px' }}
                                >
                                    {details?.genres?.map((item) => (
                                        <p
                                            key={item.id}
                                            style={{ margin: '2px' }}
                                        >
                                            {item.name}|{' '}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <p className={style.description}>
                                {details.overview}
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
