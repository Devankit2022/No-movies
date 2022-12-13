import axios from 'axios';
import { useEffect, useState } from 'react';
import { topMoviesURL, topTVSeriesURL, trendingURL } from '../../constants';
import ContentLister from './ContentLister';

export default function Index() {
    const [trendingContent, settrendingContent] = useState([]);
    const [topMoviesContent, settopMoviesContent] = useState([]);
    const [topTVSeries, settopTVSeries] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const res1 = await axios.get(trendingURL);
                const data1 = await res1.data;
                settrendingContent(data1.results);
                const res2 = await axios.get(topMoviesURL);
                const data2 = res2.data;
                settopMoviesContent(data2.results);
                const res3 = await axios.get(topTVSeriesURL);
                const data3 = res3.data;
                settopTVSeries(data3.results);
            } catch (error) {
                console.log(error);
                alert(error);
            }
        }
        fetchData();
        return () => {};
    }, []);
    return (
        <div
            style={{ backgroundColor: 'rgb(58, 57, 57)', padding: '20px 15px' }}
        >
            <ContentLister title={'Trending'} option data={trendingContent} />
            <ContentLister
                title={'Top Movies'}
                data={topMoviesContent}
                type="Movie"
            />
            <ContentLister
                title={'Top Series'}
                data={topTVSeries}
                type="Series"
            />
        </div>
    );
}
