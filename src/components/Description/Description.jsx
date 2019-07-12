import React from "react";

const Description = props => {
  const imgUrl = props.data.poster_path
    ? `http://image.tmdb.org/t/p/w342${props.data.poster_path}`
    : "./img/img.png";
  return (
    <>
      <div className="row">
        <h2>{props.data.title}</h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-12 mb-2">
          <p>{props.data.overview}</p>
          <ul>
            {/* check if the parameters exists and show only if it is true */}
            {props.data.release_date && (
              <li>Release date: {props.data.release_date}</li>
            )}
            {props.data.vote_average && (
              <li>Vote average: {props.data.vote_average}</li>
            )}
            {props.data.runtime && (
              <li>Duration: {props.data.runtime} minutes</li>
            )}
          </ul>
          <button
            className="button play mx-2"
            onClick={() => {
              props.showPlayer(
                imgUrl,
                props.data.title ? props.data.title : props.data.name
              );
            }}
          >
            Play
          </button>
          <button className="button back mx-2" onClick={props.handleBack}>
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
