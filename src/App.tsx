import { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Movies from './components/Movies';
import { MovieProps } from './interfaces';
import Footer from './components/Footer';
import Genres from './components/Genres';
import SearchedMovies from './components/SearchedMovies';
import { popularMovies, topRatedTVSeries } from './helpers/fetchItems';
import { fetchData } from './api';

function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [series, setSeries] = useState<MovieProps[]>([]);
  const [hasFetchedData, setHasFetchedData] = useState<boolean>(false);

  const moviesRef = useRef(null);
  const seriesRef = useRef(null);
  const genresRef = useRef(null);

  useEffect(() => {
    fetchMovies(popularMovies, setMovies);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const specificPoint = 1000;
      if (scrollY > specificPoint && !hasFetchedData) {
        fetchMovies(topRatedTVSeries, setSeries);
        setHasFetchedData(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasFetchedData]);

  const fetchMovies = async (
    type: string,
    updateData: React.Dispatch<React.SetStateAction<MovieProps[]>>
  ) => {
    updateData(await fetchData(type));
  };

  return (
    <>
      <Navigation movies={moviesRef} series={seriesRef} genres={genresRef} />
      <Header />
      <SearchedMovies />
      <Movies
        ref={moviesRef}
        movies={movies.slice(0, 16)}
        title='Popular movies'
        id='movies'
      />
      <Movies
        ref={seriesRef}
        movies={series.slice(0, 16)}
        title='Top rated TV Series'
        id='series'
      />
      <Genres ref={genresRef} />
      <Footer />
    </>
  );
}

export default App;
