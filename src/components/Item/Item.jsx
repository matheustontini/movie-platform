import React from "react";

const Item = props => {
  const itemStyle = {
    backgroundImage: `url(http://image.tmdb.org/t/p/w342${props.image})`
  };
  return (
    <div
      className="col-12 col-md-4 col-lg-2"
      style={itemStyle}
      onClick={() => {
        props.showDescription(props.id, props.type);
      }}
    >
      <h3>{props.name}</h3>
    </div>
  );
};

export default Item;
