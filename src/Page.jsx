// src/components/VideoList.jsx
import React from "react";
import VideoCard from "./component/VideoCard";
// const videos = [
//   "https://www.youtube.com/embed/HomVywfxZ1o", 
//   "https://www.youtube.com/embed/3bZcD2ZUZcE",
//   "https://www.youtube.com/embed/hOw8FGdeJX8",
//   "https://www.youtube.com/embed/KTmPhev-0cg",
//   "https://www.youtube.com/embed/5g2tj2oe-ao"
// ];
const videos = [
  "https://www.youtube.com/embed/yddqaxf-y2w", 
  "https://www.youtube.com/embed/42n8bHKOP94",
  "https://www.youtube.com/embed/P6zpO979izs",
  "https://www.youtube.com/embed/2htheguVn98",
  "https://www.youtube.com/embed/exODUQW1kkQ",
  "https://www.youtube.com/embed/a7TOW_zYCfc",
  "https://www.youtube.com/embed/FXYAnsUbqO8",
  "https://www.youtube.com/embed/HqQaKbo28Ak",
  "https://www.youtube.com/embed/GwPWBoceVp0",
  "https://www.youtube.com/embed/M8E3WtyoDBY",
  "https://www.youtube.com/embed/WryCx0sGBjc",
  "https://www.youtube.com/embed/6pcAUOTZ-Fw",
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
