import React from "react";
import Item from "../Item/Item.jsx";

const Section = props => {
  return (
    <>
      <div className="row">
        <h2>{props.title}</h2>
      </div>
      <div className="row list">
        {props.data.slice(0, 6).map(({ id, title, name, poster_path }) => {
          return (
            <Item
              key={id}
              //Check if title (for movies) exists, if don't exist, use the name (for TV series)
              name={title ? title : name}
              image={poster_path}
              showDescription={props.showDescription}
              id={id}
              type={props.type}
            />
          );
        })}
      </div>
    </>
  );
};

export default Section;
