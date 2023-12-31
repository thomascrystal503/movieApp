import ReactStars from "react-stars";
import React from "react";

export default function Stars(props) {
  //const ratingChanged = (newRating) => {
  //console.log(`rating: ${newRating}⭐`);
  //};
  return (
    <ReactStars
      count={5}
      color2={"#ffd700"}
      size={24}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
