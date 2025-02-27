import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

import Detail from './Detail.component';
import { movieDetail, detailResponse } from '../../Fixture';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      movieId: 950396
    }
  }),
  useNavigate: jest.fn().mockReturnValue(jest.fn())
}));

describe('Detail', () => {
  let wrapper;
  const axios = {
    get: jest.fn()
  };
  const props = { axios };

  beforeEach(() => {
    axios.get.mockResolvedValue(detailResponse);
    wrapper = render(<Detail {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#render', () => {
    it('should render detail page with back button and movie details', () => {
      const { getByText } = wrapper;
      const genres = 'Romance, Science Fiction, Thriller';
      const releaseDate = 'Feb 2025';
      const runtime = '127 minutes';
      const productionCompanies = 'Skydance Media, Crooked Highway, Apple Studios';

      expect(getByText('Back')).toBeTruthy();
      expect(getByText(movieDetail.title)).toBeTruthy();
      expect(getByText(movieDetail.tagline)).toBeTruthy();
      expect(getByText(movieDetail.overview)).toBeTruthy();
      expect(getByText(genres)).toBeTruthy();
      expect(getByText(releaseDate)).toBeTruthy();
      expect(getByText(runtime)).toBeTruthy();
      expect(getByText(productionCompanies)).toBeTruthy();
    });
  });

  describe('#onBackButtonClick', () => {
    it('should invoke navigate with correct path when back button clicked', async () => {
      const navigate = useNavigate();
      const { getByText } = wrapper;
      const backButton = getByText('Back');

      await fireEvent.click(backButton);

      expect(navigate).toBeCalledWith('/');
    });
  });
});
