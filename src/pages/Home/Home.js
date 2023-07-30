import { fetchTrendingMovies } from "services/API";
import { useState, useEffect } from 'react';
import MoviesList from "components/MoviesList/MoviesList";
import { Container, HeeadTitle } from "./Home.styled";
// import css from './Home.module.css';


const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response))
  }, []);
  
  return <Container>
    <HeeadTitle>Trending today</HeeadTitle>
    <MoviesList movies={movies} />
  </Container>
};

export default Home;