import React from "react";

const Description = props => {
  const imgUrl = `http://image.tmdb.org/t/p/w342${props.data.poster_path}`;
  return (
    <>
      <div className="row">
        <h2>{props.data.title}</h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-12 mb-2">
          <p>{props.data.overview}</p>
          <ul>
            <li>Release date: {props.data.release_date}</li>
            <li>Vote average: {props.data.vote_average}</li>
            <li>Duration: {props.data.runtime} minutes</li>
          </ul>
          <button className="btn btn-primary">Play</button>
          <button className="btn btn-secondary" onClick={props.showList}>
            Back
          </button>
        </div>
        <div className="col-md-6 col-12 text-center">
          <img src={imgUrl} alt={props.data.title} className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default Description;
