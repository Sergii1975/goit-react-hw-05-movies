import { useLocation, Link } from 'react-router-dom';
import {MovieList, MovieItem, ListTitle, Img} from './MoveList.styled';


const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <MovieList>
            {movies.map(
                ({ id, title, poster_path }) =>
                   title &&  (<MovieItem key={id}>
                    <Link
                        key={id}
                        to={`/movies/${id}`}
                        state={{ from: location }}>
                        <Img
                            src={
                                poster_path
                                    ? 'https://image.tmdb.org/t/p/w300' + poster_path
                                    : 'https://via.placeholder.com/300x450'}
                            width={300}
                            height={450}
                            alt={title} />
                        <ListTitle>{title}</ListTitle>
                    </Link>
                </MovieItem>))}
        </MovieList>)
};



export default MoviesList;
