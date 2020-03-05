import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Quote Generator</a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <button
            onClick={props.handleHome}
            className="nav-item nav-link active btn btn-link"
          >
            Home
          </button>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={props.handleInputSubmit}
          >
            <input
              value={props.input}
              onChange={props.handleInputChange}
              placeholder="Enter author..."
              className="form-control mr-sm-2"
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search!
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
