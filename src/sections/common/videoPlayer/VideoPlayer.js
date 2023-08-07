import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({videoId}) => {
	return (
		<ReactPlayer 
		controls
		url={`https://www.youtube.com/watch?v=${videoId}`}
		style={{zIndex: "1000"}}
		width="95%"
		// height="50%"
		/>	
	)
}

export default VideoPlayer