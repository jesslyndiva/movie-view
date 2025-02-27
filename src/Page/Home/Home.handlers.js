// @flow

import Constant from '../../Constant';
import {
  ResetSearchAndCategoriesParams,
  OnClickLoadMoreParams,
  Axios
} from './Home.type';

const {
  getMoviesURI,
  categoryBaseURI,
  searchURI
} = Constant;

const resetSearchAndCategories = async (params: ResetSearchAndCategoriesParams) => {
  const {
    axios, setMovies, setKeyword,
    setCategory, setLoading, setError
  } = params;

  try {
    setLoading(true);

    const response = await axios.get(getMoviesURI);
    const data = response.data.results;

    setMovies(data);
    setKeyword('');
    setCategory('');
    setLoading(false);
    setError(false);
  } catch (err) {
    setError(true);
    setLoading(false);
  }
};

const getMoviesByCategory = async (
  axios: Axios,
  category: String,
  setMovies: Function,
  setLoading: Function,
  setError: Function,
  setKeyword: Function
) => {
  const categoryURI = `${categoryBaseURI}${category}`;

  try {
    setLoading(true);
    const response = await axios.get(categoryURI);
    const data = response.data.results;

    setMovies(data);
    setLoading(false);
    setKeyword('');
  } catch (err) {
    setError(true);
    setLoading(false);
  }
};

const getLoadMoreURI = (keyword: String, category: String, page: Number) => {
  if (keyword !== '') {
    return `${searchURI}?query=${keyword}&page=${page + 1}`;
  }

  if (category !== '') {
    return `${categoryBaseURI}${category}?page=${page + 1}`;
  }

  return `${getMoviesURI}?page=${page + 1}`;
};

const onClickLoadMore = async (params: OnClickLoadMoreParams) => {
  const {
    axios, category, keyword, setMovies,
    setLoading, setError, setPage, page, movies
  } = params;
  const currentURI = getLoadMoreURI(keyword, category, page);

  try {
    setLoading(true);

    const response = await axios.get(currentURI);
    const data = response.data.results;

    setPage(page + 1);
    setMovies([...movies, ...data]);
    setLoading(false);
  } catch (err) {
    setError(true);
    setLoading(false);
  }
};

export default {
  resetSearchAndCategories,
  getMoviesByCategory,
  onClickLoadMore
};
