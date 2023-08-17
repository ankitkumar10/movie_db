import React, { useCallback, useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import CarouselHeader from '../../common/carouselHeader/CarouselHeader';
import { axiosInstance, BASE_URL } from '../../../utility/constants';
import { useSelector } from 'react-redux';
import { getImageConfigs } from '../../../features/api/configurationSlice';
import ScrollableCarousel from '../../common/scrollableCrousel/ScrollableCarousel';
import CarouselItem from '../../common/carouselItem/CarouselItem';

const ItemDetailsSimilar = ({section, id}) => {
	const [similarItems, setSimilarItems] = useState([]);
	const imageConfigs = useSelector(getImageConfigs);



	const fetchSimilarItems = useCallback(async () => {
		try{
			const response = await axiosInstance.get(`${BASE_URL}/${section}/${id}/similar`);
			setSimilarItems(response.data.results)
		}catch (err) {
			console.log(err)
		}
	},[section, id])

	useEffect(() => {
		fetchSimilarItems();
	}, [fetchSimilarItems])

	if(!similarItems.length) {
		return (
			<Stack>
				<Typography>
					No similar content found.
				</Typography>
			</Stack>
		)
	}

	
	
	return (
		<Stack spacing={2}>
			<Stack>
				<CarouselHeader 
					title={`Similar ${section==="movie" ? "Movies" : "TV Shows"}`}
					show={false}
					/>
			</Stack>
			<Stack>
				<ScrollableCarousel >
					<Stack direction="row" spacing={2}>
					{similarItems.length ? similarItems.map(item => {
						return (
							<Stack key={item.id}>
								<CarouselItem 
									item={item} 
									imageConfigs={imageConfigs}
									/>
							</Stack>
						)
					}): <Stack spacing={1}>
					<Typography sx={{opacity: 0.5}}>No Similar content Found.</Typography>
				</Stack>}
					</Stack>
				</ScrollableCarousel>
			</Stack>
		</Stack>
	)
}

export default ItemDetailsSimilar