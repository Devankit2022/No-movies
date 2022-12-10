import React from 'react';
import './style.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Recomended from './components/content/Recomended';
import LatestMovies from './components/content/LatestMovies';
import LatestTVSeries from './components/content/LatestTVSeries';

export default function App() {
    return (
        <div>
            <Header />
            <Recomended />
            <LatestMovies />
            <LatestTVSeries />
            <Footer />
        </div>
    );
}
