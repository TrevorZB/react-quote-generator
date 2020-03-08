import React from "react";

const Menu = props => {
  return (
    <div>
      <button
        onClick={props.handleMenuClick}
        className="home-button"
        id="menu-button"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default Menu;
