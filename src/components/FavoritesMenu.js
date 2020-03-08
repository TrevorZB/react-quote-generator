import React from "react";

const FavoritesMenu = props => {
  return (
    <div>
      <button
        onClick={props.handleFavorites}
        id="menu-favorites-button"
        className="home-button menu-button"
      >
        <i className="far fa-heart"></i>
      </button>
    </div>
  );
};

export default FavoritesMenu;
