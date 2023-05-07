import Movie from './Movie';
import { PopularMoviesProps } from '../interfaces';
import { forwardRef } from 'react';

const Movies: React.FC<PopularMoviesProps> = forwardRef<
  HTMLDivElement | null,
  PopularMoviesProps
>(({ ...props }, ref) => {
  const movies = props.movies?.map((movie) => {
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
  return (
    <div className='bg-my-black pt-20' ref={ref} id={props.id}>
      <div className='container mx-auto px-4 pb-10'>
        <p className='text-my-white text-4xl font-bold pb-8'>{props.title}</p>
        <div className='flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:justify-center lg:justify-center'>
          {movies}
        </div>
      </div>
    </div>
  );
});

export default Movies;
