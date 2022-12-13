import CardShow from './CardShow';
import Option from './Option';
import style from './style.module.css';

export default function ContentLister({ title, option, data, type }) {
    return (
        <div style={{ marginBottom: 35 }}>
            <div className={style.header}>
                <div>
                    <p className={style.p}>{title}</p>
                    <hr className={style.hr} />
                </div>

                {option && <Option />}
            </div>
            <div className={style.cards}>
                {data.map((item) => (
                    <CardShow
                        key={item.id}
                        image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        title={item.name || item.title}
                        releaseDate={item.first_air_date || item.release_date}
                        type={
                            type
                                ? type
                                : item.media_type === 'tv'
                                ? 'Series'
                                : 'Movie'
                        }
                    />
                ))}
                {/* <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow />
                <CardShow /> */}
            </div>
        </div>
    );
}
