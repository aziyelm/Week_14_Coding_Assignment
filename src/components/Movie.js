//a component that represents movie data (i.e. title, image, synopsis, reviews}

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";


function Movie({ title, image, synopsis }) {
  //state for review
  const [review, setReview] = useState(""); //initialize as empty string

  //state for reviewList
  const [reviewList, setReviewList] = useState([]); //initialized as empty array to house reviews

  return ( //movie data, ReviewForm, & ReviewList; formatted with react boostrap
    <Container fluid className="movie">
      <Row>
        <Col>
          <h1 className="title">{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>{image}</Col>
      </Row>
      <Row>
        <Col className="synopsis">{synopsis}</Col>
      </Row>

      <ReviewForm
        review={review}
        setReview={setReview}
        reviewList={reviewList}
        setReviewList={setReviewList}
      />

      <ReviewList reviewList={reviewList} setReviewList={setReviewList} />
    </Container>
  );
};

export default Movie;
