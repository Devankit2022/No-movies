export const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export const trendingURL = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`;

export const topMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;

export const topTVSeriesURL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US`;

export const actionAndAdventureSeriesURL = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=10759&with_watch_monetization_types=free&with_status=0&with_type=0`;

export const animationSeriesURL = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=16&with_watch_monetization_types=free&with_status=0&with_type=0`;

export const comedySeriesURL = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=35&with_watch_monetization_types=free&with_status=0&with_type=0`;

export const crimeSeriesURL = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=80&with_watch_monetization_types=free&with_status=0&with_type=0`;

export const documentarySeriesURL = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=99&with_watch_monetization_types=free&with_status=0&with_type=0`;

export const kidsSeriesURL = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=10762&with_watch_monetization_types=free&with_status=0&with_type=0`;

export const actionAndAdventureMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=18&with_watch_monetization_types=free`;

export const animationMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=16&with_watch_monetization_types=free`;

export const comedyMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=35&with_watch_monetization_types=free`;

export const crimeMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=80&with_watch_monetization_types=free`;

export const documentaryMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=99&with_watch_monetization_types=free`;

export const kidsMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=10751&with_watch_monetization_types=free`;

export const trendingMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

export const trendingSeriesURL = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US`;

export const searchURL = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US`;

export const imageBaseURL = `https://image.tmdb.org/t/p/original`;
