import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Card from './Card.component';
import { movies } from '../../Fixture';

describe('Card', () => {
  let wrapper;
  const navigate = jest.fn();

  const props = {
    movies, navigate
  };

  beforeEach(() => {
    wrapper = render(<Card {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#render', () => {
    it('should render movies', () => {
      const { getByText } = wrapper;

      expect(getByText(movies[0].title)).toBeTruthy();
      expect(getByText(movies[1].title)).toBeTruthy();
      expect(getByText(movies[2].title)).toBeTruthy();
    });
  });

  describe('#onClick', () => {
    it('should invoke navigate with correct path and params', async () => {
      const { getByTestId } = wrapper;
      const firstMovieCard = getByTestId(movies[0].id);

      await fireEvent.click(firstMovieCard);

      expect(navigate).toHaveBeenCalledTimes(1);
    });
  });
});
