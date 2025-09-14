// // src/components/VideoCard.jsx
// import React from "react";

// const VideoCard = ({ link }) => {
//   return (
//     <div className="w-full md:w-1/2 lg:w-1/3 p-2">
//       <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
//         <iframe
//           src={link}
//           title="Video"
//           className="absolute top-0 left-0 w-full h-full"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;


import React, { useState } from "react";

const VideoCard = ({ link }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube ID বের করা
  const videoId = link.split("/embed/")[1];
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-3">
      <div className="relative rounded-lg shadow-lg overflow-hidden group" style={{ paddingBottom: "56.25%", height: 0 }}>
        {isPlaying ? (
          <iframe
            src={link + "?autoplay=1"}
            title="video"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="absolute top-0 left-0 w-full h-full cursor-pointer"
          >
            <img
              src={thumbnail}
              alt="video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-white text-5xl">&#9658;</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
