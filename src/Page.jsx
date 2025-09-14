// src/components/VideoList.jsx
import React from "react";
import VideoCard from "./component/VideoCard";
const videos = [
  "https://www.youtube.com/embed/HomVywfxZ1o",
  "https://www.youtube.com/embed/3bZcD2ZUZcE",
  "https://www.youtube.com/embed/hOw8FGdeJX8"
];

const VideoList = () => {
  return (
    // <div className="flex flex-wrap -m-3">
    //   {videos.map((video, index) => (
    //     <VideoCard key={index} link={video} />
    //   ))}
    // </div>

    <div className="flex flex-wrap -m-3">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          link={video}
          title={`Video ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default VideoList;
