import React, { Component } from "react";
import Quote from "./Quote";
import quotes from "../quotes";
import Home from "./Home";
import Instructions from "./Instructions";
import QuoteList from "./QuoteList";
import "../App.css";
import Menu from "./Menu";

class App extends Component {
  state = {
    quotes: quotes,
    index: -1,
    input: "",
    submit: "",
    select: "Author",
    menuReveal: false,
    favoriteQuotes: [],
    displayFavorites: false
  };
  render() {
    let content;
    let quotes;
    if (this.state.submit) {
      if (this.state.select === "Author") {
        quotes = this.authorQuery();
      } else {
        quotes = this.keywordQuery();
      }
      quotes = this.mapToQuote(quotes);
      content = <QuoteList quotes={quotes} />;
    } else if (this.state.displayFavorites) {
      quotes = this.mapToQuote(this.state.favoriteQuotes);
      content = <QuoteList quotes={quotes} />;
    } else if (this.state.index < 0) {
      content = <Instructions />;
    } else {
      const quote = this.state.quotes[this.state.index];
      const favorited = this.isFavorited(quote);
      content = (
        <Quote
          separator={false}
          index={this.state.index}
          quote={quote}
          favorited={favorited}
          handleFavoriteClick={this.handleFavoriteClick}
        />
      );
    }
    return (
      <div id="home">
        <Home
          handleInputChange={this.handleInputChange}
          input={this.state.input}
          handleInputSubmit={this.handleInputSubmit}
          handleHome={this.handleHome}
          handleRandom={this.handleRandom}
          handleSelectChange={this.handleSelectChange}
          select={this.state.select}
        />
        <Menu
          menuReveal={this.state.menuReveal}
          handleMenuClick={this.handleMenuClick}
          handleHome={this.handleHome}
          handleFavorites={this.handleFavorites}
        />
        <div id="quote">{content}</div>
      </div>
    );
  }
  handleRandom = () => {
    const index = Math.floor(Math.random() * quotes.length);
    const submit = "";
    const input = "";
    this.setState({ index, input, submit });
  };
  handleInputChange = event => {
    const input = event.target.value;
    this.setState({ input });
  };
  handleInputSubmit = event => {
    event.preventDefault();
    const submit = this.state.input;
    this.setState({ submit });
  };
  handleHome = () => {
    this.setState({
      index: -1,
      input: "",
      submit: "",
      select: "Author",
      menuReveal: false,
      displayFavorites: false
    });
  };
  handleSelectChange = event => {
    const select = event.target.value;
    const input = "";
    const submit = "";
    this.setState({ input, submit, select });
  };
  authorQuery = () => {
    return this.state.quotes.filter(q =>
      q.author.toLowerCase().startsWith(this.state.submit.toLowerCase())
    );
  };
  keywordQuery = () => {
    return this.state.quotes.filter(q =>
      q.text.toLowerCase().includes(this.state.submit.toLowerCase())
    );
  };
  mapToQuote = list => {
    return list.map((q, index) => {
      const separator = index === 0 ? false : true;
      const favorited = this.isFavorited(q);
      return (
        <Quote
          key={index}
          separator={separator}
          quote={q}
          favorited={favorited}
          handleFavoriteClick={this.handleFavoriteClick}
        />
      );
    });
  };
  handleMenuClick = () => {
    const menuReveal = !this.state.menuReveal;
    this.setState({ menuReveal });
  };
  isFavorited = quote => {
    const found = this.state.favoriteQuotes.filter(q => q.id === quote.id);
    return found.length > 0;
  };
  handleFavoriteClick = quote => {
    const favoriteQuotes = this.state.favoriteQuotes;
    if (this.isFavorited(quote)) {
      favoriteQuotes.splice(favoriteQuotes.indexOf(quote), 1);
    } else {
      favoriteQuotes.push(quote);
    }
    this.setState({ favoriteQuotes });
  };
  handleFavorites = () => {
    this.setState({
      input: "",
      submit: "",
      displayFavorites: true,
      menuReveal: false
    });
  };
}

export default App;
