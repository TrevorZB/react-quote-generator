import React, { Component } from "react";
import RenderQuoteText from "./RenderQuoteText";
import RenderAuthor from "./RenderAuthor";

const Quote = props => {
  const heartIcon = props.favorited ? (
    <i class="fas fa-heart fa-2x"></i>
  ) : (
    <i class="far fa-heart fa-2x"></i>
  );
  return (
    <div>
      {props.separator && <hr className="quote-line" />}
      <RenderQuoteText text={props.quote.text} />
      <RenderAuthor author={props.quote.author} />
      <button
        onClick={() => props.handleFavoriteClick(props.quote)}
        id="quote-favorite-button"
      >
        {heartIcon}
      </button>
    </div>
  );
};

export default Quote;
