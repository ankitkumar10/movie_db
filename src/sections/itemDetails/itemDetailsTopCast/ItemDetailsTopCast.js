import React from 'react';
import { Stack, Typography } from '@mui/material';
import CarouselHeader from '../../common/carouselHeader/CarouselHeader';
import Avatar from '@mui/joy/Avatar';
import { getCrewDetails } from '../../../features/api/itemDetailsSlice';
import { useSelector } from 'react-redux';
import { getImageConfigs } from '../../../features/api/configurationSlice';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

const ItemDetailsTopCast = () => {
	const crewDetails = useSelector(getCrewDetails);
	const imageConfigs = useSelector(getImageConfigs);

	if(!crewDetails) {
		return (
			<div>
				No Cast data found...
			</div>
		)
	}

	return (
		<Stack spacing={2}>
			<Stack>
				<CarouselHeader 
					title="Top Cast"
					show={false}
				/>
			</Stack>
			<Stack direction="column">
				<ScrollingCarousel>
				<Stack direction="row" spacing={2}>	
				{crewDetails?.cast?.length? crewDetails?.cast?.map(crew => {
					return (
						<Stack direction="column" alignItems="center" spacing={1} key={crew?.name}>
							<Avatar 
								alt={crew?.name} 
								src={`${imageConfigs?.profile}${crew?.profile_path}`} 
								sx={{
									height: "180px",
									width: "180px",
									fontSize:"40px"
								}}/>
								<Typography sx={{fontSize:"18px"}}>{crew?.original_name.substring(0,30)}</Typography>
								<Typography sx={{fontSize:"14px", opacity: "0.5"}}>{crew?.character.substring(0,30)}</Typography>
						</Stack>
					)
				}): ""}
				</Stack>
			
				</ScrollingCarousel>
			</Stack>
		</Stack>
	)
}

export default ItemDetailsTopCast