import React from "react";

const Item = props => {
  //Check if the image is available, if is not, show a standart image
  const itemStyle = {
    backgroundImage: props.image
      ? `url(http://image.tmdb.org/t/p/w342${props.image})`
      : "url('./img/img.png')"
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
