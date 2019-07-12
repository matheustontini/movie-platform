import React from "react";

const Navbar = props => {
  return (
    <div className="row d-flex justify-content-between align-items-center">
      <h1>
        <a href="#" onClick={props.showList}>
          Movie Platform
        </a>
      </h1>
      <div className="form-inline my-2 my-lg-0 mx-2">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onKeyUp={props.showSearch}
        />
      </div>
    </div>
  );
};

export default Navbar;
