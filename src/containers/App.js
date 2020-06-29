import React, { Component } from "react";
import "./App.css";
import axios from "../apis/youtube";
import SearchBar from "../components/SearchBar";
import VideoList from "../components/VideoList/VideoList";
import VideoDetail from "../components/VideoDetail";

export default class App extends Component {
  state = {
    term: "",
    videos: [],
    selectedVideo: null,
  };
  onChangeHandler = (e) => {
    this.setState({
      term: e.target.value,
    });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get(`/search`, {
      params: {
        q: this.state.term,
      },
    });
    const updatedVideos = [];
    response.data.items.forEach((item) => {
      updatedVideos.push({
        id: item.id.videoId,
        title: item.snippet.title,
        image: item.snippet.thumbnails.medium.url,
        desc: item.snippet.description,
      });
    });
    this.setState({
      videos: updatedVideos,
      selectedVideo: "",
    });
  };

  onVideoSelectHandler = (video) => {
    // console.log(video);
    this.setState({ selectedVideo: video });
  };

  getResponsiveClasses = (wideClasses) => {
    if (window.innerWidth > 768) {
      return wideClasses;
    } else {
      return "sixteen wide column";
    }
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar
          term={this.state.term}
          onChange={this.onChangeHandler}
          onSubmit={this.onSubmitHandler}
        />
        <div className="List ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {this.state.selectedVideo ? (
                <VideoDetail video={this.state.selectedVideo} />
              ) : null}
            </div>
            <div className={this.state.selectedVideo ? "five wide column" : ""}>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelectHandler}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
