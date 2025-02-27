import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header from './Header.component';

describe('Header', () => {
  let wrapper;
  const searchMovie = jest.fn();
  const setKeyword = jest.fn();
  const setCategory = jest.fn();
  const onClickReset = jest.fn();
  const onClickCategory = jest.fn();
  const keyword = '';
  const category = '';

  const props = {
    searchMovie,
    keyword,
    setKeyword,
    setCategory,
    onClickReset,
    onClickCategory,
    category
  };

  beforeEach(() => {
    wrapper = render(<Header {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#render', () => {
    it('should render header component with title, search button, categories and reset button', () => {
      const { getByText } = wrapper;

      expect(getByText('Moviews')).toBeTruthy();
      expect(getByText('Search')).toBeTruthy();
      expect(getByText('Now Playing')).toBeTruthy();
      expect(getByText('Popular')).toBeTruthy();
      expect(getByText('Upcoming')).toBeTruthy();
      expect(getByText('Reset')).toBeTruthy();
    });
  });

  describe('#onChange', () => {
    it('should invoke setKeyword with inputted keyword', async () => {
      const { getByTestId } = wrapper;
      const textInput = getByTestId('Search_Input');

      await fireEvent.change(textInput, { target: { value: 'Dune' } });

      expect(setKeyword).toHaveBeenCalledWith('Dune');
    });
  });

  describe('#onSubmit', () => {
    it('should invoke searchMovie on form submit', async () => {
      const { getByTestId } = wrapper;
      const searchForm = getByTestId('Search_Form');
      const textInput = getByTestId('Search_Input');

      await fireEvent.change(textInput, { target: { value: 'Dune' } });
      await fireEvent.submit(searchForm);

      expect(searchMovie).toHaveBeenCalledTimes(1);
    });
  });
});
