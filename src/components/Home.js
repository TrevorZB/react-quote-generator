import React from "react";

const Home = props => {
  return (
    <div>
      <a id="title" href="#" onClick={props.handleHome}>
        Quote Generator
      </a>

      <form onSubmit={props.handleInputSubmit}>
        <input
          id="author-input"
          value={props.input}
          onChange={props.handleInputChange}
          placeholder="Enter author..."
          className="form-control"
        ></input>
        <button id="author-input-button" type="submit">
          Search!
        </button>
        <button id="random-button" onClick={props.handleRandom}>
          Random
        </button>
      </form>
    </div>
  );
};

export default Home;
