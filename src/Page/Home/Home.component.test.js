import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Home from './Home.component';
import { moviesResponse } from '../../Fixture';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn().mockReturnValue(jest.fn())
}));

describe('Home', () => {
  const axios = { get: jest.fn() };
  const props = { axios };

  describe('#render', () => {
    it('should render header and card', async () => {
      axios.get.mockResolvedValue(moviesResponse);
      const wrapper = render(<Home {...props} />);
      const { getByText } = wrapper;
      const titleText = await waitFor(() => getByText('Moviews'));

      expect(titleText).toBeTruthy();
      expect(getByText('The Gorge')).toBeTruthy();
      expect(getByText('2025')).toBeTruthy();
    });
  });
});
