import React from "react";

const RenderQuoteText = props => {
  return (
    <div>
      <p id="quote-text">{props.text}</p>
    </div>
  );
};

export default RenderQuoteText;
