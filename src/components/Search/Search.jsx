import React from "react";
import Item from "../Item/Item.jsx";

const Search = props => {
  return (
    <>
      <div className="row">
        <h2>Results for "{props.text}":</h2>
      </div>
      <div className="row list">
        {props.data.map(({ id, media_type, name, title, poster_path }) => {
          return (
            <Item
              key={id}
              //Check if title (for movies) exists, if don't exist, use the name (for TV series)
              name={title ? title : name}
              image={poster_path}
              showDescription={props.showDescription}
              id={id}
              type={media_type}
            />
          );
        })}
      </div>
    </>
  );
};

export default Search;
