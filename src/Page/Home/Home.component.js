// @flow

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../Component/Header/Header.component';
import Card from '../../Component/Card/Card.component';
import Loading from '../../Component/Loading/Loading.component';
import Reload from '../../Component/Reload/Reload.component';
import Constant from '../../Constant';
import {
  StyledCardContainer,
  LoadMoreButton
} from './Home.styles';
import handlers from './Home.handlers';
import { Props } from './Home.type';

const { resetSearchAndCategories, getMoviesByCategory, onClickLoadMore } = handlers;
const {
  searchURI,
  getMoviesURI
} = Constant;

const Home = (props: Props) => {
  const { axios } = props;
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoadMoreAvailable, setIsLoadMoreAvaiable] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(getMoviesURI);
      setTotalPage(response.total_pages);
      setMovies(response.data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (page < totalPage) {
      setIsLoadMoreAvaiable(false);
    }
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [keyword, category]);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(`${searchURI}?query=${keyword}`);
      const data = response.data.results;

      setMovies(data);
      setLoading(false);
      setCategory('');
    } catch (err) {
      setError(true);
    }
  };

  const renderLoadingOrErrorScreen = () => {
    if (loading) {
      return (<Loading />);
    }
    return (<Reload />);
  };

  return loading || error
    ? renderLoadingOrErrorScreen()
    : (
      <>
        <Header
          searchMovie={searchMovie}
          keyword={keyword}
          setKeyword={setKeyword}
          setCategory={setCategory}
          onClickReset={() => resetSearchAndCategories({
            axios,
            setMovies,
            setKeyword,
            setCategory,
            setLoading,
            setError
          })}
          onClickCategory={(selectedItem) => getMoviesByCategory(
            axios,
            selectedItem,
            setMovies,
            setLoading,
            setError,
            setKeyword
          )}
          category={category}
          id="Header"
        />
        <StyledCardContainer className="pt-10 pb-10">
          <Card movies={movies} navigate={navigate} id="Card" />
          {movies.length > 1 && (
          <LoadMoreButton
            disabled={!isLoadMoreAvailable}
            onClick={() => onClickLoadMore({
              axios,
              category,
              keyword,
              setMovies,
              setLoading,
              setError,
              setPage,
              page,
              movies
            })}
            className="p-4 text-base/6 cursor-pointer"
            id="Load_More"
          >
            Load more...
          </LoadMoreButton>
          )}
        </StyledCardContainer>
      </>
    );
};

export default Home;
