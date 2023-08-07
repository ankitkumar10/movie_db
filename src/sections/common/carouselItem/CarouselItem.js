import React from 'react';
import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import "./CarouselItem.scss";
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

const CarouselItem = ({item, imageConfigs, height=null, width=null}) => {
	const posterImageUrl = `${imageConfigs?.poster}${item?.poster_path}`;
	const movieTitle = item?.title;
	const tvShowTitle = item?.name;
	const rating = item.vote_average;
	
	const title = movieTitle?.length > 10 ? `${movieTitle.substring(0,10)}...` : movieTitle;
	const tvShowName = tvShowTitle?.length > 10 ? `${tvShowTitle.substring(0,10)}...` : tvShowTitle;
	const linkUrl = `/${movieTitle ? "movie" : "tv"}/${item.id}`; 
	
	return (
		
		<Card 
			raised
		 	sx={{
				height:`${height || "290px"}`,
				width:`${width || "140px"}`,
				backgroundColor: "inherit"
		}}>
			
			<Link to={linkUrl}>
			<CardActionArea>
				<CardMedia
          component="img"
          height={`${height ? "300px" : "210px"}`}
					width="100%"
          image={posterImageUrl}
          alt={item.title}
        />
				<CardContent sx={{backgroundColor:"#04152d", color: "white", position:"relative"}} >
					
		      <Stack className='carousel__item__content'>
						<Stack sx={{
							position:"absolute",
							top: "-15px"
						}}>
						<CircularProgress  
							size="md" 
							variant="solid"
							determinate
							sx={{
								"--CircularProgress-trackColor": "white",
								"stroke": `${rating < 5 ? "red" : rating < 7 ? "orange" : "green"}`,
							}}
							color='white'
							value={Math.round(rating?.toFixed(1)) * 10} 
							>
								
							{rating > 0 ? rating.toFixed(1) : "NA"}
						</CircularProgress>
						</Stack>
						<Stack sx={{marginTop:"20px"}}>
							<Stack>
								<Typography variant='subtitle2'>
									{title || tvShowName ||  <span style={{fontSize: "12px"}}>Title unavailable</span>}
								</Typography>
							</Stack>
							<Stack>
								<Typography sx={{fontSize: "12px", opacity: "0.5"}}>
									{item?.release_date || item?.first_air_date || <span style={{fontSize: "8px"}}>Release date unavailable</span>}
								</Typography>
							</Stack>
						</Stack>
					</Stack>
        </CardContent>
			</CardActionArea>
			</Link> 
		</Card>
	)
}

export default CarouselItem