import React, { Component } from "react";
import Quote from "./Quote";
import quotes from "../quotes";
import Home from "./Home";
import Instructions from "./Instructions";
import QuoteList from "./QuoteList";
import "../App.css";

class App extends Component {
  state = {
    quotes: quotes,
    index: -1,
    input: "",
    submit: ""
  };
  render() {
    let content;
    if (this.state.submit) {
      let quotes = this.queryQuotes();
      quotes = this.mapToQuote(quotes);
      content = <QuoteList quotes={quotes} />;
    } else if (this.state.index < 0) {
      content = <Instructions />;
    } else {
      content = <Quote quote={this.state.quotes[this.state.index]} />;
    }
    return (
      <div id="app">
        <Home
          handleInputChange={this.handleInputChange}
          input={this.state.input}
          handleInputSubmit={this.handleInputSubmit}
          handleHome={this.handleHome}
          handleRandom={this.handleRandom}
        />
        {content}
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
      submit: ""
    });
  };
  queryQuotes = () => {
    return this.state.quotes.filter(q => q.author === this.state.submit);
  };
  mapToQuote = list => {
    return list.map(l => {
      return <Quote key={l.text} quote={l} />;
    });
  };
}

export default App;
