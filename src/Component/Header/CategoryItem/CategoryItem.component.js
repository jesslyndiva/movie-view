// @flow

import * as React from 'react';

import {
  StyledCategoryText,
  ResetButton
} from './CategoryItem.styles';
import { Props } from './CategoryItem.type';
import config from './CategoryItem.config';

const {
  categoryDetails, categories
} = config;

const CategoryItems = (props: Props) => {
  const {
    setCategory,
    onClickCategory,
    onClickReset,
    currentCategory
  } = props;

  const renderCategories = (category) => {
    const categoryItem = categoryDetails.find((item) => item.category === category);
    const categoryValue = categoryItem.category;

    return (
      <StyledCategoryText
        onClick={() => {
          setCategory(categoryValue);
          onClickCategory(categoryValue);
        }}
        currentCategory={currentCategory}
        key={categoryValue}
        className={categoryValue}
      >
        {categoryItem.displayName}
      </StyledCategoryText>
    );
  };

  return (
    <>
      {categories.map((category) => renderCategories(category))}
      <ResetButton onClick={() => onClickReset()} className="text-lg/7 p-2.5">Reset</ResetButton>
    </>

  );
};

export default CategoryItems;
