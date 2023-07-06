import React from "react";
import Card from "./Card";
import movieData from "./movieData";

export default function Section() {
  const movies = movieData.map((movie) => {
    return <Card key={movie.key} movie={movie} />;
  });

  return (
    <section>
      <h1 className="mainTitle">Moviefone Ratings</h1>
      <hr />
      <br />
      {movies}
      <hr />
    </section>
  );
}

/* <Card image="./image/Avengers.jpg" title="The Avengers" rating="Pg-13" />
<Card image="./image/inception.jpg" title="Inception" rating="Pg-13" />
<Card image="./image/stars.png" title="Interstellar" rating="Pg-13" />

<Card
  image="./image/CptAmer.jpg"
  title="Captain America"
  rating="Pg-13" 
  />*/
