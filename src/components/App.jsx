import { Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import {Layout} from './Layout/Layout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast'

const Home = lazy(() => import("../pages/Home/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));
const Cast = lazy(() => import("../components/Cast/Cast"))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
