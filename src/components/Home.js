import React from "react";

const Home = props => {
  return (
    <div>
      <a id="title" href="#" onClick={props.handleHome}>
        Quote Generator
      </a>

      <form onSubmit={props.handleInputSubmit}>
        <select
          id="select"
          value={props.select}
          onChange={props.handleSelectChange}
        >
          <option value="Author">Author</option>
          <option value="Keyword">Keyword</option>
        </select>
        <input
          id="author-input"
          value={props.input}
          onChange={props.handleInputChange}
          placeholder={"Enter " + props.select + "..."}
          className="form-control"
        ></input>
        <button className="home-button" id="author-input-button" type="submit">
          Search
        </button>
        <button
          className="home-button"
          id="random-button"
          onClick={props.handleRandom}
        >
          Random
        </button>
      </form>
    </div>
  );
};

export default Home;
