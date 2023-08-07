import { Stack, Typography } from '@mui/material'
import React, {useCallback, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../utility/constants';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FaSpinner } from 'react-icons/fa';
import CarouselItem from '../common/carouselItem/CarouselItem';
import { getImageConfigs } from '../../features/api/configurationSlice';
import { useSelector } from 'react-redux';

const Collection = () => {
	const {query} = useParams();
	const [pageNo, setPageNo] = useState(1);
	const imageConfigs = useSelector(getImageConfigs);
	const [data, setData] = useState([]);

	const fetchInitialCollection = useCallback(async () => {
		if(pageNo === 1) {
		try {
			const response = await axiosInstance.get(`search/multi?query=${query}&page=${1}`)
			setData(response.data);
			setPageNo(prev => prev + 1);
		} catch (err) {
			console.log(err)
		}
	}
	},[pageNo, query]) 

	const fetchInfiteCollection = async () => {
		try {
			const response = await axiosInstance.get(`search/multi?query=${query}&page=${pageNo}`)
			setData(prev => ({
				...prev,
				results: [...prev.results, ...response.data.results]
			}))
			setPageNo(prev => prev + 1);
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		fetchInitialCollection();
	}, [fetchInitialCollection]);

	useEffect(() => {
		setPageNo(1)
	}, [query])


	return (
		<Stack sx={{minHeight:"70vh", p:"10px 30px"}} spacing={2}>
			{!(data?.results?.length) ?
					<Stack>
					<Typography>
						Sorry, no relevant result found for {query}
					</Typography>
				</Stack>
				
			:
			<>
			<Stack>
				<Typography sx={{fontSize:{xs:"14px", sm:"20px", md:"28px"}}}>
					{`Search results for ${query}`}
				</Typography>
			</Stack>
			<Stack>
				<InfiniteScroll
					dataLength={data?.results?.length || []}
					next={fetchInfiteCollection}
					hasMore={true}
					loader={<FaSpinner />}
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
			</>
			}
		</Stack> 
	)
}

export default Collection