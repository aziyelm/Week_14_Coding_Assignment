//a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie.
//All this data can be stored in an array

import shortid from "shortid";
import Stars from "./Stars";

function ReviewForm({ review, setReview, reviewList, setReviewList }) {
  //event handlers
  //fx to set the user input value as the review
  const handleChange = (event) => { //event=onChange
    setReview(event.target.value); //target.value=user input
  };

  //fx to submit user input and add it to ReviewList
  const handleSubmit = (event) => { //event=onSubmit
    event.preventDefault(); //prevent refreshing page so reviews can be saved
    setReviewList([...reviewList, { text: review, id: shortid.generate() }]); //array of old list and newly added reviews (formatted as an object {} ); ... = spread operator, spreads array elements across

    //clear input field
    setReview("");
  };

  return ( //star component, review input field, and submit button
    <div className="reviewform">
      <form onSubmit={handleSubmit}>
        <Stars />
        <input
          value={review}
          onChange={handleChange}
          placeholder="Leave a Review"
          className="reviewinput"
        ></input>
        <button type="submit" className="submitbutton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
