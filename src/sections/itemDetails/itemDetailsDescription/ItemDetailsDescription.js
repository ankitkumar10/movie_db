import React from 'react';
import { Stack, Card, Typography, Chip, IconButton, Skeleton } from '@mui/material';
import { getCrewDetails, getItemDetails } from '../../../features/api/itemDetailsSlice';
import { useSelector } from 'react-redux';
import { getImageConfigs } from '../../../features/api/configurationSlice';
import CircularProgress from '@mui/joy/CircularProgress';
import "./ItemDetailsDescription.scss";
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import Divider from '@mui/joy/Divider';

const ItemDetailsDescription = ({setPlay}) => {
	const {data: itemDetails, loading} = useSelector(getItemDetails);
	const crewDetails = useSelector(getCrewDetails);
	const imageConfigs = useSelector(getImageConfigs);
	const posterUrl = Object.keys(imageConfigs).length && itemDetails && `${imageConfigs?.poster}${itemDetails?.poster_path} `;
	const genres = itemDetails?.genres?.map(item => item?.name);
	const rating = itemDetails?.vote_average;
	const director = crewDetails?.crew?.filter((f) => f.job === "Director") || "No data found";
	const writer = crewDetails?.crew?.filter((f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer") || "No data found";	

	console.log(itemDetails,posterUrl)
	return (
		
		<Stack 
			className='itdescrtiption__container'
			direction={{xs:"column", md:"row"}}
			spacing={{xs: 2, md: 5}}
			sx={{position:"relative", marginBottom: `${loading ? "300px" : "auto"}`}}
			>	
			{!loading ?
			<>
			<Stack 
				className='itdescription__poster'
				sx={{minWidth: {md:"360px", display: "flex"}}}

				>
					<Card sx={{height: {xs:"420px",sm:"600px", md:"525px"}, width: {sm:"400px", md:"auto"} }}>
					{itemDetails.poster_path ?
					<img loading='lazy' alt="poster" src={itemDetails.poster_path && posterUrl } height="100%" width="100%"/>

					: <Skeleton sx={{textAlign:"center", zIndex:"-1000"}} height="100%" width="100%" animation="pulse">Poster not found.</Skeleton>}
 					</Card>
			</Stack>

			<Stack className='itdescrtiption__details' spacing={4}>
				<Stack className='itdescrtiption__details__title'>
					<Typography sx={{fontSize:{xs:"32px", md:"48px"}}}>
						{itemDetails?.title || itemDetails?.name}
					</Typography>
					<Typography variant='subtitle2' sx={{opacity:"0.5", fontStyle:"italic"}}>
						{itemDetails?.tagline || ""}
					</Typography>
				</Stack>

				<Stack className='itdescrtiption__details__genres' direction="row" spacing={1}>
					{genres?.map(genre => (
						<Chip 
							label={genre}
							variant="outlined"
							sx={{color:"white", maxWidth: "100px", fontSize:"12px", bgcolor: "#da2f68",border:"none"}}
							key={genre}
						/>
					) || " ")}
				</Stack>

				<Stack className='itdescrtiption__details__rating' direction="row" alignItems="center"
				gap={4}>			
					<CircularProgress  
							size="lg" 
							determinate 
							value={Math.round(rating?.toFixed(1)) * 10} 
							variant="solid"
							sx={{
								"--CircularProgress-trackColor": "white",
								"stroke": `${rating < 5 ? "red" : rating < 7 ? "orange" : "green"}`,
							}}
							color='white'>
							{rating?.toFixed(1)}
					</CircularProgress>

					<IconButton onClick={() => setPlay(true)}>
							<PlayCircleOutlineRoundedIcon
								sx={{
									fontSize:"75px",
									color: 'white'
								}}
								className="playicon"
							/>
					</IconButton>
				</Stack>

				<Stack className='itdescrtiption__details__overview' spacing={2}>
					<Typography variant='h5'>
						Overview
					</Typography>
					<Typography variant='body2'>
						{itemDetails?.overview}
					</Typography>
				</Stack>

				<Stack className='itdescrtiption__details__title' divider={<Divider />} spacing={3}>
						<Typography >
							Status : <span style={{opacity:"0.5"}}>{itemDetails?.status || "Not found"}</span>
						</Typography>
						<Typography>
							Director : <span style={{opacity:"0.5"}}>{director[0]?.name || "Not found"}</span>
						</Typography>
						<Typography>
							Writer : <span style={{opacity:"0.5"}}>{writer[0]?.name || "Not found"}</span>
						</Typography>
				</Stack>
				
				
			</Stack> </>
			: <Stack 
				sx={{marginBottom: "200px"}}>
					<Typography>Loading...</Typography>
				</Stack> }

		</Stack>
		
	)
}

export default ItemDetailsDescription