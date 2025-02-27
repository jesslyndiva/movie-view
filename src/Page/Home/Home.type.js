// @flow

export type Axios = { get: Function }

export type Props = {
  axios: Axios
};

export type ResetSearchAndCategoriesParams = {
  axios: Axios,
  setMovies: Function,
  setKeyword: Function,
  setCategory: Function,
  setLoading: Function,
  setError: Function
}

export type OnClickLoadMoreParams = {
  axios: Axios,
  category: String,
  keyword: String,
  setMovies: Function,
  setLoading: Function,
  setError: Function,
  setPage: Function,
  page: Number,
  movies: Array<Object>
}
