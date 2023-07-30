import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "services/API";
import SearchForm from "components/SearchForm/SearchForm";
import MoviesList from "components/MoviesList/MoviesList";
// import css from './Movies.module.css';


  const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = (value) => {
    setSearchParams({ query: value })
  };

 useEffect(() => {
    if (!query) return;
    fetchSearchMovies(query).then(response => setMovies([...response]));
  }, [query]);
  
  return (<div>
      <SearchForm location={location} onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
  </div>)
};

export default Movies;