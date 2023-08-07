import React, {useEffect, useState} from 'react';
import { ButtonGroup, Stack, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchTopRated, fetchTrendingAll, fetchWhatspopular } from '../../../features/api/apiSlice';


const CarouselHeader = ({title, option1, option2, section, show=true}) => {
	const [activeBtn, setActiveBtn] = useState(option1);
	const dispatch = useDispatch();

	const handleOptionClick = e => {
		setActiveBtn(e.target.name)
	};

	useEffect(() => {
		if(section === "trending") {
			dispatch(fetchTrendingAll(activeBtn))
		}
		if(section === "whatspopular") {
			dispatch(fetchWhatspopular(activeBtn));
		}
		if(section === "toprated") {
			dispatch(fetchTopRated(activeBtn))
		}
	}, [dispatch, activeBtn, section])

	return (
		<Stack className='carousel__header__container' direction={{xs:"column", sm:"row"}} justifyContent="space-between" alignItems="center">
			<Stack className='carousel__header__title' sx={{
				mb: {xs: "10px" , md: "auto"}
			}}>
				<Typography sx={{
					fontSize:{xs: "20px", sm:"24px", md:"28px"},
				}}>
					{title}
				</Typography>
			</Stack>
			{show &&
			<Stack className='carousel__header__btns' direction="row" justifyContent="space-between">
				<ButtonGroup sx={{height:"30px"}}>
					<Button 
						variant={activeBtn === option1 ? "contained" : "outlined"} 
						className={activeBtn === option1 ? "active" : ""}
						name={option1}
						onClick={handleOptionClick}
						style={{minWidth: "100px"}}
						>
							{option1 && section !== "trending" ? "movies" : option1}
					</Button>
					<Button 
						variant={activeBtn === option2 ? "contained" : "outlined"} 
						className={activeBtn === option2 ? "active" : ""}
						name={option2}
						onClick={handleOptionClick}
						style={{minWidth: "100px"}}
						>
							{option2 && section !== "trending" ? "TV Shows" : option2}
					</Button>
				</ButtonGroup>
			</Stack>
		}
		</Stack>
	)
}

export default CarouselHeader;