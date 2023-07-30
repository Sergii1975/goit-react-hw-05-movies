import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { fetchMovieDetails } from "services/API";
// import css from './MovieDetails.module.css';



const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const location = useLocation();
  const { title, poster_path, genres, vote_average, release_date, overview } = details;
  const backLinkLocationRef = useRef(location.state?.from ?? './movies');
  const getDate = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average * 10);
    
  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId)
      .then(response => setDetails({ ...response }))
      .catch(error => {
        console.error("Error fetching video data:", error);
      });
  }, [movieId]);
  
 
  return (
    <div>
      <Link to={backLinkLocationRef.current}> <button type="button">Go back</button></Link>
      {details && (
        <div>
          <div>
            <img
              src={
                poster_path
                  ? 'https://image.tmdb.org/t/p/w300' + poster_path
                  : 'https://via.placeholder.com/300x450'
              }
              width={300}
              height={450}
              alt="title"
            />
            <div>
              <h2>{title} ({getDate})</h2>
              <p>User score: {userScore}%</p>
              <h3>Overview:</h3>
              <p>{overview}</p>
              <h3>Genres:</h3>
              {genres?.map(genre => (
                <li key={genre.id}>{genre.name ? genre.name : 'Unknown'}</li>))}
            </div>
          </div>
          <div>
            <h3>Additional information:</h3>
            <ul>
              <li><NavLink to="cast">Cast</NavLink></li>
              <li><NavLink to="reviews">Movie review</NavLink></li>
            </ul>
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;