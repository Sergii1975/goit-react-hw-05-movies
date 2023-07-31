import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { fetchMovieDetails } from "services/API";
import { MovieContainer, MovieBox, MovieImage, MovieTitle, MovieText, DescriptionTitle, EditionalTitle, AddWrapper } from "./MovieDetails.styled";


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
    <MovieContainer>
      <Link to={backLinkLocationRef.current}> <button type="button">Go back</button></Link>
      {details && (
        <div>
          <MovieBox>
            <MovieImage
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
              <MovieTitle>{title} ({getDate})</MovieTitle>
              <MovieText>User score: {userScore}%</MovieText>
              <DescriptionTitle>Overview:</DescriptionTitle>
              <MovieText>{overview}</MovieText>
              <DescriptionTitle>Genres:</DescriptionTitle>
              {genres?.map(genre => (
                <li key={genre.id}>{genre.name ? genre.name : 'Unknown'}</li>))}
            </div>
          </MovieBox>
          <div>
            <DescriptionTitle>Additional information:</DescriptionTitle>
            <AddWrapper>
              <li><EditionalTitle to="cast">Cast</EditionalTitle></li>
              <li><EditionalTitle to="reviews">Reviews</EditionalTitle></li>
            </AddWrapper>
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MovieContainer>
  );
};

export default MovieDetails;