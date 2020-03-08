import React from "react";

const HomeMenu = props => {
  return (
    <div>
      <button
        onClick={props.handleHome}
        id="menu-home-button"
        className="home-button menu-button"
      >
        <i className="fas fa-home"></i>
      </button>
    </div>
  );
};

export default HomeMenu;
