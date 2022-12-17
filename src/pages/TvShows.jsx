import ContentLister from '../components/content/ContentLister';
import Header from '../components/header';
export default function TvShows({
    actionAndAdventureSeries,
    animationSeries,
    comedySeries,
    crimeSeries,
    documentarySeries,
    kidsSeries,
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
                    data={actionAndAdventureSeries}
                    type="Series"
                />
                <ContentLister
                    title={'Animation'}
                    data={animationSeries}
                    type="Series"
                />
                <ContentLister
                    title={'Comedy'}
                    data={comedySeries}
                    type="Series"
                />
                <ContentLister
                    title={'Crime'}
                    data={crimeSeries}
                    type="Series"
                />
                <ContentLister
                    title={'Documentary'}
                    data={documentarySeries}
                    type="Series"
                />
                <ContentLister title={'Kids'} data={kidsSeries} type="Series" />
            </div>
        </>
    );
}
