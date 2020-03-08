import React from "react";

const QuoteList = props => {
  return (
    <div>
      {props.quotes.length !== 0 ? props.quotes : <p>No quotes found.</p>}
    </div>
  );
};

export default QuoteList;
