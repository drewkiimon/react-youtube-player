import React, { Component } from "react";

// Using a class base vs vanilla js function?
class SearchBar extends Component {
  // Handing events --> EventHandler, then pass it off to element
  // This is triggered by the onChange from our input that was rendered
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // Initialize state
  constructor(props) {
    super(props);

    // Only in constructor do we use state like this
    this.state = { term: "" };
  }

  render() {
    // onChange event is vanilla js
    return (
      // this.setState to set state, not this.state.term <- BADDD
      // Value of the input: {this.state.term}
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    // Set state
    this.setState({ term });
    // Is this passing it back up to the parent?
    // This is firing off the callback function as shown in App
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

// Vanilla Javascript function
// const SearchBar = () => {
//   return <input />; // React.createElement
// };
