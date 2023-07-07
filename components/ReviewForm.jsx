import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stars from "./Stars";

let nextId = 0;

export default function ReviewForm(props) {
  //export default function ReviewForm({ movie }) {
  //console.log(movie);

  const [newName, setNewName] = useState("");
  const [newReview, setNewReview] = useState("");
  const [starRating, setStarRating] = useState(0);

  const [reviewArray, setReviewArray] = useState([
    {
      id: 1,
      name: "John Doe",
      stars: 4.5,
      review: "Great movie! Amazing action sequences and a compelling story.",
    },
    {
      id: 2,
      name: "Jane Smith",
      stars: 3.5,
      review:
        "Good movie, but could have been better. Some scenes felt unnecessary.",
    },
  ]);
  // Check for myself
  // const result = Array.isArray(reviewArray); result was true
  // console.log("isArray: " + result);
  //console.log(reviewArray);
  function showReview() {
    const itemList = reviewArray.map((review) => (
      <>
        <hr />
        <li className="review--list">
          <span className="name">{review.name}</span>
          <br />
          <span className="rating">Stars</span>
          <br />
          <p className="review">{review.review}</p>
        </li>
      </>
    ));
    return (
      <div>
        <ul>{itemList}</ul>
      </div>
    );
  }

  //These are causing problems. I delete them and name is deprecated in line 69
  // const name = useRef(null);
  // const review = useRef(null);
  // const stars = useRef(null);

  //save to array
  function addReview() {
    setReviewArray((current) => [
      ...current,
      {
        id: nextId++,
        name: name.current.value,
        stars: starRating,
        review: review.current.value,
      },
      //console.log(current),
    ]);
  }

  return (
    <div className="form">
      <hr />
      <h3>Rate this movie!</h3>
      <Stars value={starRating} onChange={setStarRating} />
      <Form className="form container flex bg-light">
        <Form.Group className="mb-3" controlId="ControlTextarea1">
          <Form.Label>Review for {props.movie.title}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Why don't you just tell me the name of the movie you want to see?"
            size="sm"
            onChange={(e) => setNewName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlTextarea2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Cosmo Kramer"
            size="sm"
            onChange={(e) => setNewName(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button variant="secondary" onClick={addReview}>
          Submit
        </Button>{" "}
      </Form>

      <br />
      <hr />
      <div>
        <h5>Current Reviews</h5>
      </div>
      <div>{showReview()}</div>
      <hr />
    </div>
  );
}

// const addNewReview = ({ id, name, stars, review }) => {
//   const newID = Math.max(...reviewArray.map((review) => review.id)) + 1;
//   const newReview = {
//     id: newID,
//     name: name,
//     stars: stars,
//     review: review,
//   };
//   console.log(newReview);
//   setReviewList([...reviewArray, newReview]);
// };

//update state of the form with the onChange called on each Form.Control
// const [form, setForm] = useState({});
// const setField = (field, value) => {
//   setForm({
//     ...form,
//     [field]: value,
//   });
// };

// // //handleSubmit
// const handleSubmit = (e) => {
//   e.preventDefault();
//   //form submission
//   setReviewArray([...reviewArray, newReview]);
//   //console.log(reviewArray);
//};

//take the input from name & review
// add it to the previous array
// function addReview() {
//   setReviewArray(...reviewArray, setField());
// }
