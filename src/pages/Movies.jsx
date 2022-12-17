import ContentLister from '../components/content/ContentLister';
import Header from '../components/header';

export default function Movies({
    actionAndAdventureMovies,
    animationMovies,
    comedyMovies,
    crimeMovies,
    documentaryMovies,
    kidsMovies,
}) {
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
                    title={'Action & Adventure'}
                    data={actionAndAdventureMovies}
                    type="Movie"
                />
                <ContentLister
                    title={'Animation'}
                    data={animationMovies}
                    type="Movie"
                />
                <ContentLister
                    title={'Comedy'}
                    data={comedyMovies}
                    type="Movie"
                />
                <ContentLister
                    title={'Crime'}
                    data={crimeMovies}
                    type="Movie"
                />
                <ContentLister
                    title={'Documentary'}
                    data={documentaryMovies}
                    type="Movie"
                />
                <ContentLister title={'Kids'} data={kidsMovies} type="Movie" />
            </div>
        </>
    );
}
