const NOW_PLAYING = 'now_playing';
const POPULAR = 'popular';
const TOP_RATED = 'top_rated';
const UPCOMING = 'upcoming';

const categories = [NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING];

const categoryDetails = [
  { category: NOW_PLAYING, uri: '/movie/now_playing', displayName: 'Now Playing' },
  { category: POPULAR, uri: '/movie/popular', displayName: 'Popular' },
  { category: TOP_RATED, uri: '/movie/top_rated', displayName: 'Top Rated' },
  { category: UPCOMING, uri: '/movie/upcoming', displayName: 'Upcoming' }
];

export default { categoryDetails, categories };
