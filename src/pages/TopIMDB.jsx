import ContentLister from '../components/content/ContentLister';
import Header from '../components/header';
export default function TopIMDB({ topMovies, topTVSeries }) {
    return (
        <>
            <Header />
            <div
                style={{
                    backgroundColor: 'rgb(58, 57, 57)',
                    padding: '20px 15px',
                }}
            >
                <ContentLister
                    title={'IMBD Top Movies'}
                    data={topMovies}
                    type="Movie"
                />
                <ContentLister
                    title={'IMDB Top Series'}
                    data={topTVSeries}
                    type="Series"
                />
            </div>
        </>
    );
}
