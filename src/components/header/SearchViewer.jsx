import SearchItem from './SearchItem';
import style from './style.module.css';

const SearchViewer = ({ data }) => {
    return (
        <div className={style.serchviewer}>
            {data.length > 0 ? (
                data.map((item, index) => {
                    if (index < 5) {
                        return (
                            <SearchItem
                                key={item.id}
                                image={item.poster_path}
                                title={
                                    item.name ||
                                    item.original_name ||
                                    item.original_title ||
                                    item.title
                                }
                                release_date={
                                    item.first_air_date || item.release_date
                                }
                            />
                        );
                    }
                    return '';
                })
            ) : (
                <div
                    style={{
                        height: '70px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    No result found . . . .
                </div>
            )}
            <div style={{ height: '15px', backgroundColor: '#0505ad' }}></div>
        </div>
    );
};

export default SearchViewer;
