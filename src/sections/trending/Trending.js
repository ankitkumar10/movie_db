import React from 'react';
import CarouselHeader from '../common/carouselHeader/CarouselHeader';
import { Skeleton, Stack } from '@mui/material';
import "./Trending.scss";
import ScrollableCarousel from '../common/scrollableCrousel/ScrollableCarousel';
import CarouselItem from '../common/carouselItem/CarouselItem';
import { useSelector } from 'react-redux';
import { getTrendingMovies } from '../../features/api/apiSlice';
import { getImageConfigs } from '../../features/api/configurationSlice';

const Trending = () => {
	const trendingMovies = useSelector(getTrendingMovies);
	const imageConfigs = useSelector(getImageConfigs);

	const skeleton = () => (
		<>
			<Skeleton /> 
			<Skeleton /> 
			<Skeleton /> 
			<Skeleton /> 
			<Skeleton /> 
		</>

	)

	return (
		<Stack className='trending__conteiner' spacing={2}>
			<Stack>
				<CarouselHeader
					title="Trending"
					option1="day"
					option2="week"
					section="trending"
				/>
			</Stack>
			<Stack>
				<ScrollableCarousel >
					<Stack direction="row" spacing={2}>
					{trendingMovies ? trendingMovies.map(item => {
						return (
							<Stack key={item.id}>
								<CarouselItem 
									item={item} 
									imageConfigs={imageConfigs}
									/>
							</Stack>
						)
					}): skeleton}
					</Stack>
				</ScrollableCarousel>
			</Stack>
		</Stack>
	)
}

export default Trending