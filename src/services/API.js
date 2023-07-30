import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = "c973f8aa883791c9603fdbcdf4887f27";


async function fetchTrendingMovies () {
  try {
    const response = await axios.get(
      `trending/all/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

async function fetchSearchMovies(query) {
   try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

async function fetchMovieDetails(id) {
   try {
    const response = await axios.get(
      `movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

async function fetchMovieCast(id) {
   try {
    const response = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

async function fetchMovieReviews(id) {
   try {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export { fetchTrendingMovies, fetchSearchMovies, fetchMovieDetails, fetchMovieCast, fetchMovieReviews };
