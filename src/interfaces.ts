import { Ref, MutableRefObject } from 'react';

export interface MovieProps {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  id: number;
  name?: string;
  first_air_date?: string;
}

export interface PopularMoviesProps {
  movies: Array<MovieProps> | undefined;
  title: string;
  ref: Ref<HTMLDivElement | null>;
  id: string;
}

export interface ButtonProps {
  text: string;
  fullWidth: boolean;
}

export interface NavigationProps {
  movies: MutableRefObject<HTMLDivElement | null>;
  series: MutableRefObject<HTMLDivElement | null>;
  genres: MutableRefObject<HTMLDivElement | null>;
}

export interface GenreProps {
  id: number;
  name: string;
}

export interface QueryState {
  value: string;
}