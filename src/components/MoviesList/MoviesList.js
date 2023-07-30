import { useLocation, Link } from 'react-router-dom';
// import css from './MoviesList.module.css'


const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map(
                ({ id, title, poster_path }) =>
                   title &&  (<li key={id}>
                    <Link
                        key={id}
                        to={`/movies/${id}`}
                        state={{ from: location }}>
                        <img
                            src={
                                poster_path
                                    ? 'https://image.tmdb.org/t/p/w300' + poster_path
                                    : 'https://via.placeholder.com/300x450'}
                            width={300}
                            height={450}
                            alt={title} />
                        <h2>{title}</h2>
                    </Link>
                </li>))}
        </ul>)
};



export default MoviesList;
