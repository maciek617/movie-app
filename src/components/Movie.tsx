import { MovieProps } from '../interfaces';
import Button from './Button';

const Movie: React.FC<MovieProps> = (props: MovieProps) => {
  return (
    <div className='text-my-white w-fit'>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
        alt='picture of movie'
        className='w-72 h-96'
        loading='lazy'
      />
      <div className='mt-2'>
        <p className='text-xl font-[600] max-w-[285px] h-[80px]'>
          {props.title}
        </p>
        <div className='flex justify-between'>
          <p className='text-gray-400'>{props.release_date}</p>
          <p>
            <i className='fa-solid fa-star mr-2 text-yellow-400'></i>
            {props.vote_average}
          </p>
        </div>
        <a
          href={`https://www.themoviedb.org/movie/${props.id}-${props.title}`}
          target='_blank'
        >
          <Button text='See details' fullWidth={true} />
        </a>
      </div>
    </div>
  );
};

export default Movie;
