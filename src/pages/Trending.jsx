import Header from '../components/header';
import ContentLister from '../components/content/ContentLister';
export default function Trending({ trendingMovies, trendingSeries }) {
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
                    title={'Trending Movies'}
                    data={trendingMovies}
                    type="Movie"
                />
                <ContentLister
                    title={'Trending Series'}
                    data={trendingSeries}
                    type="Series"
                />
            </div>
        </>
    );
}
