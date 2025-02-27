export const movies = [
  {
    backdrop_path: '/9nhjGaFLKtddDPtPaX5EmKqsWdH.jpg',
    id: 950396,
    original_title: 'The Gorge',
    overview: 'Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive what lies within.',
    poster_path: '/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg',
    release_date: '2025-02-13',
    title: 'The Gorge'
  },
  {
    backdrop_path: '/cVh8Af7a9JMOJl75ML3Dg2QVEuq.jpg',
    id: 762509,
    original_title: 'Mufasa: The Lion King',
    overview: 'Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.',
    poster_path: '/9bXHaLlsFYpJUutg4E6WXAjaxDi.jpg',
    release_date: '2024-12-18',
    title: 'Mufasa: The Lion King'
  },
  {
    backdrop_path: '/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg',
    id: 939243,
    original_title: 'Sonic the Hedgehog 3',
    overview: 'Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.',
    poster_path: '/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg',
    release_date: '2024-12-19',
    title: 'Sonic the Hedgehog 3'
  }
];

export const moviesResponse = {
  page: 1,
  data: {
    results: movies
  },
  total_pages: 48862,
  total_results: 977232
};

export const movieDetail = {
  genres: [
    {
      id: 10749,
      name: 'Romance'
    },
    {
      id: 878,
      name: 'Science Fiction'
    },
    {
      id: 53,
      name: 'Thriller'
    }
  ],
  id: 950396,
  origin_country: [
    'US'
  ],
  original_language: 'en',
  original_title: 'The Gorge',
  overview: 'Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive what lies within.',
  poster_path: '/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg',
  production_companies: [
    {
      id: 82819,
      logo_path: '/gXfFl9pRPaoaq14jybEn1pHeldr.png',
      name: 'Skydance Media',
      origin_country: 'US'
    },
    {
      id: 162439,
      logo_path: '/h9hG1svKeylr9KqUOGmO4i3wRP0.png',
      name: 'Crooked Highway',
      origin_country: 'US'
    },
    {
      id: 194232,
      logo_path: '/oE7H93u8sy5vvW5EH3fpCp68vvB.png',
      name: 'Apple Studios',
      origin_country: 'US'
    }
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America'
    }
  ],
  release_date: '2025-02-13',
  runtime: 127,
  status: 'Released',
  tagline: "The world's most dangerous secret lies between them.",
  title: 'The Gorge'
};

export const detailResponse = {
  data: movieDetail
};
