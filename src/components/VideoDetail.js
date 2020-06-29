import React from "react";

const VideoDetail = ({ video }) => {
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video"
          src={`https://www.youtube.com/embed/${video.id}`}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.title}</h4>
        <p>{video.desc ? video.desc : null}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
