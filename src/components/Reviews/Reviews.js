import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "services/API";
// import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
    
  useEffect(() => {
    if (!movieId) return;
    async function fetchReview() {
      try {
        const Review = await fetchMovieReviews(movieId);
        setReview(Review);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReview();
  }, [movieId]);

  return (<>
    {review.length > 0 ? (
      <ul>
        {review.map(({ id, author, content }) =>
          <li key={id}>
            {author && <h3>Author: {author}</h3>}
            {content && <p>{content}</p>}
          </li>)}
      </ul>
    ) : (<p>No review</p>)}
  </>
  )
};


export default Reviews;