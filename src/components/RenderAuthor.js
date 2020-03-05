import React from "react";

const RenderAuthor = props => {
  return (
    <div>
      <p id="quote-author">{props.author}</p>
    </div>
  );
};

export default RenderAuthor;
