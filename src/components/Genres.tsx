import { forwardRef, useEffect, useState } from 'react';
import GenrePill from './GenrePill';
import { GenreProps } from '../interfaces';

const Genres = forwardRef<HTMLDivElement | null>((_, ref) => {
  const [movieGenres, setMovieGenres] = useState<GenreProps[]>([]);
  const [seriesGenres, setSeriesGenres] = useState<GenreProps[]>([]);

  const fetchData = async (
    type: string,
    updateData: React.Dispatch<React.SetStateAction<GenreProps[]>>
  ) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    const data = await res.json();
    updateData(data.genres);
  };

  useEffect(() => {
    fetchData('movie', setMovieGenres);
    fetchData('tv', setSeriesGenres);
  }, []);

  const movieGenresPill = movieGenres?.map((genre) => {
    return <GenrePill key={genre.id} text={genre.name} />;
  });

  const seriesGenresPill = seriesGenres?.map((genre) => {
    return <GenrePill key={genre.id} text={genre.name} />;
  });

  return (
    <div className='bg-my-black text-my-white py-20' id='genres' ref={ref}>
      <div className='container mx-auto flex gap-10 px-4 flex-col lg:flex-row'>
        <img
          src='https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='h-80 object-cover rounded-lg lg:h-auto'
          loading='lazy'
        />
        <div>
          <p className='text-my-white text-4xl font-bold lg:text-5xl xl:text-6xl'>
            Genres
          </p>
          <p className='max-w-2xl'>
            Discover the Best Movie Genres for Every Mood: Action, Comedy,
            Drama, Horror, Romance, Sci-fi, and Documentary - Find Your Perfect
            Film Today!
          </p>
          <div className='mt-14'>
            <p className='text-2xl pb-4'>
              Availalble genres for{' '}
              <span className='text-my-red font-bold'>Movies:</span>
            </p>
            <div className='flex gap-4 max-w-4xl flex-wrap'>
              {movieGenresPill}
            </div>
          </div>
          <div className='mt-10'>
            <p className='text-2xl pb-4'>
              Availalble genres for{' '}
              <span className='text-my-red font-bold'>TV Series:</span>
            </p>
            <div className='flex gap-4 max-w-4xl flex-wrap'>
              {seriesGenresPill}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Genres;
