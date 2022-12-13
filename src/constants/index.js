const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export const trendingURL = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`;

export const topMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;

export const topTVSeriesURL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US`;
