import React from 'react';
import { Stack, Typography } from '@mui/material';
import "./Hero.scss";
import { getTrendingMovies } from '../../features/api/apiSlice';
import { useSelector } from 'react-redux';
import { getImageConfigs } from '../../features/api/configurationSlice';
import Search from './Search';

const Hero = () => {
	const trendingAll = useSelector(getTrendingMovies);

	const randomItem = trendingAll[Math.floor(Math.random()*trendingAll.length)];
	const imageConfigs = useSelector(getImageConfigs)
	const heroBackdropPath = `${imageConfigs?.backdrop}${randomItem?.backdrop_path}`

	return (
		<Stack className='hero__container' sx={{
			minHeight: {xs: "450px",md: "700px"}, backgroundColor: "gray"
		}}
		alignItems="center"
		justifyContent="center"
		>
			<Stack className='hero__image__container' sx={{

			}}>
				<img alt="backdrop" src={heroBackdropPath ? heroBackdropPath : ''}  loading="lazy"/>
			</Stack>
		
			<Stack className='hero__message' justifyContent="center" alignItems="center">
				<Typography variant='h2'>
					Welcome.
				</Typography>
				<Typography variant='subtitle' sx={{textAlign:"center"}}>
					Millions of movies, TV shows and people to discover. Explore now.
				</Typography>
			</Stack>
				
				<Search />

			<Stack className='hero__opactiy__layer' sx={{
				height:{xs:"100px", md:"250px"}
			}}>

			</Stack>
		</Stack>
	)
}

export default Hero