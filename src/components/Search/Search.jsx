import React from "react";
import Item from "../Item/Item.jsx";

const Search = props => {
  return (
    <>
      <div className="row">
        <h2>Results for "{props.text}":</h2>
      </div>
      <div className="row d-flex justify-content-around">
        {props.data.map(({ id, media_type, title, name, poster_path }) => {
          return (
            <Item
              key={id}
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
