import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import ItemDetailsDescription from './itemDetailsDescription/ItemDetailsDescription';
import ItemDetailsTopCast from './itemDetailsTopCast/ItemDetailsTopCast';
import ItemDetailsVideos from './itemDetailsVideos/ItemDetailsVideos';
import ItemDetailsSimilar from './itemDetailsSimilar/ItemDetailsSimilar';
import ItemDetailsRecommendation from './itemDetailsRecommendation/ItemDetailsRecommendation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCrewDetails, fetchItemDetails, fetchOfficialVideos, getItemDetails } from '../../features/api/itemDetailsSlice';
import "./ItemDetails.scss";
import { getOfficialVideos } from '../../features/api/itemDetailsSlice';
import TrailerModal from './TrailerModal';

const ItemDetails = ({section}) => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [play, setPlay] = useState(false);
	const officialVideos = useSelector(getOfficialVideos);
	const {data, loading} = useSelector(getItemDetails);
	let trailer = null;

	if(officialVideos?.length) {
		 trailer = officialVideos?.find(vid => vid.name === "Official Trailer");
		if(!trailer) {
			trailer = officialVideos?.find(vid => vid.name.includes("Trailer"))
		}
	}
	

	useEffect(() => {
		if(id) {
		window.scrollTo(0, 0);
		dispatch(fetchItemDetails({section: section, id: Number(id)}))
		dispatch(fetchCrewDetails({section: section, id: Number(id)}))
		dispatch(fetchOfficialVideos({section: section, id: Number(id)}));
		}
	},[dispatch, section, id]);
	
	return (
		<Stack className='itemDetails__container' spacing={4}>
			<>
		{!loading ?
			<>
			{play && <Stack>
				<TrailerModal videoId={trailer?.key} play={play} setPlay={setPlay}/>
			</Stack>
			}
			<ItemDetailsDescription setPlay={setPlay} data={data} loading={loading}/>
			<ItemDetailsTopCast />
			<ItemDetailsVideos />
			<ItemDetailsSimilar section={section} id={id}/>
			<ItemDetailsRecommendation section={section} id={id}/>
			</>
			 :"Loading..."}
			</>
		</Stack>
	)
}

export default ItemDetails

