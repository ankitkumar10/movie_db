import { Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getImageConfigs } from '../../features/api/configurationSlice';
import { axiosInstance } from '../../utility/constants';
import CarouselItem from '../common/carouselItem/CarouselItem';
import DiscoverHeader from './DiscoverHeader';
import { useSelector } from 'react-redux';
import "./Discovery.scss";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FaSpinner } from 'react-icons/fa';

const Discover = () => {
	const {mediaType} = useParams('');
	const [currentPage, setCurrentPage] = useState(1);
	// const [ isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const imageConfigs = useSelector(getImageConfigs);
	const [genreList, setGenreList] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState("");

	const fetchInitialData = useCallback(async () => {
		
		try {
			const response = await axiosInstance.get(`/discover/${mediaType}?page=${1}&with_genres=${selectedGenre}`);
			console.log(response)
			setData(response.data);
			setCurrentPage(prev => prev + 1)
		} catch (err) {
			console.log(err)
		}finally {
		}

	},[mediaType, selectedGenre]);

	const fetchInfinteData = async () => {
	try {
		const response = await axiosInstance.get(`/discover/${mediaType}?page=${currentPage}&with_genres=${selectedGenre}`);
		if(data.results) {
			setData(prev => ({
				...prev,
				results: [...prev.results, ...response.data.results]
			}))
			setCurrentPage(prev => prev + 1);
		}
	} catch (err) {
		console.log(err)
	} finally {
	}
}

	const fetchGenres = useCallback(async () => {
		try {
			const response = await axiosInstance.get(`/genre/${mediaType}/list`);
			const genreList = [{id:"all", name: "Clear"}, ...response.data.genres]
			setGenreList(genreList);
		} catch (error) {
			console.log(error)
		}
	},[mediaType])

	useEffect(() => {
		fetchGenres();
	}, [fetchGenres])

	useEffect(() => {
		fetchInitialData();
	}, [selectedGenre, mediaType, fetchInitialData])

	
	if(!data) {
		return (
			<Stack><Typography>No data found.</Typography></Stack>
		)
	}

	// console.log(data)

	return (
		<Stack className='discovery__container' spacing={3}>
			<DiscoverHeader 
				mediaType={mediaType}
				genreList={genreList}
				selectedGenre={selectedGenre}
				setCurrentPage={setCurrentPage}
				setSelectedGenre={setSelectedGenre}
				fetchInitialData={fetchInitialData} />
			
			<InfiniteScroll
				dataLength={data?.results?.length || []}
				next={fetchInfinteData}
				hasMore={true}
				// loader={<FaSpinner />}
			>
			<Stack direction="row" flexWrap="wrap" gap={2} 
				justifyContent="center" alignItems="center" >
				{data?.results?.map(item => {
					return (			
						<CarouselItem  
							item={item} 
							imageConfigs={imageConfigs}
							height="400px"
							width="220px"
							key={item.id}
						/>
			)
		})}
			</Stack>
			</InfiniteScroll>
		</Stack>
	)
}

export default Discover