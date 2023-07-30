import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchMovieCast} from "services/API"; 
// import css from './Cast.module.css';


export const Cast = () => {
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
    <ul>
      {cast && cast.map(({ id, profile_path, original_name, character }) =>
        <li key={id}>
          <img src={
            profile_path
              ? 'https://image.tmdb.org/t/p/w200' + profile_path
              : 'https://via.placeholder.com/200x300'
          }
            width={200}
            height={300}
            alt={original_name} />
          <div>
            {original_name && <p>Actor: {original_name}</p>}
            {character && <p>Character: {character}</p>}
          </div>
        </li>
      )}
    </ul>
  </div>)
};