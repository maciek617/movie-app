export const popularMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${
  import.meta.env.VITE_API_KEY
}&sort_by=popularity.desc&page=1`;

export const topRatedTVSeries = `https://api.themoviedb.org/3/tv/top_rated?api_key=${
  import.meta.env.VITE_API_KEY
}&language=en-US&page=1`;
