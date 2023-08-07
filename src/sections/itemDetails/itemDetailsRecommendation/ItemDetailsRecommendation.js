import React, {useState, useEffect, useCallback} from 'react'
import { useSelector } from 'react-redux';
import { getImageConfigs } from '../../../features/api/configurationSlice';
import { axiosInstance } from '../../../utility/constants';
import { BASE_URL } from '../../../utility/constants';
import { Stack } from '@mui/material';
import CarouselHeader from '../../common/carouselHeader/CarouselHeader';
import CarouselItem from '../../common/carouselItem/CarouselItem';
import ScrollableCarousel from '../../common/scrollableCrousel/ScrollableCarousel';

const ItemDetailsRecommendation = ({section, id}) => {
	const [recommendedItems, setRecommendedItems] = useState([]);
	const imageConfigs = useSelector(getImageConfigs);

	const fetchRecommendedItems = useCallback(async () => {
		try{
			const response = await axiosInstance.get(`${BASE_URL}/${section}/${id}/recommendations`);
			setRecommendedItems(response.data.results)
		}catch (err) {
			console.log(err)
		}
	},[section, id])

	useEffect(() => {
		fetchRecommendedItems();
	}, [fetchRecommendedItems])
	return (
		<Stack spacing={2}>
			<Stack>
				<CarouselHeader 
					title="Recommendations"
					show={false}
					/>
			</Stack>
			<Stack>
				<ScrollableCarousel >
					<Stack direction="row" spacing={2}>
					{recommendedItems.map(item => {
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

export default ItemDetailsRecommendation