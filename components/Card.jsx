import React from "react";
import ReviewForm from "./ReviewForm";

export default function Card({ movie }) {
  return (
    <>
      <section className="card-container">
        <div className="movie-card row">
          <div className="card ">
            <div className="card-image-container">
              <img
                src={movie.image}
                alt="movie poster"
                className="card-image"
              />
            </div>
            <div className="card-details">
              <h5 className="text-center">
                <b>{movie.title}</b>
                <span className="fs-6">({movie.rating})</span>
              </h5>
            </div>
            <div>
              <h5>{movie.synopsis}</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card ">
            <ReviewForm movie={movie} />
          </div>
        </div>
      </section>
    </>
  );
}
