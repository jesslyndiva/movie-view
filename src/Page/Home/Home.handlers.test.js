import homeHandlers from './Home.handlers';
import { moviesResponse, movies } from '../../Fixture';

const {
  resetSearchAndCategories,
  getMoviesByCategory,
  onClickLoadMore
} = homeHandlers;

describe('HomeHandlers', () => {
  const axios = {
    get: jest.fn()
  };
  const setMovies = jest.fn();
  const setKeyword = jest.fn();
  const setCategory = jest.fn();
  const setLoading = jest.fn();
  const setError = jest.fn();
  const setPage = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#resetSearchAndCategories', () => {
    const params = {
      axios,
      setMovies,
      setKeyword,
      setCategory,
      setLoading,
      setError
    };

    it('should call axios.get and setters with correct params', async () => {
      axios.get.mockResolvedValue(moviesResponse);

      await resetSearchAndCategories(params);

      expect(axios.get).toHaveBeenCalledWith('/discover/movie');
      expect(setMovies).toHaveBeenCalledWith(moviesResponse.data.results);
      expect(setKeyword).toHaveBeenCalledWith('');
      expect(setCategory).toHaveBeenCalledWith('');
      expect(setError).toHaveBeenCalledWith(false);
      expect(setLoading).toHaveBeenCalledTimes(2);
    });

    it('should call setError with true if axios call fails', async () => {
      axios.get.mockRejectedValue(new Error());

      await resetSearchAndCategories(params);

      expect(setError).toHaveBeenCalledWith(true);
      expect(setLoading).toHaveBeenCalledTimes(2);
    });
  });

  describe('#getMoviesByCategory', () => {
    const category = 'popular';

    it('should call axios.get and setters with correct params', async () => {
      axios.get.mockResolvedValue(moviesResponse);

      await getMoviesByCategory(
        axios,
        category,
        setMovies,
        setLoading,
        setError,
        setKeyword
      );

      expect(axios.get).toHaveBeenCalledWith('/movie/popular');
      expect(setMovies).toHaveBeenCalledWith(moviesResponse.data.results);
      expect(setLoading).toHaveBeenCalledTimes(2);
      expect(setError).not.toHaveBeenCalled();
    });

    it('should call setError with true if axios call fails', async () => {
      axios.get.mockRejectedValue(new Error());

      await getMoviesByCategory(
        axios,
        category,
        setMovies,
        setLoading,
        setError
      );

      expect(setError).toHaveBeenCalledWith(true);
      expect(setLoading).toHaveBeenCalledTimes(2);
    });
  });

  describe('#onClickLoadMore', () => {
    const category = 'popular';
    const keyword = '';
    const page = 1;
    const params = {
      axios,
      category,
      keyword,
      setMovies,
      setLoading,
      setError,
      setPage,
      page,
      movies
    };

    it('should call axios.get with URI containing categories when categories exists', async () => {
      axios.get.mockResolvedValue(moviesResponse);

      await onClickLoadMore(params);

      expect(axios.get).toHaveBeenCalledWith('/movie/popular?page=2');
      expect(setMovies).toHaveBeenCalledWith([...movies, ...moviesResponse.data.results]);
      expect(setLoading).toHaveBeenCalledTimes(2);
      expect(setPage).toHaveBeenCalledWith(page + 1);
    });

    it('should call axios.get with URI containing keyword query when keyword exists', async () => {
      axios.get.mockResolvedValue(moviesResponse);

      await onClickLoadMore({ ...params, keyword: 'abc', category: '' });

      expect(axios.get).toHaveBeenCalledWith('/search/movie?query=abc&page=2');
    });

    it('should call axios.get with discover URI when there is no category and keyword', async () => {
      axios.get.mockResolvedValue(moviesResponse);

      await onClickLoadMore({ ...params, keyword: '', category: '' });

      expect(axios.get).toHaveBeenCalledWith('/discover/movie?page=2');
    });

    it('should call setError with true if axios call fails', async () => {
      axios.get.mockRejectedValue(new Error());

      await onClickLoadMore(params);

      expect(setError).toHaveBeenCalledWith(true);
      expect(setLoading).toHaveBeenCalledTimes(2);
    });
  });
});
