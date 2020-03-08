import React from "react";

const Instructions = props => {
  return (
    <div>
      <p>
        <i className="fas fa-search"></i> <i className="fas fa-arrow-right"></i>{" "}
        search
      </p>
      <p>
        <i className="fas fa-dice"></i> <i className="fas fa-arrow-right"></i>{" "}
        random
      </p>
      <p>
        <i className="fas fa-bars"></i> <i className="fas fa-arrow-right"></i>{" "}
        <i className="fas fa-home"></i> <i className="fas fa-arrow-right"></i>{" "}
        home
      </p>
      <p>
        <i className="fas fa-bars"></i> <i className="fas fa-arrow-right"></i>{" "}
        <i className="far fa-heart"></i> <i className="fas fa-arrow-right"></i>{" "}
        favorites
      </p>
    </div>
  );
};

export default Instructions;
