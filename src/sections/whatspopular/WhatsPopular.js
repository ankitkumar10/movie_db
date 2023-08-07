import React from 'react';
import "./WhatsPopular.scss";
import { Stack } from '@mui/material';
import CarouselHeader from '../common/carouselHeader/CarouselHeader';
import { getImageConfigs } from '../../features/api/configurationSlice';
import { getWhatsPopular } from '../../features/api/apiSlice';
import { useSelector } from 'react-redux';
import ScrollableCarousel from '../common/scrollableCrousel/ScrollableCarousel';
import CarouselItem from '../common/carouselItem/CarouselItem';

const WhatsPopular = () => {
	const whatsPopulardata = useSelector(getWhatsPopular);
	const imageConfigs = useSelector(getImageConfigs);

	return (
		<Stack className='whatspopular__container'  spacing={2}>
			<Stack>
				<CarouselHeader
					title="What's Popluar"
					option1="movie"
					option2="tv"
					section="whatspopular"
				/>
			</Stack>
			<Stack>
				<ScrollableCarousel >
					<Stack direction="row" spacing={2}>
					{whatsPopulardata.map(item => {
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

export default WhatsPopular