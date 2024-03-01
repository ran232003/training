import React from "react";
import ReactPlayer from "react-player";

const VideoHome = (props) => {
  return (
    <div>
      {" "}
      <ReactPlayer
        url="videoTest.mp4"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default VideoHome;
