import React from 'react';
import { render } from '@testing-library/react';

import Reload from './Reload.component';

describe('Reload', () => {
  describe('#render', () => {
    it('should render reload text', () => {
      const wrapper = render(<Reload />);
      const { getByText } = wrapper;

      expect(getByText('Click reset to refetch or display home page')).toBeTruthy();
    });
  });
});
