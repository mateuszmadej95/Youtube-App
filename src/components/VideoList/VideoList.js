import React from "react";
import VideoItem from "./VideoItem/VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map((video) => {
    return (
      <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id} />
    );
  });
  return <div className="ui relaxed divided list">{videoList}</div>;
};

export default VideoList;
