import React, { Component } from "react";
import RenderQuoteText from "./RenderQuoteText";
import RenderAuthor from "./RenderAuthor";

class Quote extends Component {
  state = {
    favoriteClick: false
  };
  render() {
    const heartIcon = this.state.favoriteClick ? (
      <i class="fas fa-heart fa-2x"></i>
    ) : (
      <i class="far fa-heart fa-2x"></i>
    );
    return (
      <div>
        {this.props.separator && <hr className="quote-line" />}
        <RenderQuoteText text={this.props.quote.text} />
        <RenderAuthor author={this.props.quote.author} />
        <button onClick={this.handleFavoriteClick} id="quote-favorite-button">
          {heartIcon}
        </button>
      </div>
    );
  }
  handleFavoriteClick = () => {
    const favoriteClick = !this.state.favoriteClick;
    this.setState({ favoriteClick });
  };
}

export default Quote;
