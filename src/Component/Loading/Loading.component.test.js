import React from 'react';
import { render } from '@testing-library/react';

import Loading from './Loading.component';

describe('Loading', () => {
  describe('#render', () => {
    it('should render loading text', () => {
      const wrapper = render(<Loading />);
      const { getByText } = wrapper;

      expect(getByText('Loading...')).toBeTruthy();
    });
  });
});
