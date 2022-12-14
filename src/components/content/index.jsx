import Header from '../header';
import SearchBox from '../header/SearchBox';
import ContentLister from './ContentLister';
import Footer from '../footer';

export default function Index({ trending, topMovies, topTVSeries }) {
    return (
        <>
            <Header />
            <SearchBox />
            <div
                style={{
                    backgroundColor: 'rgb(58, 57, 57)',
                    padding: '20px 15px',
                }}
            >
                <ContentLister title={'Trending'} option data={trending} />
                <ContentLister
                    title={'Top Movies'}
                    data={topMovies}
                    type="Movie"
                />
                <ContentLister
                    title={'Top Series'}
                    data={topTVSeries}
                    type="Series"
                />
            </div>
            <Footer />
        </>
    );
}
