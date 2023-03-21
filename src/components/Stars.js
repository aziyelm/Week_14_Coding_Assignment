//a one to five-star rating component that allows users to rate the movies

import styles from "../stars.module.css";
import React, { useState } from "react";

function Stars () {
  //set state for rating and hover fx
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {/* array to create stars */}
      {[...Array(5)].map((star, index) => {
        index += 1;

        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "staron" : "staroff"}
            // event handlers
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {/* star icon to style button */}
            <span className={styles.star}>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Stars;

