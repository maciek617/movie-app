import { NavigationProps } from '../interfaces';
import { useState, useCallback, useEffect } from 'react';
import { useIsInViewport } from '../hooks/useIsInViewport';
import { scrollIntoView } from '../helpers/scrollIntoView';

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [showNavOnScroll, setShowNavOnScroll] = useState<boolean>(true);
  const [y, setY] = useState<number>(0);

  const handleShowNavigation = useCallback((): void => {
    if (!window) return;
    if (window.innerWidth < 1024) return;
    setShowNavOnScroll(window.scrollY < y);
    setY(window.scrollY);
  }, [y]);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleShowNavigation);

    return () => {
      window.removeEventListener('scroll', handleShowNavigation);
    };
  }, [handleShowNavigation]);

  const movies = useIsInViewport(props.movies, 0.2);
  const series = useIsInViewport(props.series, 0.1);
  const genres = useIsInViewport(props.genres, 0);

  const closeNavigation = (where: string) => {
    scrollIntoView(where);
    setOpenNav(false);
  };
  return (
    <>
      <nav
        className={`fixed w-full text-my-white py-4 bg-darken ${
          y ? 'lg:bg-darken' : 'lg:bg-transparent'
        } h-screen ${
          openNav ? 'translate-x-0' : '-translate-x-full'
        } transition-all lg:h-auto lg:translate-x-0 ${
          showNavOnScroll ? 'lg:translate-y-0' : 'lg:-translate-y-full'
        }`}
      >
        <div className='container mx-auto flex justify-between px-4 flex-col gap-10 lg:flex-row lg:gap-0'>
          <div>
            <p className='text-3xl'>
              Cine<span className='font-bold text-my-red'>Magic</span>
            </p>
          </div>
          <ul className='flex flex-col text-xl lg:flex-row lg:gap-10 xl:gap-12 2xl:gap-14'>
            <li
              onClick={() => closeNavigation('home')}
              className={`cursor-pointer ${
                !movies && !series && !genres && 'text-my-red'
              }`}
            >
              Home
            </li>
            <li
              onClick={() => closeNavigation('movies')}
              className={`cursor-pointer ${movies && 'text-my-red'}`}
            >
              Movies
            </li>
            <li
              onClick={() => closeNavigation('series')}
              className={`cursor-pointer ${series && !movies && 'text-my-red'}`}
            >
              TV series
            </li>
            <li
              onClick={() => closeNavigation('genres')}
              className={`cursor-pointer ${genres && !series && 'text-my-red'}`}
            >
              Genres
            </li>
          </ul>
        </div>
      </nav>
      <div
        onClick={() => setOpenNav((openNav) => (openNav = !openNav))}
        className='fixed top-3 right-3 text-3xl text-my-white lg:hidden'
      >
        <i className={`fa-solid fa-bars-staggered ${openNav && 'hidden'}`}></i>
        <i className={`fa-solid fa-xmark ${!openNav && 'hidden'}`}></i>
      </div>
    </>
  );
};

export default Navigation;
