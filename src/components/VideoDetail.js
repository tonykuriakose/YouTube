import React from "react";
import { Paper, Typography } from "@mui/material";

const VideoDetail = ({ video }) => {
  if (!video) return <div>loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`; // Corrected variable name
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          title="Video Player"
          src={videoSrc} // Corrected usage of variable
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography> {/* Corrected variant prop */}
        <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography> {/* Corrected variant prop */}
        <Typography variant="subtitle2">{video.snippet.description}</Typography> {/* Corrected variant prop */}
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
