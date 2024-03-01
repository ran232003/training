import React from "react";
import VideoHome from "./VideoHome";

const VideoComponent = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: `./videoTest.mp4`,
        type: `video/mp4`,
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };
  return (
    <div>
      <VideoHome options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default VideoComponent;
