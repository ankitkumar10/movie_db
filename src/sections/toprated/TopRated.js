import React from 'react';
import "./TopRated.scss";
import { Stack } from '@mui/material';
import CarouselHeader from '../common/carouselHeader/CarouselHeader';
import { getImageConfigs } from '../../features/api/configurationSlice';
import { getTopRated } from '../../features/api/apiSlice';
import { useSelector } from 'react-redux';
import ScrollableCarousel from '../common/scrollableCrousel/ScrollableCarousel';
import CarouselItem from '../common/carouselItem/CarouselItem';

const TopRated = () => {
	const topRatedData = useSelector(getTopRated);
	const imageConfigs = useSelector(getImageConfigs);

	return (
		<Stack className='toprated__container'  spacing={2}>
			<Stack>
				<CarouselHeader
					title="Top Rated"
					option1="movie"
					option2="tv"
					section="toprated"
				/>
			</Stack>
			<Stack>
				<ScrollableCarousel >
					<Stack direction="row" spacing={2}>
					{topRatedData.map(item => {
						return (
							<Stack key={item.id}>
								<CarouselItem 
									item={item} 
									imageConfigs={imageConfigs}
									/>
							</Stack>
						)
					})}
					</Stack>
				</ScrollableCarousel>
			</Stack>
		</Stack>
	)
}

export default TopRated