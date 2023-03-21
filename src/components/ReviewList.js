//a container inside of a Movie that houses Review components 

import Review from "./Review";

function ReviewList({ reviewList, setReviewList }) {
  return (
    <div>
      {/* map over reviewList to return reviews */}
      {reviewList.map((review) => (
        <Review
          setReviewList={setReviewList}
          review={review}
          reviewList={reviewList}
          key={review.id}
        ></Review>
      ))}
    </div>
  );
};

export default ReviewList;
