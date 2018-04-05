import React, { Component } from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyBRGBlDj8mxVAyf82uCriUTxmDmboOp4XM";

// YTSearch({ key: API_KEY, term: "surfboards" }, function(data) {
//   console.log(data);
// });

// Creating independent views / components with React
// Create a new component. This component should produce some HTML
// JSX creates the HTML for my page; makes things a lot cleaner
// Fat arrow is ES6; value of this is slightly different; identical to using
// function keyword
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };
    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos });
      // this.setState({videos: videos})
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
