import { Route, Routes } from 'react-router-dom';
import Content from './components/content';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import TopIMDB from './pages/TopIMDB';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import { useState, useEffect } from 'react';
import { getAllDataOptimize } from './utils/fetchData';
import Trending from './pages/Trending';
import About from './pages/About';

export default function Routing() {
    const [trending, settrending] = useState([]);
    const [topMovies, settopMovies] = useState([]);
    const [topSeries, settopSeries] = useState([]);

    const [actionAndAdventureMovies, setactionAndAdventureMovies] = useState(
        []
    );
    const [animationMovies, setanimationMovies] = useState([]);
    const [comedyMovies, setcomedyMovies] = useState([]);
    const [crimeMovies, setcrimeMovies] = useState([]);
    const [documentaryMovies, setdocumentaryMovies] = useState([]);
    const [kidsMovies, setkidsMovies] = useState([]);

    const [actionAndAdventureSeries, setactionAndAdventureSeries] = useState(
        []
    );
    const [animationSeries, setanimationSeries] = useState([]);
    const [comedySeries, setcomedySeries] = useState([]);
    const [crimeSeries, setcrimeSeries] = useState([]);
    const [documentarySeries, setdocumentarySeries] = useState([]);
    const [kidsSeries, setkidsSeries] = useState([]);

    const [trendingMovies, settrendingMovies] = useState([]);
    const [trendingSeries, settrendingSeries] = useState([]);
    useEffect(() => {
        (async function () {
            const data = await getAllDataOptimize();
            settrending(data[0]);
            settopMovies(data[1]);
            settopSeries(data[2]);

            setactionAndAdventureMovies(data[3]);
            setanimationMovies(data[4]);
            setcomedyMovies(data[5]);
            setcrimeMovies(data[6]);
            setdocumentaryMovies(data[7]);
            setkidsMovies(data[8]);

            setactionAndAdventureSeries(data[9]);
            setanimationSeries(data[10]);
            setcomedySeries(data[11]);
            setcrimeSeries(data[12]);
            setdocumentarySeries(data[13]);
            setkidsSeries(data[14]);

            settrendingMovies(data[15]);
            settrendingSeries(data[16]);
        })();
    }, []);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Content
                        trending={trending}
                        topMovies={topMovies}
                        topTVSeries={topSeries}
                    />
                }
            />
            <Route
                path="/Movies"
                element={
                    <Movies
                        actionAndAdventureMovies={actionAndAdventureMovies}
                        animationMovies={animationMovies}
                        comedyMovies={comedyMovies}
                        crimeMovies={crimeMovies}
                        documentaryMovies={documentaryMovies}
                        kidsMovies={kidsMovies}
                    />
                }
            />
            <Route
                path="/TvShows"
                element={
                    <TvShows
                        actionAndAdventureSeries={actionAndAdventureSeries}
                        animationSeries={animationSeries}
                        comedySeries={comedySeries}
                        crimeSeries={crimeSeries}
                        documentarySeries={documentarySeries}
                        kidsSeries={kidsSeries}
                    />
                }
            />
            <Route
                path="/TopIMBD"
                element={
                    <TopIMDB topMovies={topMovies} topTVSeries={topSeries} />
                }
            />
            <Route
                path="/Trending"
                element={
                    <Trending
                        trendingMovies={trendingMovies}
                        trendingSeries={trendingSeries}
                    />
                }
            />
            <Route path="/about/:type/:typeId" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Register" element={<Register />} />
        </Routes>
    );
}
