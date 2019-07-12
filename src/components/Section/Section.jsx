import React from "react";
import Item from "../Item/Item.jsx";
import Slider from "react-slick";

const Section = props => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1259,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1009,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 759,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 509,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="row">
        <h2>{props.title}</h2>
      </div>
      <div>
        <Slider {...settings}>
          {props.data.map(({ id, title, name, poster_path }) => {
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
        </Slider>
      </div>
    </>
  );
};

export default Section;
