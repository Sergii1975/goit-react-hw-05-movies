import { fetchTrendingMovies } from "services/API";
import { useState, useEffect } from 'react';
import MoviesList from "components/MoviesList/MoviesList";
import { Container, HeadTitle } from "./Home.styled";


const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response))
  }, []);
  
  return <Container>
    <HeadTitle>Trending today</HeadTitle>
    <MoviesList movies={movies} />
  </Container>
};

export default Home;