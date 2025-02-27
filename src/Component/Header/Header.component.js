// @flow

import * as React from 'react';

import CategoryItems from './CategoryItem/CategoryItem.component';
import {
  StyledContainer,
  StyledTitle,
  StyledSearchContainer,
  SearchButton,
  StyledInputText,
  StyledUpperContent,
  StyledLowerContent
} from './Header.styles';
import { Props } from './Header.type';

const Header = (props: Props) => {
  const {
    searchMovie,
    keyword,
    setKeyword,
    setCategory,
    onClickReset,
    onClickCategory,
    category
  } = props;

  return (
    <StyledContainer>
      <StyledUpperContent>
        <StyledTitle className="pl-10 text-4xl/7">Moviews</StyledTitle>
        <StyledSearchContainer>
          <form onSubmit={searchMovie} id="Search_Form">
            <StyledInputText
              type="text"
              name="query"
              placeholder="Search Movie Name"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              id="Search_Input"
              className="p-4 text-base/7"
            />
            <SearchButton
              type="submit"
              className="p-4 text-base/7 cursor-pointer"
              disabled={keyword === ''}
            >
              Search
            </SearchButton>
          </form>
        </StyledSearchContainer>
      </StyledUpperContent>
      <StyledLowerContent>
        <CategoryItems
          setCategory={setCategory}
          onClickCategory={onClickCategory}
          onClickReset={onClickReset}
          currentCategory={category}
        />
      </StyledLowerContent>
    </StyledContainer>
  );
};

export default Header;
