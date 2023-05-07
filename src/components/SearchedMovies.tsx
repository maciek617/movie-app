import Movie from './Movie';
import Button from './Button';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery } from '../features/querySlice';
import type { RootState } from '../app/store';
import { MovieProps } from '../interfaces';
import { fetchSearchData } from '../api';

const SearchedMovies: React.FC = () => {
  const [searchedMovies, setSearchedMovies] = useState<MovieProps[]>([]);
  const [movieQuery, setMovieQuery] = useState<string>('');
  const query = useSelector((state: RootState) => state.query.value);
  const dispatch = useDispatch();

  const searchForMovies = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateQuery(movieQuery));
  };

  useEffect(() => {
    const fetchData = async () => {
      setSearchedMovies(await fetchSearchData(query));
    };

    if (!query) return;
    fetchData();
  }, [query]);

  const movies = searchedMovies?.map((movie) => {
    return (
      <Movie
        key={movie.id}
        title={movie.title ? movie.title : movie.name ? movie.name : 'No data'}
        poster_path={movie.poster_path}
        release_date={
          movie.release_date
            ? movie.release_date
            : movie.first_air_date
            ? movie.first_air_date
            : 'No data'
        }
        vote_average={movie.vote_average}
        id={movie.id}
      />
    );
  });

  return query ? (
    <div className='bg-my-black text-my-white' id='results'>
      <div className='container mx-auto px-4'>
        <p className='text-my-white text-4xl font-bold'>Results</p>
        <p className='mt-6 text-xl'>Search again</p>
        <form
          onSubmit={(e) => searchForMovies(e)}
          className='flex flex-col items-start gap-3 md:flex-row'
        >
          <input
            type='text'
            placeholder='Search...'
            className='px-4 py-2 text-black rounded-lg'
            onChange={(e) => setMovieQuery(e.target.value)}
            value={movieQuery}
          />
          <Button text='Search' fullWidth={false} />
        </form>
        <div className='flex gap-10 justify-center mt-10 flex-wrap'>
          {movies}
        </div>
      </div>
    </div>
  ) : null;
};

export default SearchedMovies;
