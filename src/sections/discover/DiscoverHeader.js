import React from 'react';
import { Typography, Stack, Select, FormControl, InputLabel, MenuItem, } from '@mui/material';


const DiscoverHeader = ({mediaType, genreList, selectedGenre, setSelectedGenre, setCurrentPage }) => {

	const handleGenreChange = (e) => {
		console.log('inhere', e.target.value)
		if(e.target.value === "all") {
		setSelectedGenre("")
		} else {
		setSelectedGenre(e.target.value)
		}
		setCurrentPage(1)
		// fetchInitialData(e.target.value);
	}
	// console.log(genreList)
	return (
		<Stack direction={{xs:"column", sm:"row"}} justifyContent="space-between" alignItems="center" spacing={2}>
			<Stack sm={2}>
				<Typography sx={{fontSize: {xs: "16px", sm: "22px", md:"26px"}}}>
					{`Explore ${mediaType === "movie" ? "Movies" : "TV Shows"}`}
				</Typography>
			</Stack>
			<Stack sm={10} direction="row" spacing={2} justifyContent={{xs:"space-evenly", sm:"center"}}>
				<Stack>
					<FormControl fullWidth sx={{color:"inherit", width:"120px",mt:"10px"}}>
						<InputLabel sx={{color:"inherit", top:"-8px"}} id="genre-select">Genre</InputLabel>
						<Select
							labelId="genre-select"
							id="genre-simple-select"
							value={selectedGenre}
							label="Genre"
							placeholder='Genre'
							onChange={handleGenreChange}
							variant="outlined"
							autoWidth
							sx={{backgroundColor:"#1976d2"}}
							size="small"
						>			
						{genreList?.map(genre => (
							<MenuItem key={genre.id} value={genre.id || "all"}>{genre.name}</MenuItem>
						))}
						</Select>
					</FormControl>
				</Stack>
				<Stack>
				{/* <FormControl fullWidth sx={{color:"inherit",minWidth:"120px"}}>
						<InputLabel sx={{color:"white",}} id="sort-select">Sort by</InputLabel>
						<Select
							labelId="sort-select"
							id="sort-simple-select"
							value={''}
							label="Sort by"
							// onChange={""}
							variant="outlined"
							sx={{ backgroundColor:"#1976d2"}}
							size="small"
						>			
						
							<MenuItem  value={''}>{"sort me"}</MenuItem>
						</Select>
					</FormControl> */}
				</Stack>
			</Stack>
		</Stack>
	)
}

export default DiscoverHeader