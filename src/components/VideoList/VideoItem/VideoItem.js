import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item VideoItem" onClick={() => onVideoSelect(video)}>
      <img src={video.image} alt="video img" className="ui image" />
      <div className="content">
        <div className="header">{video.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
