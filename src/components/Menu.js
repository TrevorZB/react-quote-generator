import React from "react";
import HomeMenu from "./HomeMenu";
import FavoritesMenu from "./FavoritesMenu";

const Menu = props => {
  return (
    <div>
      <button
        onClick={props.handleMenuClick}
        className="home-button menu-button"
        id="main-menu-button"
      >
        <i className="fas fa-bars"></i>
      </button>
      {props.menuReveal && (
        <React.Fragment>
          <HomeMenu handleHome={props.handleHome} />{" "}
          <FavoritesMenu handleFavorites={props.handleFavorites} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Menu;
