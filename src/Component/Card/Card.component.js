// @flow

import React from 'react';

import Reload from '../Reload/Reload.component';
import {
  StyledListContainer,
  StyledImageContainer,
  StyledCardContainer,
  MovieTitle,
  MovieYear
} from './Card.styles';
import { Props } from './Card.type';

const Card = (props: Props) => {
  const { movies, navigate } = props;
  const imageURI = 'https://image.tmdb.org/t/p/w185';

  const getMovieYear = (date) => date.substring(0, 4);

  if (movies.length > 1) {
    return (
      <StyledListContainer>
        {movies.filter((movie) => movie.poster_path).map((movie) => {
          const imagePath = `${imageURI}${movie.poster_path}`;
          return (
            <StyledCardContainer
              onClick={() => navigate(
                '/detail',
                { state: { movieId: movie.id } }
              )}
              id={movie.id}
              className="p-2"
            >
              <div key={movie.title}>
                <StyledImageContainer>
                  <img src={imagePath} alt="poster" />
                </StyledImageContainer>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieYear>{getMovieYear(movie.release_date)}</MovieYear>
              </div>
            </StyledCardContainer>
          );
        })}
      </StyledListContainer>
    );
  }

  return <Reload />;
};

export default Card;
