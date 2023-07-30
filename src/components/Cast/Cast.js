import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchMovieCast } from "services/API";
 import {CastBox, CastCard, CastDescription, CastText, CastImg} from './Cast.styled';
// import css from './Cast.module.css';


const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  
  useEffect(() => {
    if (!movieId) return;
    async function fetchCast() {
      try {
        const cast = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);

  return (<div>
    <CastBox>
      {cast && cast.map(({ id, profile_path, original_name, character }) =>
        <CastCard key={id}>
          <CastImg src={
            profile_path
              ? 'https://image.tmdb.org/t/p/w200' + profile_path
              : 'https://via.placeholder.com/200x300'
          }
            width={200}
            height={300}
            alt={original_name} />
          <CastDescription>
            {original_name && <CastText>Actor: {original_name}</CastText>}
            {character && <CastText>Character: {character}</CastText>}
          </CastDescription>
        </CastCard>
      )}
    </CastBox>
  </div>)
};

export default Cast;