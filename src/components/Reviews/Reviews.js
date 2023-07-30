import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "services/API";
import { ReviewItem, ReviewTitle } from "./Reviews.styled";
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
          <ReviewItem key={id}>
            {author && <ReviewTitle>Author: {author}</ReviewTitle>}
            {content && <p>{content}</p>}
          </ReviewItem>)}
      </ul>
    ) : (<p>No review</p>)}
  </>
  )
};


export default Reviews;