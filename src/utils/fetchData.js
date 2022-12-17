import {
    trendingURL,
    topMoviesURL,
    topTVSeriesURL,
    actionAndAdventureMoviesURL,
    animationMoviesURL,
    comedyMoviesURL,
    crimeMoviesURL,
    documentaryMoviesURL,
    kidsMoviesURL,
    actionAndAdventureSeriesURL,
    animationSeriesURL,
    comedySeriesURL,
    crimeSeriesURL,
    documentarySeriesURL,
    kidsSeriesURL,
    trendingMoviesURL,
    trendingSeriesURL,
    apiKey,
} from '../constants';
import axios from 'axios';

export const getAllDataOptimize = async () => {
    try {
        const result = await Promise.all([
            await (await axios.get(trendingURL)).data?.results,
            await (await axios.get(topMoviesURL)).data?.results,
            await (await axios.get(topTVSeriesURL)).data?.results,

            await (await axios.get(actionAndAdventureMoviesURL)).data?.results,
            await (await axios.get(animationMoviesURL)).data?.results,
            await (await axios.get(comedyMoviesURL)).data?.results,
            await (await axios.get(crimeMoviesURL)).data?.results,
            await (await axios.get(documentaryMoviesURL)).data?.results,
            await (await axios.get(kidsMoviesURL)).data?.results,

            await (await axios.get(actionAndAdventureSeriesURL)).data?.results,
            await (await axios.get(animationSeriesURL)).data?.results,
            await (await axios.get(comedySeriesURL)).data?.results,
            await (await axios.get(crimeSeriesURL)).data?.results,
            await (await axios.get(documentarySeriesURL)).data?.results,
            await (await axios.get(kidsSeriesURL)).data?.results,

            await (await axios.get(trendingMoviesURL)).data?.results,
            await (await axios.get(trendingSeriesURL)).data?.results,
        ]);
        return result;
    } catch (error) {
        console.log(error);
        alert(error);
        return [];
    }
};

export const fetchIndivisualData = async (param) => {
    let { typeId, type } = param;
    if (type === 'Movie') type = 'movie';
    else type = 'tv';

    try {
        const { data } = await axios(
            `https://api.themoviedb.org/3/${type}/${typeId}?api_key=${apiKey}&language=en-US`
        );
        const {
            backdrop_path,
            genres,
            id,
            original_title,
            runtime,
            title,
            tagline,
            release_date,
            poster_path,
            overview,
            name,
            original_name,
            first_air_date,
            number_of_episodes,
        } = data;
        return {
            backdrop_path,
            genres,
            id,
            original_title,
            runtime,
            title,
            tagline,
            release_date,
            poster_path,
            overview,
            name,
            original_name,
            first_air_date,
            number_of_episodes,
        };
    } catch (error) {
        console.log(error);
        return {};
    }
};
