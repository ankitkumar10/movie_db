import { Stack, Typography, Card } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { getOfficialVideos } from '../../../features/api/itemDetailsSlice'
import CarouselHeader from '../../common/carouselHeader/CarouselHeader'
import ScrollableCarousel from '../../common/scrollableCrousel/ScrollableCarousel'
import ReactPlayer from 'react-player'

const ItemDetailsVideos = () => {
	const officialVideos = useSelector(getOfficialVideos);

	if (!officialVideos.length) {
		return <Stack><Typography>No official video found.</Typography></Stack>
	}
	return (
		<Stack spacing={2}>
			<Stack>
				<CarouselHeader
					title="Official Videos"
					show={false}
				/>
			</Stack>
			<Stack >
				<ScrollableCarousel>
				{officialVideos?.map(item => {
					return (
						<Stack spacing={2} sx={{maxWidth:{xs:200, sm:300}, mr:2}} key={item.id}>
							<Stack direction="row"  justifyContent="center">
								<Card>
								<ReactPlayer 
										controls
										width="100%"
										height="100%"
										url={`https://www.youtube.com/watch?v=${item.key}`}
										style={{zIndex: "1000"}}/>
							</Card>
						</Stack>
						<Typography sx={{fontSize:"14px", textAlign:"center"}}>
							{item.name}
						</Typography>
					</Stack>
					)
				})}
				</ScrollableCarousel>
			</Stack>	
		</Stack>
	)
}

export default ItemDetailsVideos