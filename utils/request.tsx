const API_KEY = process.env.API_KEY;



const request = {
  trending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  "top-rated": {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  action: {
    title: "Action",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  comedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  horror: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  romance: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },

  mystery: {
    title: "Mystry",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  scifi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  western: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  animation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  tv: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};


export type TGenres= keyof typeof request;

export default request;