//A text review a user can leave on a movie.

function Review({ review, reviewList, setReviewList }) {
  //fx to handle onClick; delete review
  const deleteReview = () => {
    setReviewList(
      reviewList.filter((reviewitem) => reviewitem.id !== review.id)
    );
    //when delete button is clicked, filter through reviews in reviewList; only keep the reviewitems with ids that don't match the review.id; create a new array with reviewitems
  };

  return ( //review text and delete review button
    <div>
      <div className="review">
        <p className="reviewtext">{review.text}</p>

        <button onClick={deleteReview} className="deletebutton">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Review;
