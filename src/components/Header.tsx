import { useDispatch } from 'react-redux';
import Button from './Button';
import { useState } from 'react';
import { updateQuery } from '../features/querySlice';

const Header: React.FC = () => {
  const [movieQuery, setMovieQuery] = useState<string>('');
  const dispatch = useDispatch();

  const searchForMovies = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!movieQuery) return;
    dispatch(updateQuery(movieQuery));
    setMovieQuery('');
    window.innerWidth < 758 ? window.scrollTo(0, 330) : window.scrollTo(0, 700);
  };

  return (
    <div
      className='bg-hero-pattern h-[50vh] bg-no-repeat bg-cover text-my-white flex items-center justify-center flex-col lg:h-[75vh]'
      id='home'
    >
      <h1 className='text-3xl text-center font-semibold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
        Search for any movie
      </h1>
      <form
        onSubmit={(e) => searchForMovies(e)}
        className='mt-5 flex flex-col items-center gap-3 md:flex-row '
        data-testid="form"
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
    </div>
  );
};

export default Header;
