import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import CategoryItem from './CategoryItem.component';
import config from './CategoryItem.config';

const { categoryDetails } = config;

describe('CategoryItem', () => {
  let wrapper;
  const setCategory = jest.fn();
  const onClickCategory = jest.fn();
  const onClickReset = jest.fn();
  const currentCategory = 'popular';

  const props = {
    setCategory,
    onClickCategory,
    onClickReset,
    currentCategory
  };

  beforeEach(() => {
    wrapper = render(<CategoryItem {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#render', () => {
    it('should render category items and reset button', () => {
      const { getByText } = wrapper;

      expect(getByText(categoryDetails[0].displayName)).toBeTruthy();
      expect(getByText(categoryDetails[1].displayName)).toBeTruthy();
      expect(getByText(categoryDetails[2].displayName)).toBeTruthy();
      expect(getByText(categoryDetails[3].displayName)).toBeTruthy();
      expect(getByText('Reset')).toBeTruthy();
    });
  });

  describe('#onClick', () => {
    it('should invoke setCategory and onClickCategory with category value', async () => {
      const { getByText } = wrapper;
      const categoryItem = getByText(categoryDetails[0].displayName);
      const categoryValue = categoryDetails[0].category;

      await fireEvent.click(categoryItem);

      expect(onClickCategory).toHaveBeenCalledWith(categoryValue);
      expect(setCategory).toHaveBeenCalledWith(categoryValue);
    });
  });
});
