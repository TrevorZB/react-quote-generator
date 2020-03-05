import React from "react";
import RenderQuoteText from "./RenderQuoteText";
import RenderAuthor from "./RenderAuthor";

const Quote = props => {
  return (
    <div>
      <hr className="quote-line" />
      <RenderQuoteText text={props.quote.text} />
      <RenderAuthor author={props.quote.author} />
    </div>
  );
};

export default Quote;
