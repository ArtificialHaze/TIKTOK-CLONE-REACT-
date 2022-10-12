import React, { useState } from "react";
import { Favorite, FavoriteBorder, Message, Share } from "@material-ui/icons";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <Favorite fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorder onClick={() => setLiked(true)} />
        )}
        <p>{likes}</p>
      </div>
      <div className="videoSidebar__button">
        <Message />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <Share />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
