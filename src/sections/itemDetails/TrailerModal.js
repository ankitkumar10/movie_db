import React from 'react';
import { Stack, Modal, Typography } from '@mui/material';
import VideoPlayer from '../common/videoPlayer/VideoPlayer';

const TrailerModal = ({videoId, play, setPlay}) => {
	console.log(videoId)
	return (
		<Stack>
			 <Modal
        open={play}
        onClose={() => setPlay(false)}
				sx={{display:"flex", justifyContent:"center", alignItems:"center"}}
      >
				{videoId ?
				<VideoPlayer
					videoId={videoId}
				/> : <Stack sx={{color: "white", bgcolor:"gray", p:"20px"}}><Typography>Trailer Not found</Typography></Stack>}	
			</Modal>
		</Stack>
	)
}

export default TrailerModal